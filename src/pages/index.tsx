import { useEffect, useState, useRef } from 'react';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { getArticles } from '../services/api';
import type { Article } from '../services/api';

import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';
import LoadingRing from '../components/LoadingRing';

interface HomeProps {
  initialArticles: Article[]
  page: number;
  articlesPerPage: number;
}

const Home: NextPage<HomeProps> = ({ initialArticles, page, articlesPerPage }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [isLoading, setIsLoading] = useState(false);
  const apiPage = useRef(page);

  useEffect(() => {
    const loadTrigger = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsLoading(true);
          apiPage.current += 1;
          getArticles(apiPage.current, articlesPerPage)
            .then(newArticles => {
              if (newArticles.length === 0) {
                loadTrigger.disconnect();
              }

              setArticles(state => [...state, ...newArticles]);
              setIsLoading(false);
            });
        }
      });
    });

    loadTrigger.observe(document.querySelector('#load-trigger')!);

    return () => loadTrigger.disconnect();
  }, [articlesPerPage]);

  return (
    <main>
      <section className={styles.articles}>
        {articles.map(article => <ArticleCard key={article.id} {...article} />)}
      </section>
      <div className={styles.loadingWrapper}>
        { isLoading && <LoadingRing /> }
      </div>
      <div id="load-trigger" className={styles.loadTrigger} />
    </main>
  );
}

export default Home;

export const getServerSideProps = async () => {
  try {
    const page = 1;
    const articlesPerPage = 10;
    const articles = await getArticles(page, articlesPerPage);

    return {
      props: {
        initialArticles: articles,
        page,
        articlesPerPage
      }
    }
  } catch {
    return {
      props: {
        initialPosts: []
      }
    }
  }
};

import { useState } from 'react';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { getArticles } from '../services/api';
import type { Article } from '../services/api';

import Header from '../components/Header';
import ArticleCard from '../components/ArticleCard';

interface HomeProps {
  initialArticles: Article[]
  page: number;
  articlesPerPage: number;
}

const Home: NextPage<HomeProps> = ({ initialArticles, page, articlesPerPage }) => {
  const [articles, setArticles] = useState(initialArticles);

  return (
    <div>
      <Header />
      <main>
        <section className={styles.articles}>
          {articles.map(article => <ArticleCard key={article.id} {...article} />)}
        </section>
      </main>
</div>
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

import { useState } from 'react';
import Link from 'next/link';
import type { NextPage } from 'next';

import styles from '../styles/Home.module.css';

import { getArticles } from '../services/api';
import type { Article } from '../services/api';

import Header from '../components/Header';

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
          {articles.map(article => (
            <Link passHref href={`/post/${article.id}`} key={article.id}>
              <a className={styles.articleWrapper}>
                <article className={styles.article}>
                  <div className={styles.coverWrapper}>
                    <img className={styles.cover} src={article.imageUrl} alt={article.title} />
                  </div>
                  <div className={styles.articleContent}>
                    <span>{article.author}</span>
                    <h2>{article.title}</h2>
                    <p>{ article.article.replace(/<\/?p>/g, '').substring(0, 100) }</p>
                  </div>
                </article>
              </a>
            </Link>
          ))}
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

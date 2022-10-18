import type { GetStaticProps } from 'next';

import styles from '../../styles/Post.module.css';

import { getAllArticles, getArticleById } from '../../services/api';
import type { Article } from '../../services/api';

import ArticlePost from '../../components/ArticlePost';
import PageHead from '../../components/PageHead';

interface ArticlePageProps {
  article: Article;
}

const ArticlePage = ({ article }: ArticlePageProps) => {
  return (
    <PageHead title={`Blog Coderockr | ${article.title}`}>
      <div className={styles.container}>
        <ArticlePost {...article} />
      </div>
    </PageHead>
  );
}

export const getStaticPaths = async () => {
  const articles = await getAllArticles();
  const paths = articles.map(article => ({ params: { id: article.id } }));

  return {
    paths,
    fallback: false
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;

  try {
    const article = await getArticleById(id);

    return {
      props: {
        article
      }
    };
  } catch {
    return {
      props: {}
    };
  }

}

export default ArticlePage;

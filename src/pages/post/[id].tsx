import type { GetServerSideProps } from 'next';

import styles from '../../styles/Post.module.css';

import { getArticleById } from '../../services/api';
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

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params?.id as string;

  try {
    const article = await getArticleById(id);

    if (!article) {
      return {
        redirect: {
          destination: '/',
          permanent: false
        }
      };
    }

    return {
      props: {
        article,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    };
  }

}

export default ArticlePage;

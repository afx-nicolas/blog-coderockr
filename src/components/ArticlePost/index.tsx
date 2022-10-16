import Image from 'next/image';

import styles from './ArticlePost.module.css';

import { useDate } from '../../hooks';

import type { Article } from '../../services/api';

const ArticlePost = ({ article, id, date, title, author, authorEmail, imageUrl }: Article) => {
  const articleDate = useDate(date);
  const dateOptions: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric', year: 'numeric' };

  return (
    <article className={styles.article}>
      <header className={styles.articleHeader}>
        <div className={styles.coverWrapper}>
          <Image
            className={styles.cover}
            src={imageUrl}
            alt={title}
            layout="fill"
            placeholder="blur"
            blurDataURL={imageUrl}
          />
        </div>
        <div className={styles.articleInfo}>
          <span className={styles.date}>{articleDate && articleDate.toLocaleString('default', dateOptions)}</span>
          <address className={styles.author}><a href={`mailto:${authorEmail}`}>{author}</a></address>
          <h1 className={styles.title}>{title}</h1>
        </div>
      </header>
      <section dangerouslySetInnerHTML={{ __html: article }} className={styles.articleBody} />
    </article>
  );
};

export default ArticlePost;
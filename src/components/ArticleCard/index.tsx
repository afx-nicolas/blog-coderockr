import Link from 'next/link';
import Image from 'next/image';

import type { Article } from '../../services/api';

import styles from './ArticleCard.module.css';

const ArticleCard = ({ id, article, imageUrl, title, author }: Article) => {
  return (
    <Link passHref href={`/post/${id}`}>
      <a className={styles.articleWrapper}>
        <article className={styles.article}>
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
          <div className={styles.articleContent}>
            <span>{author}</span>
            <h2>{title}</h2>
            <p>{article.replace(/<\/?p>/g, '').substring(0, 100) }</p>
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ArticleCard;

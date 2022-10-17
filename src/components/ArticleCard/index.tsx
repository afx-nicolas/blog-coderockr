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
            <span className={styles.author}>{author}</span>
            <h2 dangerouslySetInnerHTML={{ __html: title }} className={styles.title} />
            <div dangerouslySetInnerHTML={{ __html: article.substring(0, 50).trimEnd() + '...' }} className={styles.body} />
          </div>
        </article>
      </a>
    </Link>
  );
}

export default ArticleCard;

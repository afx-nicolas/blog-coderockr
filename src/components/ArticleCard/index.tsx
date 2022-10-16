import Link from 'next/link';
import Image from 'next/image';

import type { Article } from '../../services/api';

import homeStyles from '../../styles/Home.module.css';

const ArticleCard = ({ id, article, imageUrl, title, author }: Article) => {
  return (
    <Link passHref href={`/post/${id}`}>
      <a className={homeStyles.articleWrapper}>
        <article className={homeStyles.article}>
          <div className={homeStyles.coverWrapper}>
            <Image
              className={homeStyles.cover}
              src={imageUrl}
              alt={title}
              layout="fill"
              placeholder="blur"
              blurDataURL={imageUrl}
            />
          </div>
          <div className={homeStyles.articleContent}>
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

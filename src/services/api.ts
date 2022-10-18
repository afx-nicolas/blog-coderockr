import DOMPurify from 'isomorphic-dompurify';

import { validateArrayObjects } from '../lib';
import type { FieldSchema } from '../lib';

export interface Article {
  article: string;
  author: string;
  authorEmail: string;
  date: string;
  id: string;
  imageUrl: string;
  title: string;
}

export const ResponseSchema: FieldSchema[] = [
  { field: 'id', type: 'string' },
  { field: 'author', type: 'string' },
  { field: 'authorEmail', type: 'string' },
  { field: 'title', type: 'string' },
  { field: 'article', type: 'string' },
  { field: 'date', type: 'string' },
  { field: 'imageUrl', type: 'string' },
]

type GetAllArticles = () => Promise<Article[]>;

export const getAllArticles: GetAllArticles = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`);
  const data = await response.json();
  const articles = data.map((article: Article) => ({ ...article, title: DOMPurify.sanitize(article.title), article: DOMPurify.sanitize(article.article) }));

  return validateArrayObjects(articles, ResponseSchema);
};

type GetArticles = (page?: number, articlesPerPage?: number) => Promise<Article[]>;

export const getArticles: GetArticles = async (page = 1, articlesPerPage = 10) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?_page=${page}&_limit=${articlesPerPage}&_sort=date&_order=desc`);
  const data = await response.json();
  const articles = data.map((article: Article) => ({ ...article, title: DOMPurify.sanitize(article.title), article: DOMPurify.sanitize(article.article) }));

  return validateArrayObjects(articles, ResponseSchema);
};

type GetArticleById = (id: string) => Promise<Article>;

export const getArticleById: GetArticleById = async (id) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles/${id}`);
  const data = await response.json();
  const article: Article = { ...data, title: DOMPurify.sanitize(data.title), article: DOMPurify.sanitize(data.article) };

  return article;
}

interface NewArticle {
  article: string;
  author: string;
  authorEmail: string;
  date: string;
  imageUrl: string;
  title: string;
}

type SendArticle = (article: NewArticle) => Promise<any>;

export const sendArticle: SendArticle = async (article) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles`, {
    method: 'POST',
    body: JSON.stringify(article),
    headers
  });
  const data = await response.json();

  return data;
}

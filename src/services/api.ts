export interface Article {
  article: string;
  author: string;
  date: Date;
  id: string;
  imageUrl: string;
  title: string;
}

type GetArticles = (page?: number, articlesPerPage?: number) => Promise<Article[]>;

export const getArticles: GetArticles = async (page = 1, articlesPerPage = 10) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/articles?_page=${page}&_limit=${articlesPerPage}&_sort=date&_order=desc`);
  const data = await response.json();

  return data as Article[];
};

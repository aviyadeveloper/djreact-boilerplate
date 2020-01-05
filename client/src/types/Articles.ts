export interface ArticleFull extends ArticleShort {
  content: string;
}

export interface ArticleShort {
  id: string;
  title: string;
  summary: string;
}

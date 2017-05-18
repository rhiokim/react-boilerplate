// @flow

declare type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

declare type ArticleAction = BaseAction & {
  articles?: Array<Article>;
};

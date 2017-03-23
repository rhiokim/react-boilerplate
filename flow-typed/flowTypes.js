/* @flow */

declare type ArticleAction = {
  type: string;
  articles?: Array<Object>;
  receivedAt: Date;
};

declare type UserAction = {
  type: string;
  users?: Array<Object>;
  receivedAt: Date;
};

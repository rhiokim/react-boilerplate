/* @flow */


declare type Article = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

declare type Geo = {
  lat: string;
  lng: string;
};

declare type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

declare type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
}

declare type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
};

declare type BaseAction = {
  type: string;
  receivedAt: Date;
};

declare type ArticleAction = BaseAction & {
  articles?: Array<Article>;
};

declare type UserAction = BaseAction & {
  users?: Array<Object>;
};

// @flow

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

declare type UserAction = BaseAction & {
  users?: Array<Object>;
};

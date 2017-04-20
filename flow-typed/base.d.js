//@ flow

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

declare type BaseAction = {
  type: string;
  receivedAt?: Date;
};

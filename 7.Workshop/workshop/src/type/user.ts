import { Address, Company } from "./common";

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
};

export type UserDetails = {
  address: Address;
  phone: string;
  website: string;
  company: Company;
} & User;

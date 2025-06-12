import { JSX } from 'react';

export type BattlegroundsType = { icon: JSX.Element; label: string; value: string };

type ProductItem = {
  name: string;
  image?: string;
  images?: string[];
  specs: string[];
};

export type ProductCategory = {
  category: string;
  items: ProductItem[];
};

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

export type GalleryImagesType = {
  url: string;
  title: string;
};

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

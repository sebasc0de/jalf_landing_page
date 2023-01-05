export interface Product {
  id: number;
  attributes: ProductAttributes;
}

export interface ProductInCart extends Product {
  quantity: number;
}

export interface ProductAttributes {
  name: string;
  regular_price: number;
  reseller_price: null;
  short_desc: null;
  brand: Brand;
  line: Line;
  createdAt: Date;
  updatedAt: Date;
  publishedAt: Date;
  size: string;
  images: ProductImages;
}

export enum Brand {
  Biobellus = "biobellus",
}

export interface ProductImages {
  data: Image[] | null;
}

export interface Image {
  id: number;
  attributes: ImageAttributes;
}

export interface ImageAttributes {
  name: string;
  alternativeText: null;
  caption: null;
  width: number;
  height: number;
  formats: Formats;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: Date;
  updatedAt: Date;
}

export interface Formats {
  large: Large;
  small: Large;
  medium: Large;
  thumbnail: Large;
}

export interface Large {
  ext: string;
  url: string;
  hash: string;
  mime: string;
  name: string;
  path: null;
  size: number;
  width: number;
  height: number;
}

export enum Line {
  LineaCapilar = "linea capilar",
  LineaFacial = "linea facial",
}

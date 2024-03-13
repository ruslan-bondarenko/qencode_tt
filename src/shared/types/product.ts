export type ICategory = {
  id: number,
  name: string, 
  image: string, 
  creationAt: string, 
  updated: string, 
};

export type IProduct = {
  id: number,
  title: string,
  price: number,
  description: string,
  category: ICategory,
  images: string[]
};


export type Category = {
  id: number,
  parentId: number | null,
  name: string,
  colors?: {
    primary: string,
    secondary: string,
  }
}

export type Product = {
  id: number,
  name: string,
  description: string,
  price: number,
  images: string[],
  concentration: number,
}

export type ProductQuantity = {
  id: number,
  quantity: number,
}

export type User = {
  id?: number,
  username?: string,
  email?: string,
  password?: string,
  role?: string,
  basket?: ProductQuantity[],
  favorites?: number[],
  createdAt?: Date,
}

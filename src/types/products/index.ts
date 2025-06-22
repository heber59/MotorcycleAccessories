import type { IBike } from "./bikeTipe";

interface IProduct {
  id: string;
  type: string;
  bike: IBike[];
  name: string;
  price: number;
  image: string;
  description: string;
}
export type { IProduct };

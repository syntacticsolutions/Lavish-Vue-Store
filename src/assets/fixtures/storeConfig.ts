export type Config = {
  type: string;
  title: string;
  key: string;
  sm?: Array<number>;
  showIfFalse?: boolean;
};

export const storeConfig: Array<Config> = [
  {
    type: "preview",
    title: "Preview",
    sm: [310, 266],
    key: "image"
  },
  {
    type: "Text",
    title: "Title",
    key: "title"
  },
  {
    type: "Currency",
    title: "Price",
    key: "price"
  },
  {
    type: "Boolean",
    title: "Free Shipping",
    key: "freeShipping",
    showIfFalse: false
  },
  {
    type: "Boolean",
    title: "In Stock",
    key: "inStock",
    showIfFalse: true
  }
];

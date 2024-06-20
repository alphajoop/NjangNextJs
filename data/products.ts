import { Product } from '@/types/Product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Apple',
    type: 'fruit',
    price: 1.5,
    description: 'A sweet, crisp fruit.',
    reviews: [
      {
        id: 1,
        productId: 1,
        rating: 5,
        comment: 'Delicious and fresh!',
        reviewer: 'Alice',
      },
      {
        id: 2,
        productId: 1,
        rating: 4,
        comment: 'Very tasty.',
        reviewer: 'Bob',
      },
    ],
  },
  {
    id: 2,
    name: 'Banana',
    type: 'fruit',
    price: 1.0,
    description: 'A soft, tropical fruit.',
    reviews: [
      {
        id: 3,
        productId: 2,
        rating: 5,
        comment: 'Perfectly ripe.',
        reviewer: 'Charlie',
      },
      {
        id: 4,
        productId: 2,
        rating: 3,
        comment: 'A bit too soft for my taste.',
        reviewer: 'Dave',
      },
    ],
  },
  {
    id: 3,
    name: 'Carrot',
    type: 'vegetable',
    price: 0.75,
    description: 'A crunchy root vegetable.',
    reviews: [
      {
        id: 5,
        productId: 3,
        rating: 4,
        comment: 'Very crunchy and fresh.',
        reviewer: 'Eve',
      },
    ],
  },
  {
    id: 4,
    name: 'Broccoli',
    type: 'vegetable',
    price: 2.0,
    description: 'A green, tree-like vegetable.',
    reviews: [
      {
        id: 6,
        productId: 4,
        rating: 4,
        comment: 'Great for stir-fry.',
        reviewer: 'Frank',
      },
      {
        id: 7,
        productId: 4,
        rating: 5,
        comment: 'Very fresh and healthy.',
        reviewer: 'Grace',
      },
    ],
  },
  {
    id: 5,
    name: 'Strawberry',
    type: 'fruit',
    price: 2.5,
    description: 'A small, juicy red fruit.',
    reviews: [
      {
        id: 8,
        productId: 5,
        rating: 5,
        comment: 'Super sweet and juicy.',
        reviewer: 'Hannah',
      },
    ],
  },
];

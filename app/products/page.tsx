import { products } from '@/data/products';

export default function ProductList() {
  return (
    <>
      <h1 className="text-4xl font-semibold">Product list</h1>
      {products.map((product) => (
        <div key={product.id} className="mb-10 font-medium">
          <h2>{product.name}</h2>
          <p>Type: {product.type}</p>
          <p>Price: ${product.price.toFixed(2)}</p>
          <p>{product.description}</p>
        </div>
      ))}
    </>
  );
}

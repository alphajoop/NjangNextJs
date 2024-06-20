import { products } from '@/data/products';

export default function ProductDetails({
  params,
}: {
  params: { productId: string };
}) {
  const product = products.find((p) => p.id === parseInt(params.productId));
  if (!product) {
    return <h1>Product not found</h1>;
  }
  return (
    <>
      <h1 className="text-2xl font-semibold">Details about {product.name}</h1>
      <div className="font-medium">
        <p>Type: {product.type}</p>
        <p>Price: ${product.price.toFixed(2)}</p>
        <p>Description: {product.description}</p>
        {product.reviews && (
          <div className="mt-10">
            <h2>Reviews</h2>
            <ul>
              {product.reviews.map((review) => (
                <li key={review.id} className="mb-4">
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                  <p>Reviewer: {review.reviewer}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

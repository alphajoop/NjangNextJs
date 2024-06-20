import { products } from '@/data/products';

export default function ReviewDetail({
  params,
}: {
  params: { productId: string; reviewId: string };
}) {
  const product = products.find((p) => p.id === parseInt(params.productId));
  if (!product) {
    return <h1>Product not found</h1>;
  }

  const review = product.reviews?.find(
    (r) => r.id === parseInt(params.reviewId),
  );
  if (!review) {
    return <h1>Review not found</h1>;
  }
  return (
    <>
      <h1>
        Review {review.id} for product {product.name}
      </h1>
      <p>Rating: {review.rating}</p>
      <p>Comment: {review.comment}</p>
      <p>Reviewer: {review.reviewer}</p>
    </>
  );
}

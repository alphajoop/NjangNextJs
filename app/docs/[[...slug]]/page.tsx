import { products } from '@/data/products';

export default function Docs({
  params,
}: {
  params: {
    slug: string[];
  };
}) {
  const productDetails = (slug: string[]) => {
    const product = products.find(
      (p) => p.name.toLowerCase() === slug[0].toLowerCase(),
    );
    if (!product) {
      return <h1>Product not found</h1>;
    }

    const featureOrConcept = slug[1];
    const review = product.reviews?.find((r) =>
      r.comment.toLowerCase().includes(featureOrConcept),
    );

    if (slug.length === 2) {
      return (
        <>
          <h1 className="text-2xl font-semibold">
            Viewing docs for product {product.name} and concept {slug[1]}
          </h1>
          <div className="font-medium">
            {review ? (
              <ul>
                <li>
                  <p>Rating: {review.rating}</p>
                  <p>Comment: {review.comment}</p>
                  <p>Review by {review.reviewer}</p>
                </li>
              </ul>
            ) : (
              <p>No specific concept or feature found.</p>
            )}
          </div>
        </>
      );
    } else if (slug.length === 1) {
      return (
        <>
          <div className="font-medium">
            <h1 className="text-2xl font-semibold">
              Viewing docs for product {product.name}
            </h1>
            <p>Type: {product.type}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {product.reviews && (
              <div className="mt-10">
                <h2>Reviews</h2>
                <ul>
                  {product.reviews.map((review) => (
                    <li key={review.id} className="mb-4">
                      <p>Rating: {review.rating}</p>
                      <p>Comment: {review.comment}</p>
                      <p>Review by {review.reviewer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </>
      );
    }
    return null;
  };

  return (
    <>
      {params.slug ? (
        productDetails(params.slug)
      ) : (
        <h1 className="text-2xl font-semibold">Docs Home page</h1>
      )}
    </>
  );
}

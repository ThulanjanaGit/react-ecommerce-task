import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-12 text-center mb-5">
          <h1 className="display-4 mb-3">Products</h1>
          <hr className="w-25 mx-auto" />
        </div>
      </div>

      {/* Product Cards Grid */}
      <div className="row">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductsList;

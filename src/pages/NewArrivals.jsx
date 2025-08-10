import { products } from "../data/products";
import { Navbar, ProductsList, Footer } from "../components";

const NewArrivals = () => {
  return (
    <>
      <Navbar />
      <ProductsList products={products} />
      <Footer />
    </>
  );
};

export default NewArrivals;

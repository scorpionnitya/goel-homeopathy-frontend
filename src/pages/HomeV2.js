import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Brands from "../components/home/Brands";

function HomeV2({ cart }) {
  return (
    <>
      <Navbar cart={cart} />
      <Hero />
      <Categories />
      <Brands />
    </>
  );
}

export default HomeV2;
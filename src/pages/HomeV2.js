import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Categories from "../components/home/Categories";
import Brands from "../components/home/Brands";
import WhyChoose from "../components/home/WhyChoose";
import HomiscareAI from "../components/home/HomiscareAI";


function HomeV2({ cart }) {
  return (
    <>
<Navbar cart={cart} />
<Hero />
<Categories />
<Brands />
<HomiscareAI />
<WhyChoose />
    </>
  );
}

export default HomeV2;
import styles from "./page.module.css";
import Hero from "../app/component/Hero/page"
import AllProducts from "../app/component/AllProducts/page"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Testimonial from "./component/Testimonial/page"
import Stories from "./component/Stories/page"
export default function Home() {
  return (
    <>
      <Hero />
      <AllProducts />
      <Stories />
      <Testimonial />
    </>
  );
}

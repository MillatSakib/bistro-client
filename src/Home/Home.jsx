import Bistroboss from "../BistroBoss/Bistroboss";
import Callus from "../CallUs/Callus";
import CCarousel from "../Carousel/CCarousel";
import ChefRecomendation from "../ChefRecomendation/ChefRecomendation";
import Featured from "../Featured/Featured";
import FormMenu from "../FormMenu/FormMenu";
import ImageSwiper from "../Swiper/ImageSwiper";
import Testimonial from "../Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <CCarousel></CCarousel>
      <div className=" my-16 mx-4">
        <ImageSwiper></ImageSwiper>
      </div>
      <Bistroboss></Bistroboss>
      <FormMenu></FormMenu>
      <Callus></Callus>
      <ChefRecomendation></ChefRecomendation>
      <Featured></Featured>
      <Testimonial></Testimonial>
    </div>
  );
};

export default Home;

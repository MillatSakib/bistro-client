import { Rating } from "@smastrom/react-rating";
import quote from "../../public/quote.png";
import "@smastrom/react-rating/style.css";

const TestimonialCard = () => {
  return (
    <div className="px-16">
      <Rating
        readOnly
        value={3}
        key={2}
        style={{ maxWidth: 300 }}
        className="mx-auto"
      />
      {/* <div className="mx-auto w-[100px] select-none"></div> */}

      <img src={quote} className="mx-auto w-[100px] select-none" />

      <div>
        <p className="text-center max-w-[1450px] mx-auto my-5 text-xl">
          Various version have evolved over the years, sometimes by accident,
          sometimes on purpose (injected humour and the like). It is a long
          established fact that a reader will be distracted by the readable
          content of a page when looking at its layout.
        </p>
        <h3 className="uppercase text-2xl md:text-3xl lg:text-4xl text-orange-500 font-bold text-center">
          Jane Doe
        </h3>
      </div>
    </div>
  );
};

export default TestimonialCard;

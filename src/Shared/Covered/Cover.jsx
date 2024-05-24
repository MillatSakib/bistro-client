import { Parallax } from "react-parallax";

const Cover = ({ img, heading, description }) => {
  return (
    <Parallax blur={{ min: -15, max: 15 }} strength={-200}>
      <div
        className="hero h-[700px]"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="w-[90vw] md:w-[80vw] lg:w-[70vw] bg-black bg-opacity-60 py-16 px-52">
            <h1 className="mb-5 text-2xl md:text-4xl font-semibold font-serif uppercase">
              {heading}
            </h1>
            <p className="mb-5 text-xs uppercase tracking-wide leading-loose font-semibold">
              {description}
            </p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;

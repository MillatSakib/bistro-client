import React from "react";
import YellowButton from "../YellowButton/YellowButton";

const Foodcard = ({ singleData }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="relative">
        <img src={singleData?.image} alt="Shoes" className="w-full" />
        <div className="absolute top-6 bg-black bg-opacity-60 text-white px-6 py-2 rounded-lg right-8">
          ${singleData?.price}
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{singleData?.name}</h2>
        <p>{singleData?.recipe}</p>
        <div className="card-actions justify-center">
          <YellowButton text={"Add to cart"}></YellowButton>
        </div>
      </div>
    </div>
  );
};

export default Foodcard;

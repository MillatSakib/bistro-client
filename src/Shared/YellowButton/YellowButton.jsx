import React from "react";

const YellowButton = ({ text, handleClick }) => {
  return (
    <div className="text-center my-6">
      <button
        className="btn btn-outline btn-warning border-0 text-2xl px-10 pt-5 pb-10 border-b-4 uppercase bg-slate-100"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default YellowButton;

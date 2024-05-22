const Heading = ({ subHeading, heading }) => {
  return (
    <div className="text-center my-20">
      <div className="text-yellow-500 my-2 italic text-xl">
        ---{subHeading}---
      </div>
      <div className="uppercase font-semibold text-3xl border-y-2 inline-block px-6 border-slate-300 py-2">
        {heading}
      </div>
    </div>
  );
};

export default Heading;

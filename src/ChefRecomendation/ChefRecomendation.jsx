import Foodcard from "../Shared/FoodCard/Foodcard";
import Heading from "../Shared/Heading/Heading";

const ChefRecomendation = () => {
  const data = [{}, {}, {}];
  return (
    <div>
      <Heading heading={"chef recommends"} subHeading={"Should Try"}></Heading>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center max-w-[1650px] mx-auto px-4">
        {data.map((singleData, index) => (
          <Foodcard singleData={singleData} key={index}></Foodcard>
        ))}
      </div>
    </div>
  );
};

export default ChefRecomendation;

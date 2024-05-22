const Food = ({ image, foodName, price, description }) => {
  return (
    <div className="flex gap-4 justify-center">
      <img
        src={image}
        className="w-20 rounded-bl-full rounded-br-full rounded-tr-full"
      />
      <div>
        <div className="flex justify-between w-full">
          <div>{foodName}----------</div>
          <div className="text-yellow-500">${price}</div>
        </div>
        <div>{description}</div>
      </div>
    </div>
  );
};

export default Food;

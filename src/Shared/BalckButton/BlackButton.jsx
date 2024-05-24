const BlackButton = ({ text, handleClick }) => {
  return (
    <div className="text-center my-6">
      <button
        className="btn btn-outline border-0 text-xl px-10 pt-5 pb-10 border-b-4 uppercase"
        onClick={handleClick}
      >
        {text}
      </button>
    </div>
  );
};

export default BlackButton;

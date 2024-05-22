import BlackButton from "../Shared/BalckButton/BlackButton";
import Food from "../Shared/Food/Food";
import Heading from "../Shared/Heading/Heading";
import YellowButton from "../Shared/YellowButton/YellowButton";

const FormMenu = () => {
  return (
    <div>
      <Heading heading={"From our Menu"} subHeading={"Check it out"}></Heading>
      <div className="mx-auto my-10 grid-cols-1 grid lg:grid-cols-2 gap-10 justify-center max-w-[1650px]">
        <Food
          image={
            "https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/399302800_320143814051727_3571707993911944170_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XQMspka4xdsQ7kNvgHAJT8l&_nc_ht=scontent.fdac140-1.fna&oh=00_AYDqspmpjlF016T3Hk5BhOPPwdhA3aqTDaQqSNwUQS5pNw&oe=6652B53E"
          }
          price={"14.5"}
          description={
            " Roasted duck breast(served pink) with gratin potato and a griottine cherry sauce."
          }
          foodName={"ROAST DUCK BREAST"}
        ></Food>
        <Food
          image={
            "https://scontent.fdac140-1.fna.fbcdn.net/v/t39.30808-6/399302800_320143814051727_3571707993911944170_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=XQMspka4xdsQ7kNvgHAJT8l&_nc_ht=scontent.fdac140-1.fna&oh=00_AYDqspmpjlF016T3Hk5BhOPPwdhA3aqTDaQqSNwUQS5pNw&oe=6652B53E"
          }
          price={"14.5"}
          description={
            " Roasted duck breast(served pink) with gratin potato and a griottine cherry sauce."
          }
          foodName={"ROAST DUCK BREAST"}
        ></Food>
      </div>
      <BlackButton
        text="view full menu"
        handleClick={() => console.log("Hello")}
      ></BlackButton>
    </div>
  );
};

export default FormMenu;

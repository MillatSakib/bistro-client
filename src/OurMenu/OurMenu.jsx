import BlackButton from "../Shared/BalckButton/BlackButton";
import Cover from "../Shared/Covered/Cover";
import Covered from "../Shared/Covered/Covered";
import Food from "../Shared/Food/Food";
import Heading from "../Shared/Heading/Heading";
import image1 from "../assets/menu/banner3.jpg";
import dessert from "../assets/menu/dessert-bg.jpeg";
import pizza from "../assets/menu/pizza-bg.jpg";
import salad from "../assets/menu/salad-bg.jpg";
import soup from "../assets/menu/soup-bg.jpg";

const OurMenu = () => {
  return (
    <div>
      <div>
        <div className="-mt-40">
          <Covered
            img={image1}
            heading={"Our Menu"}
            description={"Would you like to Try A Dish?"}
          ></Covered>
        </div>
        <div>
          <Heading
            heading={"Today's Offer"}
            subHeading={"Don't miss"}
          ></Heading>
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
            text="Order Your Fevourite Food"
            handleClick={() => console.log("Hello")}
          ></BlackButton>
        </div>
      </div>
      <div className="my-16">
        <div>
          <Cover
            img={dessert}
            heading={"Desserts"}
            description={
              "lorefhlsdaaf fsdljfkldlfsd fsdidsjflwefnksdl klsdf sdljf lsdjfklsdjflwefsd jfsdilfsdhlf sdfjklasd fjsdlfjilsdejilfsdklf lsdf sdjklfjasdkasdlfgnasd fsdklasdjfkglsdklf fjklsdjfkljasdilfjriowefnlsd fdlkds lsdf jlsdf asdlfkjsdlfiowe ffjf"
            }
          ></Cover>
        </div>
        <div>
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
            text="Order Your Fevourite Food"
            handleClick={() => console.log("Hello")}
          ></BlackButton>
        </div>
      </div>

      <div className="my-16">
        <div>
          <Cover
            img={pizza}
            heading={"Pizza"}
            description={
              "lorefhlsdaaf fsdljfkldlfsd fsdidsjflwefnksdl klsdf sdljf lsdjfklsdjflwefsd jfsdilfsdhlf sdfjklasd fjsdlfjilsdejilfsdklf lsdf sdjklfjasdkasdlfgnasd fsdklasdjfkglsdklf fjklsdjfkljasdilfjriowefnlsd fdlkds lsdf jlsdf asdlfkjsdlfiowe ffjf"
            }
          ></Cover>
        </div>
        <div>
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
            text="Order Your Fevourite Food"
            handleClick={() => console.log("Hello")}
          ></BlackButton>
        </div>
      </div>

      <div className="my-16">
        <div>
          <Cover
            img={salad}
            heading={"Salads"}
            description={
              "lorefhlsdaaf fsdljfkldlfsd fsdidsjflwefnksdl klsdf sdljf lsdjfklsdjflwefsd jfsdilfsdhlf sdfjklasd fjsdlfjilsdejilfsdklf lsdf sdjklfjasdkasdlfgnasd fsdklasdjfkglsdklf fjklsdjfkljasdilfjriowefnlsd fdlkds lsdf jlsdf asdlfkjsdlfiowe ffjf"
            }
          ></Cover>
        </div>
        <div>
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
            text="Order Your Fevourite Food"
            handleClick={() => console.log("Hello")}
          ></BlackButton>
        </div>
      </div>

      <div className="my-16">
        <div>
          <Cover
            img={soup}
            heading={"Soups"}
            description={
              "lorefhlsdaaf fsdljfkldlfsd fsdidsjflwefnksdl klsdf sdljf lsdjfklsdjflwefsd jfsdilfsdhlf sdfjklasd fjsdlfjilsdejilfsdklf lsdf sdjklfjasdkasdlfgnasd fsdklasdjfkglsdklf fjklsdjfkljasdilfjriowefnlsd fdlkds lsdf jlsdf asdlfkjsdlfiowe ffjf"
            }
          ></Cover>
        </div>
        <div>
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
            text="Order Your Fevourite Food"
            handleClick={() => console.log("Hello")}
          ></BlackButton>
        </div>
      </div>
    </div>
  );
};

export default OurMenu;

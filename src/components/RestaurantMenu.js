import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestrauntMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resId } = useParams();

  //const dummy = "Dummy Data";

  const resInfo = useRestaurantMenu(resId);
  console.log(resInfo)

  const [showIndex, setShowIndex] = useState(0);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards } =
  //   resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
console.log(resInfo);
  
  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => (
    c?.card?.card?.["@type"]=== "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  ))
 console.log("I'm rendered again while onclick")
 console.log(categories);
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      
      {/* categories accordions */}

        {categories && categories.map((category, index) => (
        // controlled componen
        
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          // check = {index}
         
          // showItems={
          //   index === showIndex ? true : false}
          // //setShow = {()=> setShow(!show)}
          // setShowIndex={() => setShowIndex(pre => pre === index ? -1 : index)}
          // dummy={dummy}
        showItems = {(showIndex=== index ? true : false)}
        setShowIndex={()=> setShowIndex(pre => pre === index ? -1 : index)}
        />
      ))}
    </div>
 
  )
} 

export default RestaurantMenu;

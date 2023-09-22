import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  // const RestaurantCategory = ({ data }) => {
 // const [ show, setShow] = useState(false)
 
  const handleClick = () => {
   setShowIndex()
    
    
  };
  console.log("I'm from category")
  return (

    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div className="flex justify-between cursor-pointer" onClick={()=>(
          handleClick()
        )}>
          <span className="font-normal md:font-medium text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
      </div>
    </div>
  );
};

export default RestaurantCategory;

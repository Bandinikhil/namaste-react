



import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items, dummy, remove }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    // Dispatch an action
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex flex-col md:flex-row justify-between"
        >
          <div className="w-full md:w-3/12 p-2 md:p-4 relative">
            <div className="relative flex flex-row justify-between sm:order-1">
              <button
                className="p-1 md:px-2 mr-2 rounded-lg bg-black text-white shadow-lg absolute left-0"
                onClick={() => handleAddItem(item)}
              >
                +
              </button>
              <button
                className="p-1 md:px-2 ml-3 rounded-lg bg-black text-white shadow-lg absolute right-0"
                onClick={() => handleRemoveItem(item)}
              >
                -
              </button>
            </div>
            <img
              src={CDN_URL + item?.card?.info?.imageId}
              className="w-full h-auto md:h-full md:w-full"
              alt={item?.card?.info?.name}
            />
          </div>
          <div className="w-full md:w-9/12 sm:order-2">
            <div className="py-2">
              <span>{item?.card?.info?.name}</span>
              <span>
                - ₹
                {item.card.info.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <p className="text-xs">{item?.card?.info?.description}</p>
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ItemList;

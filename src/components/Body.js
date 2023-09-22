

import RestaurantCard from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

      const json = await data.json();
      console.log(json);

      const restChanining =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      if (Array.isArray(restChanining)) {
        setListOfRestaurants(restChanining);
        setFilteredRestaurant(restChanining);
      }
    } catch (error) {
      console.error("Error fetching and parsing data", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>Looks like you're offline!! Please check your internet connection;</h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  const handleSearch = () => {
    const filteredRestaurant = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurant(filteredRestaurant);
  };

  return (
    <div className="body">
      <div className="filter flex flex-col md:flex-row">
        <div className="search m-2 p-2 md:p-4">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-solid border-black py-1 px-2 md:py-2 md:px-4 rounded text-sm md:text-base"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            placeholder="Search Restaurants"
          />
          <button
            className="px-2 py-1 md:px-4 md:py-2 bg-blue-100 m-2 md:m-4 rounded-md text-sm md:text-base"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="search m-2 p-2 md:p-4 flex items-center">
          <button
            className="px-2 py-1 md:px-4 md:py-2 bg-gray-100 rounded-md text-sm md:text-base"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.info.avgRating > 4
              );
              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="search m-2 p-2 md:p-4 flex items-center">
          <label className="text-sm md:text-base">UserName : </label>
          <input
            className="border border-solid border-black py-1 px-2 md:py-2 ml-2 md:px-4 rounded text-sm md:text-base"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap justify-center">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info.id}
            to={"/restaurants/" + restaurant?.info.id}
          >
            <RestaurantCard resData={restaurant?.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;

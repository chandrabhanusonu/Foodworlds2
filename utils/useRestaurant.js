import { useState, useEffect } from "react";
import { FETCH_NEW_URL } from "../src/config";

const useRestaurant = (resid) => {
  const [restaurant, setRestarurant] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(FETCH_NEW_URL + resid);

    const json = await data.json();
    console.log(json.data);
    setRestarurant(json.data?.cards[0]?.card?.card?.info);
  }
  return restaurant;
};

export default useRestaurant;

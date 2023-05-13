import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../config";

const ResturantMenu = () => {
  const { resid } = useParams();

  const [resturant, setResturant] = useState({});

  useEffect(() => {
    getResturantInfo();
  }, []);

  async function getResturantInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.9810451&lng=72.82675789999999&restaurantId=" +
        resid
    );

    const json = await data.json();
    console.log(json.data);
    setResturant(json.data?.cards[0]?.card?.card?.info);
  }

  return (
    <>
      <h1>Resturant Id:{resid}</h1>
      <h2>{resturant.name}</h2>
      <img src={IMG_CDN_URL + resturant?.cloudinaryImageId} />
      <p>City = {resturant?.city}</p>
      <p>Area = {resturant?.areaName}</p>
      <p>Rating = {resturant?.avgRating}</p>
      <p>Coust = {resturant?.costForTwoMessage}</p>
      <p></p>
    </>
  );
};

export default ResturantMenu;

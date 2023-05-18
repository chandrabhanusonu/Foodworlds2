import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import ShimmerUI from "./ShimmerUI";
import useRestaurant from "../../utils/useRestaurant";

const ResturantMenu = () => {
  const { resid } = useParams();

  const restaurant = useRestaurant(resid);

  return !restaurant ? (
    <ShimmerUI />
  ) : (
    <>
      <h1>Resturant Id:{resid}</h1>
      <h2>{restaurant.name}</h2>
      <img src={IMG_CDN_URL + restaurant?.cloudinaryImageId} />
      <p>City = {restaurant?.city}</p>
      <p>Area = {restaurant?.areaName}</p>
      <p>Rating = {restaurant?.avgRating}</p>
      <p>Coust = {restaurant?.costForTwoMessage}</p>
      <p></p>
    </>
  );
};

export default ResturantMenu;

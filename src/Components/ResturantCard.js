import { IMG_CDN_URL } from "../config";

const ResturantCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  lastMileTravelString,
}) => {
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} alt="card" />
      <h2>{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{lastMileTravelString} minuts</h4>
    </div>
  );
};

export default ResturantCard;

import { Outlet } from "react-router-dom";
import ProfileClass from "../Components/ProfileClass";
import Profile from "../Components/Profile";

const About = () => {
  return (
    <>
      <h1>About us Page</h1>
      <p>
        {""}
        This is the React Router-Dom
      </p>
      {/* <Outlet /> */}
      <Profile name={"Sonu Singh"} />
      <ProfileClass name={"S.S.Rajput"} />
    </>
  );
};

export default About;

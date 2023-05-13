import { useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState("0");
  return (
    <div>
      <h1>Profile Component</h1>
      <p>Name : {props.name}</p>
      <p>Count : {count}</p>
      <button onClick={() => setCount("1")}>Counting</button>
    </div>
  );
};

export default Profile;

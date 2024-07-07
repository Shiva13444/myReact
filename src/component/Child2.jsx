import React from "react";
import { useSelector } from "react-redux";
const Child2 = () => {
  const data = useSelector((state) => state.show.formData);
  console.log(data, "data");
  return (
    <div>
      <h1>Username:{data?.username}</h1>
      <h1>city:{data?.city}</h1>
    </div>
  );
};

export default Child2;

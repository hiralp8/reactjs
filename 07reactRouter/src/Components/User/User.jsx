import React from "react";
import { useParams } from "react-router-dom";

function User() {
  const {userid } = useParams();
  return (
    <>
      <h1 className="text text-3xl bg-orange-500 text-black p-4">User Page</h1>
      <h3>User : {userid || "Default"}</h3>
    </>
  );
}

export default User;

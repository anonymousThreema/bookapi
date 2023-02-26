import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const User = () => {
  const [userData, setUserData] = useState(null);
  const url = "https://openlibrary.org/search.json?q=the+lord+of+the+rings";

  useEffect(() => {
    const fetchuser = () => {
      return axios({
        method: "get",
        url,
      })
        .then((res) => setUserData(res.data.docs))
        .catch((err) => console.log(err));
    };
    fetchuser();
  }, [url]);
  return (
    <>
      {userData &&
        userData.length &&
        userData.map(({ key, title }) => <h1 key={key}>{title}</h1>)}
      <Link to={"/"}>Home</Link>
      <br />
      <Link to={"/login"}>Log In</Link>
    </>
  );
};

export default User;

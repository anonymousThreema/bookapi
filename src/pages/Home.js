import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <Link to={"/user"}>User</Link>
      <br />
      <Link to={"/login"}>Log In</Link>
    </>
  );
};

export default Home;

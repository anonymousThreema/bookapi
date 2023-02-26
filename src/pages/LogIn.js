import axios from "axios";
import { Button, Input } from "@chakra-ui/react";
import { React, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export const LogIn = () => {
  const nav = useNavigate();
  const nameRef = useRef();
  const [query, setQuery] = useState("");
  const surnameRef = useRef();
  const submit = (e) => {
    e.preventDefault();
    let data = {
      name: nameRef.current.value,
      surname: surnameRef.current.value,
    };

    {
      nameRef.current.value !== "" && surnameRef.current.value !== ""
        ? nav("/")
        : nav("/login");
    }
    if (nameRef.current.value !== "" && surnameRef.current.value !== "") {
      axios({
        method: "post",
        url: "http://localhost:8080/korisnici",
        data: data,
      })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }
  };

  const [userData, setUserData] = useState(null);
  const url = `https://openlibrary.org/search.json?q=${query}`;

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
      <div>
        <label htmlFor="name">Name</label>
        <br />
        <input
          ref={nameRef}
          id="name"
          type={"text"}
          onChange={({ target: { value } }) => setQuery(value)}
        />
      </div>
      <div>
        <label htmlFor="surname">Surname</label>
        <br />
        <Input ref={surnameRef} id="surname" type={"text"} />
      </div>
      <Button onClick={submit} type="submit">
        Submit
      </Button>
      {userData &&
        // userData
        //   .slice(0, 10)
        //   .map(({ title, key }) => <h1 key={key}>{title}</h1>)}
        JSON.stringify(userData)}
    </>
  );
};

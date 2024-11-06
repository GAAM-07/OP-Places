import { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  const changeInputHandle = (e) => {
    setUserData(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

}
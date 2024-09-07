import React from "react";
import { useSelector } from "react-redux";
import './style.css'

const Welcome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <div>
      <h1 className="title">Dashboard</h1>
      <h2 className="subtitle">
        Welcome Back <strong>{user && user.name}</strong>
      </h2>

      <div className="card_shado">


      </div>

      
    </div>
  );
};

export default Welcome;
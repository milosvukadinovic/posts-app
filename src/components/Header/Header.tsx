/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import "./Header.sass";
import { Button } from "../Button/Button";
import { useNavigate } from "react-router-dom";

export const Header: React.FC<{propsMessage: string}> = ({propsMessage}) => {

  const navigate = useNavigate();
  
  const handleRedirect = () => {
    navigate('/')
  }
  console.log(`${propsMessage} Header`)

  return (
    <header className="Header">
      <img onClick={handleRedirect} src={require("./logo.png")} className="Logo" alt="logo" />
        <nav className="Nav">
          <a href="/">Home</a>
          <Button propsMessage={propsMessage} onClick={() => handleRedirect()} text={'Refresh'}/>
        </nav>
    </header>
  );
}
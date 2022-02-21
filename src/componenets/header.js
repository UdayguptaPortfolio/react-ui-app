import React from "react";
import "../styles/header.css";

export const Header = () => {
  return (
    <div>
      <header>
        <div className="topnav">
          <a href="#home">Home</a>
          <a class="active" href="#portfolio">
            Portfolio
          </a>
          <a href="#blog">Blog</a>
          <a href="#pages">Pages</a>
          <a href="#features">Features</a>
          <a href="#mega-menu">Mega-Menu</a>
          <a href="#contact">Contact</a>
          <i class="fa fa-search" 
          style={{
            color:'rgb(15, 170, 241)',
            marginTop:'15px'
          }}></i>
        </div>
      </header>
      <hr/>
    </div>
  );
};

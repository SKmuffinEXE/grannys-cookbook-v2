import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function NavBar() {
  return (
    <div className="sidebar">
      <NavContainer>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/favorites">Favorites</NavLink>
      <NavLink to="/form">New Recipe</NavLink>
      </NavContainer>
    </div>
  );
}

const NavContainer = styled.div`
  display: flex;
  margin: 0px 50px;
  padding: 0px 50px;
  justify-content: center;
  flex-wrap: wrap;

  & a{

  display: inline-block;
  border-radius: 30px;
  padding: 0.5rem 0;
  margin: 0.5rem 1rem;
  width: 11rem;
  background: transparent;
  color: white;
  background-color: #293241;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  text-align: center;
  text-decoration: none;
  }

  & a:hover{
    transform: translateY(-3px);
  box-shadow: 4px 6px 15px -3px rgba(0,0,0,0.65);
  text-decoration: none;
  }

  & a:active{
    transform: translateY(-1px);
  box-shadow: 4px 6px 8px -1px rgba(0,0,0,0.65);
  }
`;
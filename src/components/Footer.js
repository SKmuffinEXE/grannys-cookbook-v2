import React from "react";
import styled from "styled-components";

export default function Footer() {
  return (
    <div>
      <FooterContainer>
        <h3>Phone: 213-451-9045</h3>
        <h3>Made by D&K Studios NYC</h3>
        <h3>Email: grannyscookbook@aol.com</h3>
      </FooterContainer>
    </div>
  );
}

const FooterContainer = styled.div`
  display: flex;
  margin: 0px 50px;
  padding: 0px 50px;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  width: 100%;
  height: 80px;
  background-color: #3d5a80;
  max-width: 100%;

  /* & h3 {
    display: flex;
    justify-content: space-around;
    align-items: center;
  } */
`;

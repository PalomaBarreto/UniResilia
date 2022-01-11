import React from "react";
import styled from "styled-components";

function Button(props) {
  return (
    <Btn onClick={props.handler} type={props.type}>
      {props.children}
    </Btn>
  );
}

const Btn = styled.button`
  background-color: var(--orange);
  color: var(--navy);
  font-size: 20px;
  font-weight: bolder;
  font-family: "Raleway", sans-serif;
  text-align: center;
  height: 40px;
  width: 200px;
  padding: 10px;
  border-radius: 18px;
  border: none;
  box-shadow: 3px 3px 3px var(--orange);
  margin: 20px;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: var(--yellow);
  }
`;

export default Button;
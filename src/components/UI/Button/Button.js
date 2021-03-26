import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${(props) => props.colorScheme.backgroundColor};
  color: ${(props) => props.colorScheme.color};
  border: 1px solid #eee;
  padding: 15px;
  min-width: 100px;
  text-align: center;
  -webkit-transition-duration: 0.4s;
  transition-duration: 0.4s;
  text-decoration: none;
  overflow: hidden;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.colorScheme.hoverBackgroundColor};
    box-shadow: 0px 2px 10px 5px #97b1bf;
    color: ${(props) => props.colorScheme.hoverColor};
  }
`;

const button = (props) => {
  const white = '#fff';
  const black = '#000';
  const yellow = '#f8cd1b';
  const red = '#f81b1b';

  const buttonScheme = (buttonType) => {
    switch (buttonType) {
    case 'negative':
      return {
        backgroundColor: white,
        color: black,
        hoverBackgroundColor: yellow,
        hoverColor: black,
      };
    case 'danger':
      return {
        backgroundColor: red,
        color: white,
        hoverBackgroundColor: white,
        hoverColor: black,
      };
    default:
      return {
        backgroundColor: yellow,
        color: black,
        hoverBackgroundColor: white,
        hoverColor: black,
      };
    }
  };

  const { type: buttonType, ...attributes } = props;
  const colorScheme = buttonScheme(buttonType);

  return (
    <StyledButton {...attributes} colorScheme={colorScheme}>
      {props.children}
    </StyledButton>
  );
};

export default button;

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import instance from "../api/axios";
import TodoCategory from "./TodoCategory";
import NoCheck from "../images/NoCheck.svg";
import CheckPurple from "../images/CheckPurple.svg";

const MyTodo = ({ categoryName }) => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Front>
          <Category>{categoryName}</Category>
          <TodoCategory name="거실" />
          <TodoCategory name="물걸레" />
        </Front>

        <Img src={NoCheck} alt="Rectangle" />
      </Container>
    </>
  );
};

export default MyTodo;

const GlobalStyle = createGlobalStyle`

`;

const Container = styled.div`
  display: flex;
  padding: 16px 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 11px;
  background: #fff;
  flex-direction: row;
  gap: 10px;
  margin-top: 12px;
`;

const Front = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  gap: 10px;
`;

const Category = styled.div`
  color: #000;
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Img = styled.img`
  width: 24px;
  align-self: stretch;
`;

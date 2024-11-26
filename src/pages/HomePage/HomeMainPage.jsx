import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../../style/GlobalStyle";

import Header from "../../components/HomeHeader.jsx";

import KkaebiProfileImg from "../../images/KkaebiProfile.svg";

const HomeMainPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header title="럭키비키 하우스" />
      <Top>
        <SemiHeader>
          <StatisticsBtn onClick={() => navigate("/signupkkaebicomment")}>
            <BtnComment>
              <TodayComment>오늘 럭키비키 하우스의 집안일 현황은?</TodayComment>
              <Check>통계 확인하기</Check>
            </BtnComment>
            <Arrow>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="9"
                height="17"
                viewBox="0 0 9 17"
                fill="none"
              >
                <path d="M1 1L7 8.5L1 16" stroke="#787878" stroke-width="1.7" />
              </svg>
            </Arrow>
          </StatisticsBtn>
        </SemiHeader>
      </Top>
      <Container>
        <Bottom>
          <NextBtn onClick={() => navigate("/signupcodeinput")}>다음</NextBtn>
        </Bottom>
      </Container>
    </>
  );
};

export default HomeMainPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #fafafa;
  height: calc(100vh - 132px); /* Header 패딩과 NextBtn 마진 포함 */
  overflow: hidden; /* 스크롤 숨기기 */
  padding-bottom: 74px;
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
`;

const SemiHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px 20px 20px;
  border-radius: 0px 0px 21px 21px;
  background: #aa91e8;
`;

const StatisticsBtn = styled.button`
  display: flex;
  padding: 20px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 11px;
  background: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  border: none;
`;

const BtnComment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const TodayComment = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 12px;
`;

const Check = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const Arrow = styled.div`
  display: flex;
`;

const Bottom = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
`;

const NextBtn = styled.button`
  width: 100%;
  padding: 16px 20px;
  border: none;
  border-radius: 8px;
  background: ${(props) =>
    props.$isActive ? "var(--key_purple, #AA91E8)" : "#bebebe"};
  justify-content: center;
  align-items: center;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#967bd9" : "#bebebe")};
  }
`;

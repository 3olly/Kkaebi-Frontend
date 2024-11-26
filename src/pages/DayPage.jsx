import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../style/GlobalStyle";
import BackHeader from "../components/BackHeader";

const DayPage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("myTasks"); // 'myTasks' 또는 'familyTasks'

  return (
    <>
      <GlobalStyle />
      <BackHeader title="12월 13일" pageurl={"/month"} />
      <Container>
        <TabContainer>
          <Tab
            isActive={activeTab === "myTasks"}
            onClick={() => setActiveTab("myTasks")}
          >
            나의 할 일{activeTab === "myTasks" && <Underline />}
          </Tab>
          <Tab
            isActive={activeTab === "familyTasks"}
            onClick={() => setActiveTab("familyTasks")}
          >
            식구들의 할 일{activeTab === "familyTasks" && <Underline />}
          </Tab>
        </TabContainer>
      </Container>
    </>
  );
};

export default DayPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  height: calc(100vh); /* Header 패딩과 NextBtn 마진 포함 */
  overflow: hidden; /* 스크롤 숨기기 */
  padding-bottom: 74px;
`;

const TabContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 10px;
`;

const Tab = styled.div`
  position: relative;
  color: ${(props) => (props.isActive ? "#000" : "#787878")};
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: ${(props) => (props.isActive ? "600" : "400")};
  line-height: normal;
  letter-spacing: -0.5px;
  cursor: pointer;
  text-align: center;
`;

const Underline = styled.div`
  position: absolute;
  bottom: -5px; /* 텍스트 아래 위치 */
  left: 0;
  width: 100%; /* 부모 요소(Tab)의 너비와 동일 */
  height: 0px;
  border-bottom: 1.7px solid #000;
`;

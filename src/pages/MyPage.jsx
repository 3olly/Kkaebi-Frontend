import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instance from "axios";

import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";

import Character from "../images/character/핑크수집가.svg";
import Exit from "../images/Exit.svg";
import Premium from "../images/Premium.svg";
import Ranking from "../images/Ranking.svg";
import People from "../images/People.svg";
import RightArrow from "../images/RightArrow.svg";

const MyPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  return (
    <>
      <GlobalStyle />
      <Header title="마이페이지" />
      <Container>
        <Top>
          <ProfileContainer>
            <ProfileImage>{/* 캐릭터 이미지 */}</ProfileImage>
            <ProfileInfo>
              <LevelName>나는청소가시러</LevelName>
              <LevelBadge>Lv.3. 티끌수집가</LevelBadge>
              <CharacterIcon src={Character} alt="Character" />
            </ProfileInfo>
          </ProfileContainer>

          {/* 레벨 진행도 바 */}
          <LevelContainer>
            <TopContainer>
              <img src={Ranking} alt="Ranking" />
              <Label>이번 주 나의 레벨</Label>
            </TopContainer>

            <ProgressBar>
              <ProgressItem active />
              <ProgressItem active />
              <ProgressItem active />
              <ProgressItem />
              <ProgressItem />
            </ProgressBar>
          </LevelContainer>
        </Top>
        {/* 하단 버튼 영역 */}
        <Bottom>
          <ButtonContainer>
            <ActionButton onClick={() => navigate("/manage")}>
              <BtnContainer>
                <img src={People} alt="Ranking" />
                <Label>우리집 관리하기</Label>
              </BtnContainer>
              <img src={RightArrow} alt="Next Month" />
            </ActionButton>
            <UpgradeButton>
              <img src={Premium} alt="Ranking" />
              <Label>플랜 업그레이드</Label>
            </UpgradeButton>
            <ExitButton>
              <img src={Exit} alt="Ranking" />
              <Label>탈퇴하기</Label>
            </ExitButton>
          </ButtonContainer>
        </Bottom>
      </Container>
    </>
  );
};

export default MyPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #fafafa;
  height: calc(100vh - 132px);
  overflow-y: auto;
  padding-bottom: 74px;
`;

const Top = styled.div`
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: -0.268px;
  align-self: stretch;
  border-radius: 21px;
  background: var(--key_purple, #aa91e8);
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ProfileImage = styled.div``;

const CharacterIcon = styled.img``;

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 12px;
`;

const LevelName = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const LevelBadge = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 100px;
  background: #fff;
  color: #aa91e8;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const LevelContainer = styled.div`
  display: flex;
  align-self: stretch;
  padding: 14px 20px;
  flex-direction: column;
  align-items: flex-start;
  gap: 17px;
  border-radius: 21px;
  background: #fff;
`;

const Label = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const ProgressBar = styled.div`
  display: flex;
  gap: 4px;
`;

const ProgressItem = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? "#AA91E8" : "#E5E5E5")};
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  align-self: stretch;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const ActionButton = styled.button`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch; /* 부모 컨테이너의 너비를 상속 */
  border-radius: 11px;
  background: #fff;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const UpgradeButton = styled.button`
  padding: 20px 22px;
  gap: 8px;
  align-self: stretch;

  border-radius: 11px;
  background: var(--key_purple, #aa91e8);
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  border: none;

  Label {
    color: white;
  }

  &:hover {
    background-color: #967bd9;
  }
`;

const ExitButton = styled.button`
  display: flex;
  padding: 20px 22px;
  align-self: stretch;
  border-radius: 11px;
  background: #fff;
  cursor: pointer;
  align-items: center;
  gap: 8px;
  border: none;

  &:hover {
    background-color: #e5e5e5;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
`;

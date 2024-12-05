import React, { useEffect } from "react";
import styled from "styled-components";
import useLevelStore from "../stores/LevelStore"; // zustand store
import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";
import Character from "../images/character/핑크수집가.svg"; // 기본 캐릭터
import userCharacter1Img from "../images/character/프사피부미인.svg";
import userCharacter2Img from "../images/character/프사머리숱부자.svg";
import userCharacter3Img from "../images/character/프사핑크수집가.svg";
import userCharacter4Img from "../images/character/프사고민해결사.svg";
import userCharacter5Img from "../images/character/프사매듭의달인.svg";

const characterImages = {
  1: userCharacter1Img,
  2: userCharacter2Img,
  3: userCharacter3Img,
  4: userCharacter4Img,
  5: userCharacter5Img,
};

const MyPage = () => {
  const {
    completionRate,
    setCompletionRate,
    activeLevel,
    setActiveLevel,
    characterImg,
    setCharacterImg,
  } = useLevelStore();

  useEffect(() => {
    // Mock data fetch
    fetch("/homeMockdata.json")
      .then((res) => res.json())
      .then((data) => {
        // tasks.today_completion_rate로 completionRate 값 설정
        const { today_completion_rate } = data.tasks;
        setCompletionRate(today_completion_rate);

        // completionRate에 따라 activeLevel과 characterImg 설정
        const level = getLevel(today_completion_rate);
        setActiveLevel(level);
        setCharacterImg(characterImages[level]);
      });
  }, [setCompletionRate, setActiveLevel, setCharacterImg]);

  // completionRate에 따라 활성화된 레벨 계산
  const getLevel = (rate) => {
    if (rate === 100) return 7;
    if (rate >= 99) return 6;
    if (rate >= 80) return 5;
    if (rate >= 60) return 4;
    if (rate >= 40) return 3;
    if (rate >= 20) return 2;
    return 1; // Lv1은 0%
  };

  return (
    <>
      <GlobalStyle />
      <Header title="마이페이지" />
      <Container>
        <Top>
          <ProfileContainer>
            <ProfileInfo>
              <LevelName>나는청소가시러</LevelName>
              <LevelBadge>Lv.3. 티끌수집가</LevelBadge>
              <CharacterIcon src={Character} alt="Character" />
            </ProfileInfo>
          </ProfileContainer>

          {/* 레벨 진행도 바 */}
          <LevelContainer>
            <TopContainer>
              <Label>이번 주 나의 레벨</Label>
            </TopContainer>

            <ProgressBar>
              {[1, 2, 3, 4, 5, 6, 7].map((level) => (
                <ProgressItem key={level} active={level <= activeLevel}>
                  {level === activeLevel && (
                    <ProfileImage
                      src={characterImg}
                      alt="User Character"
                      active={true}
                    />
                  )}
                </ProgressItem>
              ))}
            </ProgressBar>
          </LevelContainer>
        </Top>

        {/* 하단 버튼 영역 */}
        <Bottom>
          <ButtonContainer>
            <ActionButton>
              <Label>우리집 관리하기</Label>
            </ActionButton>
            <UpgradeButton>
              <Label>플랜 업그레이드</Label>
            </UpgradeButton>
            <ExitButton>
              <Label>탈퇴하기</Label>
            </ExitButton>
          </ButtonContainer>
        </Bottom>
      </Container>
    </>
  );
};

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

const ProfileImage = styled.img`
  position: absolute;
  top: 10px; /* ProgressItem 위에 표시 */
  left: 50%;
  transform: translateX(-50%);
  visibility: ${(props) => (props.active ? "visible" : "hidden")};
  width: 27px;
  height: 27px;
`;

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
  font-weight: 600;
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
`;

const LevelContainer = styled.div`
  display: flex;
  align-self: stretch;
  padding: 14px 20px;
  flex-direction: column;
  align-items: center;
  gap: 17px;
  border-radius: 21px;
  background: #fff;
`;

const Label = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 16px;
  font-weight: 600;
`;

const ProgressBar = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 3px;
`;

const ProgressItem = styled.div`
  height: 45px;
  width: 100%;
  box-shadow: 0px 2px 1px 0px rgba(0, 0, 0, 0.25);
  background-color: ${(props) => (props.active ? "#AA91E8" : "#f5f5f6")};
  position: relative;
`;

const Bottom = styled.div`
  margin-top: 16px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-self: stretch;
`;

const ActionButton = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 11px;
  background: #fff;
  cursor: pointer;

  &:hover {
    background-color: #eaeaea;
  }
`;

const UpgradeButton = styled.div`
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

const ExitButton = styled.div`
  display: flex;
  padding: 20px 22px;
  align-self: stretch;
  align-items: center;
  border-radius: 11px;
  background: #fff;
  cursor: pointer;
  gap: 8px;

  &:hover {
    background-color: #eaeaea;
  }
`;

export default MyPage;

import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../../style/GlobalStyle";
import SignupBackBtn from "../../images/SignupBackBtn.svg";
import KkaebiProfileImg from "../../images/KkaebiProfile.svg";
import RedCImg from "../../images/character/피부미인.png";
import YellowCImg from "../../images/character/머리숱부자.png";
import BlackCImg from "../../images/character/핑크수집가.png";
import GreenCImg from "../../images/character/고민해결사.png";
import BlueCImg from "../../images/character/매듭의달인.png";
import { useFamilyStore } from "../../stores/FamilyStore";
import BackHeader from "../../components/BackHeader";

const characters = [
  { id: 1, src: RedCImg, label: "피부 미인" },
  { id: 2, src: YellowCImg, label: "머리숱 부자" },
  { id: 3, src: BlackCImg, label: "핑크 수집가" },
  { id: 4, src: GreenCImg, label: "고민 해결사" },
  { id: 5, src: BlueCImg, label: "매듭의 달인" },
];

const AskTodoPage = () => {
  const navigate = useNavigate();
  const [selectedCharacter, setSelectedCharacter] = useState(0);
  const fetchProfiles = useFamilyStore((state) => state.fetchProfiles);
  const { nickname } = useFamilyStore();

  useEffect(() => {
    // FamilyStore 데이터 불러오기
    fetchProfiles();
  }, [fetchProfiles]);

  return (
    <>
      <GlobalStyle />
      <BackHeader title={<br />} pageurl={"/whotodo"} />
      <Container>
        <Top>
          <Kkaebi>
            <KkaebiProfile src={KkaebiProfileImg} alt="깨비 프로필 이미지" />
            <Comment>{`${nickname} 님에게 집안일을 부탁할게요.`}</Comment>
          </Kkaebi>
          <CarouselContainer>
            <Character>
              <CharacterImg
                src={characters[selectedCharacter].src}
                alt={characters[selectedCharacter].label}
              />
            </Character>
          </CarouselContainer>
        </Top>
        <Bottom>
          <NextBtn
            onClick={() => {
              const payload = {
                character: characters[selectedCharacter].id.toString(),
              };
              console.log("백엔드로 전달되는 데이터:", payload);
              navigate("/month", {
                state: payload,
              });
            }}
          >
            확인
          </NextBtn>
        </Bottom>
      </Container>
    </>
  );
};

export default AskTodoPage;

const Header = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  align-self: stretch;
  background-color: #fafafa;
`;

const BackBtn = styled.button`
  width: 9px;
  height: 18px;
  border: none;
  background: url(${SignupBackBtn}) no-repeat center;
  background-size: contain;
  cursor: pointer;
`;

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

const Kkaebi = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #000;
  font-family: Pretendard, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

const KkaebiProfile = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 16px;
`;

const Comment = styled.div`
  color: #000;
  font-family: Pretendard;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 30px */
`;

const CarouselContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 114.5px;

  width: 100%;
  height: 300px;
  user-select: none; /* 텍스트 선택 방지 */
`;

const Character = styled.div`
  text-align: center;
`;

const CharacterImg = styled.img.attrs({
  draggable: false, // 기본적으로 드래그를 막음
})`
  display: flex;
  padding: 0px 4.035px 9.043px 5px;
  flex-direction: column;
  align-items: center;
  gap: 37px;
  align-self: stretch;

  width: 201px;
  height: 310px;
`;

const IndicatorContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 16px; /* 위쪽과 간격 추가 */
  gap: 14px;
`;

const Indicator = styled.div`
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: ${(props) => (props.$isActive ? "#AA91E8" : "#BEBEBE")};
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
  background: var(--key_purple, #aa91e8);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  &:hover {
    background-color: #967bd9;
  }
`;

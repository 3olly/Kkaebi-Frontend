import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../style/GlobalStyle";
import SignupBackBtn from "../images/SignupBackBtn.svg";
import KkaebiProfileImg from "../images/KkaebiProfile.svg";
import CategorySelector from "../components/CategorySelector"; // 새 컴포넌트 경로
import BackHeader from "../components/BackHeader";

const categories = [
  "빨래",
  "설거지",
  "청소",
  "생필품 구매",
  "쓰레기 버리기",
  "분리수거",
  "요리",
  "식물 관리",
  "반려동물 관리",
];

const MakeTodoPage = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const navigate = useNavigate();

  const toggleCategory = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prev) => prev.filter((item) => item !== category));
    } else {
      setSelectedCategories((prev) => [...prev, category]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <BackHeader pageurl={"/month"} />

      <Container>
        <Top>
          <Kkaebi>
            <KkaebiProfile src={KkaebiProfileImg} alt="깨비 프로필 이미지" />
            <Comment>집안일 카테고리를 선택해주세요.</Comment>
          </Kkaebi>
          <CategorySelector
            categories={categories}
            selectedCategories={selectedCategories}
            onToggle={toggleCategory}
          />
        </Top>
        <Bottom>
          <NextBtn
            $isActive={selectedCategories.length > 0}
            onClick={() => {
              if (selectedCategories.length > 0) {
                const houseworkTag = selectedCategories
                  .map((category) => categories.indexOf(category) + 1)
                  .join(", ");

                const payload = { houseworkTag };

                console.log("백엔드로 전달되는 데이터:", payload);
                navigate("/signupkkaebicomment");
              }
            }}
          >
            다음
          </NextBtn>
        </Bottom>
      </Container>
    </>
  );
};

export default MakeTodoPage;

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
  height: calc(100vh - 132px);
  overflow: hidden;
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
  line-height: 150%;
  margin-bottom: 20px;
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
  line-height: 150%;
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
  color: #fff;
  font-family: Pretendard;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: ${(props) => (props.$isActive ? "pointer" : "default")};

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#967bd9" : "#bebebe")};
  }
`;

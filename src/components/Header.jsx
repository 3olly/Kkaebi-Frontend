import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";

import instance from "../api/axios";

import Notice from "../images/Notice.svg";
import Menu from "../images/Menu.svg";
import X from "../images/X.svg";

const Header = ({ title }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const openModal = () => {
    setModalOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setModalOpen(false);
    }, 300);
  };

  const goToPage = (url) => {
    if (location.pathname === url) {
      closeModal();
    } else {
      navigate(url);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <Name>{title}</Name>
        <BtnContainer>
          <NoticeBtn
            src={Notice}
            alt="Notice Btn"
            onClick={() => goToPage("/notice")}
          />
          <Hamburger src={Menu} alt="hamburger menu" onClick={openModal} />
          {isModalOpen && (
            <Modal $isClosing={isClosing}>
              <ModalContainer>
                <ModalHeader>
                  <CloseButton
                    src={X}
                    alt="close button"
                    onClick={closeModal}
                  />
                </ModalHeader>
                <MenuName>메뉴</MenuName>
                <MenuList>
                  <li onClick={() => goToPage("/homemain")}>홈</li>
                  <li onClick={() => goToPage("/month")}>캘린더</li>
                  <li onClick={() => goToPage("/mypage")}>마이페이지</li>
                </MenuList>
              </ModalContainer>
            </Modal>
          )}
        </BtnContainer>
      </Container>
    </>
  );
};

export default Header;

const GlobalStyle = createGlobalStyle`

`;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  img {
    cursor: pointer;
  }
`;

const MenuName = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
  margin-top: 24px;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 13px;
`;

const Hamburger = styled.img`
  cursor: pointer;

  padding: 2px;
`;

const NoticeBtn = styled.img`
  width: 26px;
  height: 27px;
  cursor: pointer;
`;

const Name = styled.div`
  color: #000;
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  letter-spacing: -0.5px;
`;

const Modal = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  max-width: 273px;
  width: 100%;
  height: calc(var(--vh, 1vh) * 100);
  margin: 0 auto;
  background-color: white;
  animation: ${({ isClosing }) => (isClosing ? "slideOut" : "slideIn")} 0.3s
    ease-in-out forwards;
  clip-path: ${({ isClosing }) =>
    isClosing ? "inset(0% 0% 0% 100%)" : "inset(0% 0% 0% 0%)"};
  z-index: 10;

  @keyframes slideIn {
    from {
      clip-path: inset(0% 0% 0% 100%);
    }
    to {
      clip-path: inset(0% 0% 0% 0%);
    }
  }

  @keyframes slideOut {
    from {
      clip-path: inset(0% 0% 0% 0%);
    }
    to {
      clip-path: inset(0% 0% 0% 100%);
    }
  }
`;

const ModalContainer = styled.div`
  padding: 20px 20px;
`;

const CloseButton = styled.img`
  display: flex;
  cursor: pointer;
  padding: 9px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuList = styled.ul`
  margin: 0px;
  margin-top: 24px;
  list-style-type: none;

  li {
    margin-bottom: 21px;
    color: var(--bk01, #000);
    font-family: Pretendard;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
    cursor: pointer;
  }
`;

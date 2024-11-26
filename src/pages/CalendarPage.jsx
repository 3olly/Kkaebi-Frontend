import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import instance from "axios";

import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";

import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";
import useDateStore from "../stores/DateStore"; // DateStore 가져오기

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  // Zustand 상태와 액션 가져오기
  const { year, month, setYear, setMonth, setDay } = useDateStore();

  const handlePrevMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() - 1
    );
    setCurrentDate(newDate);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth() + 1);
  };

  const handleNextMonth = () => {
    const newDate = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 1
    );
    setCurrentDate(newDate);
    setYear(newDate.getFullYear());
    setMonth(newDate.getMonth() + 1);
  };

  const handleDateClick = async (selectedDay) => {
    if (selectedDay) {
      setDay(selectedDay);
      const dateData = { year, month, day: selectedDay };

      // 백엔드로 데이터 전송
      try {
        const response = await instance.get(
          `/calendar/housework/my/${year}/${month}/`
        );
        console.log("Data sent successfully:", response.data);
      } catch (error) {
        console.error("Error sending data:", error);
      }

      navigate(`/day?date=${year}-${month}-${selectedDay}`);
    }
  };

  const renderDays = () => {
    const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
    return (
      <DaysContainer>
        {daysOfWeek.map((day, index) => (
          <Day key={index}>{day}</Day>
        ))}
      </DaysContainer>
    );
  };

  const renderDates = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    const dates = [];

    // 이전 월의 마지막 날짜 계산
    const prevMonthLastDate = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      dates.push({ date: prevMonthLastDate - i, type: "prev" }); // 이전 달
    }

    // 현재 월의 날짜 추가
    for (let i = 1; i <= lastDate; i++) {
      dates.push({ date: i, type: "current" }); // 현재 달
    }

    // 다음 달의 날짜 추가
    const remainingDays = (7 - (dates.length % 7)) % 7;
    for (let i = 1; i <= remainingDays; i++) {
      dates.push({ date: i, type: "next" }); // 다음 달
    }

    // 날짜 배열을 주 단위로 나눔
    const rows = [];
    for (let i = 0; i < dates.length; i += 7) {
      rows.push(dates.slice(i, i + 7));
    }

    return (
      <DatesContainer>
        {rows.map((week, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Week isLastWeek={rowIndex === rows.length - 1}>
              {week.map((dateObj, colIndex) => (
                <DateBox
                  key={colIndex}
                  type={dateObj.type}
                  onClick={() =>
                    dateObj.type === "current" &&
                    navigate(`/day?date=${year}-${month + 1}-${dateObj.date}`)
                  }
                >
                  {dateObj.date}
                </DateBox>
              ))}
            </Week>
            {rowIndex < rows.length - 1 && <Line />}
          </React.Fragment>
        ))}
      </DatesContainer>
    );
  };

  return (
    <>
      <GlobalStyle />
      <Header title="캘린더" />
      <Container>
        <HeaderContainer>
          <ArrowButton onClick={handlePrevMonth}>
            <img src={LeftArrow} alt="Previous Month" />
          </ArrowButton>
          <MonthLabel>
            {currentDate.getFullYear()}년 {currentDate.getMonth() + 1}월
          </MonthLabel>
          <ArrowButton onClick={handleNextMonth}>
            <img src={RightArrow} alt="Next Month" />
          </ArrowButton>
        </HeaderContainer>
        {renderDays()}
        {renderDates()}
      </Container>
    </>
  );
};

export default CalendarPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  background-color: #fafafa;
  height: calc(100vh - 132px);
  overflow-y: auto;
  padding-bottom: 74px;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
`;

const MonthLabel = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
`;

const DaysContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Day = styled.div`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #555;
`;

const DatesContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const Week = styled.div`
  display: flex;
  justify-content: ${({ isLastWeek }) =>
    isLastWeek ? "flex-start" : "space-between"};
`;

const DateBox = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: ${({ type }) =>
    type === "prev" || type === "next"
      ? "#ccc"
      : "inherit"}; // 이전/다음 달 날짜는 회색
  &:hover {
    background: ${({ type }) =>
      type === "current" ? "var(--key_purple, #aa91e8)" : "none"};
    border-radius: ${({ type }) => (type === "current" ? "100%" : "none")};
    color: ${({ type }) => (type === "current" ? "white" : "inherit")};
  }
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
  margin: 10px 0;
`;

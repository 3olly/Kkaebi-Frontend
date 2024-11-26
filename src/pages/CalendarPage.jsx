import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import GlobalStyle from "../style/GlobalStyle";
import Header from "../components/Header";

import LeftArrow from "../images/LeftArrow.svg";
import RightArrow from "../images/RightArrow.svg";

const CalendarPage = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate();

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1)
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1)
    );
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
    for (let i = 0; i < firstDay; i++) {
      dates.push(null); // 빈 칸
    }
    for (let i = 1; i <= lastDate; i++) {
      dates.push(i);
    }

    const rows = [];
    for (let i = 0; i < dates.length; i += 7) {
      rows.push(dates.slice(i, i + 7));
    }

    return (
      <DatesContainer>
        {rows.map((week, rowIndex) => (
          <React.Fragment key={rowIndex}>
            <Week>
              {week.map((date, colIndex) => (
                <DateBox
                  key={colIndex}
                  onClick={() =>
                    date && navigate(`/day?date=${year}-${month + 1}-${date}`)
                  }
                >
                  {date}
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
  justify-content: space-between;
`;

const DateBox = styled.div`
  flex: 1;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background: var(--key_purple, #aa91e8);
    border-radius: 100%;
    color: white;
    display: flex;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background: #e1e1e1;
  margin: 10px 0;
`;

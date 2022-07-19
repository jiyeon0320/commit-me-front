import React, { useState } from 'react';
import styled from 'styled-components';
import dayjs from 'dayjs';
import ButtonCircle from './ButtonCircle';
import weekday from 'dayjs/plugin/weekday';
import isoWeek from 'dayjs/plugin/isoWeek';
import weekOfYear from 'dayjs/plugin/weekOfYear';
import updateLocale from 'dayjs/plugin/updateLocale';
/**
 *
 * @returns {한 주씩 보여주는 주간 달력}
 */
const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
const Weekly = () => {
  const [dayObj, setDayObj] = useState(dayjs());
  const year = dayObj.get('year');
  const month = dayObj.get('month') + 1;
  const days = dayObj.get('day');

  dayjs.extend(weekday);
  dayjs.extend(isoWeek);
  dayjs.extend(weekOfYear);

  console.log(dayjs());
  console.log(dayjs().weekday(-7).format('YY-MM-DD'));
  console.log(days);
  // const dayjs=
  return (
    <CalendarWrap>
      <h2>
        {year}년 {month}월
      </h2>
      <ButtonCircle
        style={{
          zIndex: '1',
          marginRight: '-2rem',
          paddingRight: '0.30rem',
          paddingTop: '0.2rem',
        }}
      >
        〈
      </ButtonCircle>
      <div>
        <StyledSection>
          <div className='day_of_the_week_box'>
            {weekDays?.map((v, i) => (
              <h3 key={i}>{v}</h3>
            ))}
          </div>
          <div className='date_box'>
            <p>11</p>
            <p>12</p>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
          </div>
        </StyledSection>
      </div>
      <ButtonCircle
        style={{
          marginLeft: '-2rem',
          paddingLeft: '0.35rem',
          paddingTop: '0.2rem',
        }}
      >
        〉
      </ButtonCircle>
    </CalendarWrap>
  );
};

export default Weekly;
const CalendarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
  /* background-color: aliceblue; */
`;
const StyledSection = styled.section`
  border: ${props => `1px solid ${props.theme.colors.blue_1}`};
  border-radius: 0.6rem;
  padding: 4.5rem 15rem;
  width: 55rem;
  .day_of_the_week_box,
  .date_box {
    display: flex;
    justify-content: space-between;
  }
  .day_of_the_week_box {
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.gray_2};
  }
  .date_box {
  }
`;

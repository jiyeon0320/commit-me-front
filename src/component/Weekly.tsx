import React from 'react';
import styled from 'styled-components';
import * as dayjs from 'dayjs';
import ButtonCircle from './ButtonCircle';

/**
 *
 * @returns {한 주씩 보여주는 주간 달력}
 */
const Weekly = () => {
  // const dayjs=
  return (
    <CalendarWrap>
      주간달력
      <ButtonCircle>〈</ButtonCircle>
      <div>
        <StyledCalendarTable>
          <thead>
            <tr>
              <th>일</th>
              <th>월</th>
              <th>화</th>
              <th>수</th>
              <th>목</th>
              <th>금</th>
              <th>토</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11</td>
              <td>12</td>
              <td>13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
              <td>17</td>
            </tr>
          </tbody>
        </StyledCalendarTable>
      </div>
      <ButtonCircle>〉</ButtonCircle>
    </CalendarWrap>
  );
};

export default Weekly;
const CalendarWrap = styled.div`
  display: flex;
  font-size: 2rem;
`;
const StyledCalendarTable = styled.table`
  border: 1px solid red;
`;

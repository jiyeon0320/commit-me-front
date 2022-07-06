import React from 'react';
import styled from 'styled-components';
import ButtonRectang from '../ButtonRectang';
import RankingBox from './RankingBox';

const RankingView = () => {
  return (
    <Container>
      <div className='button_wrap'>
        <ButtonRectang color='#fff'>출석</ButtonRectang>
        <ButtonRectang>커밋</ButtonRectang>
        <ButtonRectang>풀퀘스트</ButtonRectang>
        <ButtonRectang>댓글</ButtonRectang>
      </div>
      <div>
        <RankingBox />
        <RankingBox />
        <RankingBox />
        <RankingBox />
      </div>
    </Container>
  );
};

export default RankingView;

const Container = styled.div`
  background-color: ${props => props.theme.colors.gray_1};
  .button_wrap {
    text-align: right;
  }
`;

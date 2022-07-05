import React from 'react';
import styled from 'styled-components';
import ButtonRectang from '../ButtonRectang';

const RankingView = () => {
  return (
    <Container>
      <div>
        <ButtonRectang color='#fff'>출석</ButtonRectang>
        <ButtonRectang>커밋</ButtonRectang>
        <ButtonRectang>풀퀘스트</ButtonRectang>
        <ButtonRectang>댓글</ButtonRectang>
      </div>
    </Container>
  );
};

export default RankingView;

const Container = styled.div`
  background-color: aliceblue;
`;

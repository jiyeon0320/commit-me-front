import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/style/GlobalStyle';
import { theme } from './utils/style/theme';
import Weekly from './component/Weekly';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <header>commit, ME!</header>
      <article>
        <h2>출석 체크</h2>
        <Weekly />
      </article>
      <article>
        <h2>랭킹</h2>
      </article>
      <article>
        <h2>댓글</h2>
      </article>
      <footer>
        <div>
          <p>
            <span>©</span>2022 All rights reserved.
          </p>
          <div>
            <p>provided by.</p>
            <p>SSJ</p>
          </div>
          <div>
            <p>created by.</p>
            <p>LJE SJY</p>
          </div>
        </div>
        <div>
          <p>본인이 얼만큼 공부했는지 확인하는 사이트로,</p>
          <p>자정마다 깃허브 데이터를 업데이트 합니다.</p>
        </div>
        <div>
          <button>깃허브</button>
          <button>위로 가기</button>
        </div>
      </footer>
    </ThemeProvider>
  );
};

export default App;

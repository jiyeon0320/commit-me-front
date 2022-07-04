import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './utils/style/GlobalStyle';
import { theme } from './utils/style/theme';
import Weekly from './component/Weekly';
import Footer from '@/component/footer';

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
      <Footer />
    </ThemeProvider>
  );
};

export default App;

import { DefaultTheme } from 'styled-components';

const calcRem = (size: number) => `${size / 16}rem`;

const fontSizes = {
  small: calcRem(12),
  base: calcRem(14),
  medium: calcRem(14.5),
  large: calcRem(16),
};

// const paddings = {
//   small: calcRem(8),
//   base: calcRem(10),
//   large: calcRem(12),
// };
// const deviceSizes = {
//   mobileS: '320px',
//   mobileM: '375px',
//   mobileL: '450px',
//   tablet: '768px',
//   tabletL: '1024px',
// };

// const device = {
//   mobileS: `only screen and (max-width: ${deviceSizes.mobileS})`,
//   mobileM: `only screen and (max-width: ${deviceSizes.mobileM})`,
//   mobileL: `only screen and (max-width: ${deviceSizes.mobileL})`,
//   tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
//   tabletL: `only screen and (max-width: ${deviceSizes.tabletL})`,
// };
const colors = {
  black: '#1B1B1B',
  darkNavy: '#555c66',
  blueText: '#1C5085',
  blueMain: '#46cdff',
  blue_1: '#F0F5F9',
  blue_2: '#84b8e0',
  blue_3: '#D9E9F6',
  blue_4: '#c1d3e8',
  blue_5: '#3397E8',
  gray_1: '#f7f7f7',
  gray_2: '#686868',
  gray_3: '#c4c4c4',
  gray_4: '#e8e8e8',
  gray_5: '#aaaaaa',
  redText: '#ff1900',
  server_orange: '#FF8A65',
};

export const theme: DefaultTheme = { fontSizes, colors };

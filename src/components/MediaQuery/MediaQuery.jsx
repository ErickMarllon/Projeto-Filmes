import { css } from 'styled-components';

const screenSizes = {
  extraLarge: 5000,
  large: 1170,
  desktop: 992,
  tablet: 834,
  mobile: 450,
  mobileP: 320,
};

export const Media = Object.keys(screenSizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${screenSizes[label] / 16}rem) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

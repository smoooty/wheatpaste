import { css } from 'styled-components';

const features = {
  breakpointLarge: `screen and (min-width: ${800 / 16}rem)`,
  breakpointMaxWidth: `screen and (min-width: ${1200 / 16}rem)`,
};

export const query = Object.keys(features).reduce((acc, entry) => {
  acc[entry] = (...args) => css`
    @media ${features[entry]} {
      ${css(...args)}
    }
  `;

  return acc;
}, {});

export default query;

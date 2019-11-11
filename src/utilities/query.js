import { css } from 'styled-components';

const features = {
  breakpointMaxSmall: `screen and (max-width: ${500 / 16}em)`,
  breakpointMaxMedium: `screen and (max-width: ${790 / 16}em)`,
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

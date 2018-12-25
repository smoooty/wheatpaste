import styled, { injectGlobal } from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${'' /* grid-column: 2 / 11;
  grid-row: 3 / 11;
  @media (max-width: 416px) {
    grid-column: 1 / 11;
    grid-row: 3 / 10;
  } */}
  grid-area: blb;
  canvas {
    width: 100%;
  }
`;

export { Div };

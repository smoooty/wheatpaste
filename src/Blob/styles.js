import styled from 'styled-components';

const Div = styled.div`
  width: 100%;
  height: 100%;
  pointer-events: none;
  ${({ css }) => css};
  canvas {
    width: 100%;
  }
`;

export { Div };

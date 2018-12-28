import styled, { css } from 'styled-components';
import slopeCalc from '../utilities/slopecalc';

const Div = styled.div`
  ${({ cssProps }) => cssProps};
`;

const centerFlex = css`
  display: flex;
  align-items: center;
`;

const H1Size = () =>
  slopeCalc({
    'font-size': { 375: 40, 1080: 110 },
  });

const H1 = styled.h1`
  margin: 0;
  white-space: nowrap;
  ${centerFlex};
  ${H1Size};
  ${({ css }) => css};
`;

const H2Size = () =>
  slopeCalc({
    'font-size': { 375: 20, 1080: 50 },
  });

const H2 = styled.h2`
  margin: 0;
  ${H2Size};
  ${({ css }) => css};
`;

const H3Size = () =>
  slopeCalc({
    'font-size': { 375: 118, 1080: 138 },
  });

const H3 = styled.h3`
  margin: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  ${H3Size};
  ${({ css }) => css};
`;

const H4Size = () =>
  slopeCalc({
    'font-size': { 375: 40, 1080: 50 },
  });

const H4 = styled.h4`
  margin: 0;
  white-space: nowrap;
  ${centerFlex};
  ${H4Size};
  ${({ css }) => css};
`;

const ASize = () =>
  slopeCalc({
    'font-size': { 375: 50, 1080: 70 },
  });

const A = styled.a`
  margin: 0;
  text-decoration: none;
  color: black;
  ${ASize};
  ${({ css }) => css};
`;

export { Div, A, H1, H2, H3, H4 };

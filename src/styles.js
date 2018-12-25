import styled, { css, createGlobalStyle } from 'styled-components';
import slopeCalc from './utilities/slopecalc';

const Div = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    '. dev dev dev dev dev dev dev dev dev dev .'
    '. nme nme nme nme nme nme nme nme nme nme .'
    '. nme nme nme nme nme nme nme nme nme nme .'
    '. idk idk idk wtf wtf wtf wtf wtf wtf wtf .'
    '. blb blb blb blb cty cty cty cty cty cty .'
    '. blb blb blb blb git git git amp amp amp .'
    '. blb blb blb blb lnk lnk lnk amp amp amp .'
    '. blb blb blb blb . . . . . . .'
    '. mal mal mal mal mal mal mal mal mal mal .'
    '. eml eml eml eml eml eml eml eml eml eml .';
  /* grid-template-rows: repeat(auto-fit, minmax(200px, 1fr)); */
  grid-template-rows: repeat(10, 75px);
  grid-template-columns: repeat(12, minmax(75px, 1fr));

  @media (max-width: 700px) {
    grid-template-areas:
      'dev dev dev dev dev dev'
      'nme nme nme nme nme nme'
      'nme nme nme nme nme nme'
      'idk idk idk wtf wtf wtf'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'git git git amp amp amp'
      'lnk lnk lnk amp amp amp'
      'cty cty cty cty cty cty'
      'mal mal mal mal mal mal'
      'eml eml eml eml eml eml';
  }
`;

export { Div };

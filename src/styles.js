import styled from 'styled-components';
import getRems from './utilities/getRems';
import query from './utilities/query';

const Div = styled.div`
  display: grid;
  height: 100%;
  grid-template-areas:
    '. dev dev dev dev dev dev dev dev dev dev .'
    '. nme nme nme nme nme nme nme nme nme nme .'
    '. nme nme nme nme nme nme nme nme nme nme .'
    '. idk idk idk wtf wtf wtf wtf wtf wtf wtf .'
    '. blb blb blb blb cty cty cty cty cty cty .'
    '. blb blb blb blb git git git amp amp   . .'
    '. blb blb blb blb lnk lnk lnk amp amp   . .'
    '. blb blb blb blb   .   .   .   .   .   . .'
    '. mal mal mal mal mal mal mal mal mal mal .'
    '. eml eml eml eml eml eml eml eml eml eml .';
  grid-template-rows: repeat(10, ${getRems(75)});
  grid-template-columns: 1fr repeat(10, ${getRems(90)}) 1fr;

  ${query.breakpointMaxMedium`
    margin: ${getRems(5)};
    grid-template:
      'dev dev dev dev dev dev'
      'nme nme nme nme nme nme'
      'nme nme nme nme nme nme'
      'idk idk idk wtf wtf wtf'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'blb blb blb blb blb blb'
      'git git git amp amp   .'
      'lnk lnk lnk amp amp   .'
      'cty cty cty cty cty cty'
      'mal mal mal mal mal mal'
      'eml eml eml eml eml eml';
  `};

  ${query.breakpointMaxSmall`
    grid-template:
      'dev dev dev dev dev dev' minmax(min-content, max-content)
      'nme nme nme nme nme nme' minmax(min-content, max-content)
      'nme nme nme nme nme nme' minmax(min-content, max-content)
      'idk idk idk wtf wtf wtf' minmax(min-content, max-content)
      'blb blb blb blb blb blb' ${getRems(75)}
      'blb blb blb blb blb blb' ${getRems(75)}
      'blb blb blb blb blb blb' ${getRems(75)}
      'blb blb blb blb blb blb' ${getRems(75)}
      'git git git amp amp   .' minmax(min-content, max-content)
      'lnk lnk lnk amp amp   .' minmax(min-content, max-content)
      'cty cty cty cty cty cty' minmax(min-content, max-content)
      'mal mal mal mal mal mal' minmax(min-content, max-content)
      'eml eml eml eml eml eml' minmax(min-content, max-content);
    `};
`;

export { Div };

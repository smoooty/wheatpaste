import { H1, H2, H3, H4, A } from './Components';
import Blob from './Blob';

const content = [
  {
    text: 'Front-End Developer',
    type: H2,
    props: {
      css: "grid-area: dev; font-family: 'Sporting';",
    },
  },
  {
    text: 'Spencer Pope',
    type: H1,
    props: {
      css: "grid-area: nme; font-family: 'Monarch';",
    },
  },
  {
    text: 'Charlotte, NC',
    type: H4,
    props: {
      css: "grid-area: cty; font-family: 'Sporting';",
    },
  },
  {
    text: 'github',
    type: A,
    props: {
      href: 'https://github.com/smoooty',
      css: "grid-area: git; font-family: 'Monarch';",
    },
  },
  {
    text: 'linkedIn',
    type: A,
    props: {
      href: 'https://www.linkedin.com/in/spenceropope/',
      css: "grid-area: lnk; font-family: 'Monarch';",
    },
  },
  {
    text: '&',
    type: H3,
    props: {
      css: "grid-area: amp; font-family: 'Monarch';",
    },
  },
  {
    text: 'spenceropope@gmail.com',
    type: H2,
    props: {
      css: "grid-area: mal; font-family: 'Sporting';",
    },
  },
  {
    text: 'spenceropope@gmail.com',
    type: H2,
    props: {
      css: "grid-area: eml; font-family: 'Sporting';",
    },
  },
  {
    type: Blob,
    props: {
      css: 'grid-area: blb;',
    },
  },
];

export default content;

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  font-size: 14px;
 }
 
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
li,
figure,
figcaption,
blockquote,
dl,
dd {
  margin: 0;
}

p,
h1,
h2,
h3,
h4,
h5,
h6,
li,
figcaption {
  max-width: 80ch;
}

body {
  color: #fff;
  background-color: #000;
  font-family: 'Alegreya Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.5;
  width: 100vw;
}

h1 {
  font-size: 2rem;
}

p {
  line-height: 1.5;
  font-size: 1.5rem;
}

a {
  color: currentColor;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}


button {
  cursor: pointer;
  border: none;
  background: none;
  color: #fff;
}

::selection {
  background: #fff;
  color: #000;
  text-shadow: none;
}

@media only screen and (max-width: 1000px) {
   h1 {
    font-size: 2rem;
  }
}
`;

export default GlobalStyles;

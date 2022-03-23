import { createGlobalStyle } from 'styled-components';

const customMediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;

export const media = {
  tablet: customMediaQuery(800),
  phone: customMediaQuery(525),
};

export const GlobalStyles = createGlobalStyle`

:root {

    /* Primary */
  --color-dark-pink:#ba4270;
  --color-water-white:#fbfcfe;

  /* Secondary */
  --color-san-luan-blue:#36536b;
  --color-mirage-blue:#1b262f;
  --color-charm-pink:#da6d97;
  --color-light-san-juan-blue:#6c8294;

  --font-size-heading-xxl: 72px;
  --font-size-heading-xl: 56px;
  --font-size-heading-l: 48px;
  --font-size-heading-m: 32px;
  --font-size-heading-s: 25px;
  --font-size-heading-xs: 24px;

  --font-size-body: 15px;
 
  
  --line-height-header-xl:72px;
  --line-height-header-l:56px;
  --line-height-header-m:40px;
  --line-height-header-s:25px;
  --line-height-header-xs:32px;
  --line-height-body:28px;


 
}

*,
*::after,
*::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 62.5%;
}

body {
  font-size: var(--font-size-body);
  background-color:var(--color-water-white);
  font-family: 'DM Serif Display', sans-serif;
  min-height: 100vh;
  
 
}


#main_container {
  max-width: 144rem;
  width: 100%;
  margin: 0 auto;
 
}





`;

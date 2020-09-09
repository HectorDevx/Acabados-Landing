import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

:root {
  --color-white: #FFFBF2;
  --color-cream: #E7E3DA;
  --color-light-brown: #B87040;
  --color-brown: #814225;
  --color-black: #393834;

  --mini-space: 8px;
  --small-space: 16px;
  --normal-space: 24px;
  --medium-space: 40px;
  --large-space: 80px;
}

* {
  margin: 0;
  padding: 0;
}

h1 {
  font-family: Crimson Text;
  font-weight: 600;
  font-size: 65px;
}

.h1-light {
  font-family: Crimson Text;
  font-weight: normal;
  font-size: 44px;
}

h2 {
  font-family: Crimson Text;
  font-weight: 600;
  font-size: 44px;
}

h3 {
  font-family: Crimson Text;
  font-weight: normal;
  font-size: 34px;
}

h4 {
  font-family: Open Sans;
  font-weight: bold;
  font-size: 24px;
}

h5 {
  font-family: Open Sans;
  font-weight: normal;
  font-size: 24px;
}

h6 {
  font-family: Crimson Text;
  font-weight: normal;
  font-size: 24px;
}

p {
  font-family: Open Sans;
  font-weight: normal;
  font-size: 18px;
}

a {
  font-family: Crimson Text;
  font-weight: 600;
  font-size: 18px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

`;

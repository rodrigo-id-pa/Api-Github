import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root{
    --tnt: ${({ theme }) => theme.tnt};
    --bg-body: ${({ theme }) => theme.body};
    --bg-text: ${({ theme }) => theme.text};
    --wt: #eee;
  }

  body, html, #root {
    min-height: 100%;
    padding: 0 2%;
    font-family: Poppins, sans-serif;
  }

  body {
    background: var(--bg-body);
    color: var(--bg-text);
  }

  button, input {
    cursor: pointer;
  }


  li {  list-style: none;}

  a {  text-decoration: none;}

  `;

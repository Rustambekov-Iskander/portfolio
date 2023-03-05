import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }
  
  h1,h2,h3,h4,h5,h6 {
    color: #81E6D9;
  }

  body {
    font-family: 'M PLUS Rounded 1c', sans-serif;;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background: rgb(32, 32, 35);
    color: white;
  }

  a {
    color: inherit;
  }

  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
    @media (max-width: 600px) {
      width: 5px;
      height: 5px;
    }

    &-track {
      background: transparent;
    }

    &-thumb {
      background: #51caae;
      border-radius: 10px;
      padding-right: .3px;
    }
  }

  .fat_text {
    font-weight: 700;
  }
`

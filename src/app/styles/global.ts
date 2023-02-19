import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    list-style: none;
    text-decoration: none;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Source Code Pro', monospace;
    overflow-x: hidden;
    padding: 0;
    margin: 0;
    background: rgb(10, 25, 47);

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

  .neon-btn {
    background-color: #fff;
    border: 2px solid #fff;
    color: #000;
    display: inline-block;
    padding: 1rem 2rem;
    text-transform: uppercase;
    position: relative;
    overflow: hidden;
    letter-spacing: 2px;
    font-weight: bold;
  }
  .neon-btn:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #7FFF00;
    z-index: 1;
    transform: scaleX(0);
    transform-origin: 0 50%;
    transition: transform 0.5s ease-out;
  }
  .neon-btn:hover:before {
    transform: scaleX(1);
  }
`

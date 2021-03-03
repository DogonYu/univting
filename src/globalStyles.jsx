import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyles = createGlobalStyle`
  ${normalize}
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 16px;
  }
  body {
    font-family: 'Garam', 'Noto Sans KR', sans-serif, 나눔고딕, 돋움, Dotum, 굴림, Gulim, 'Apple SD Gothic Neo';
    background: white;
    overflow-x: hidden;
  }
  h2 {
    font-weight: 700;
  }
  a {
    &:hover {
      color: inherit;
      text-decoration: none;
    }
    color: inherit;
    text-decoration: none;
  }
  p {
    margin: 0;
  }
  button:focus {
    outline: none;
  }
  .hana {
    position: absolute;
    height: 0;
    width: 0;
    border: 10px solid pink;
    border-radius: 15px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .hana::after {
    content: "";
    display: block;
    position: absolute;
    top: -7px;
    left: -7px;
    height: 0;
    width: 0;
    border: 10px solid pink;
    border-radius: 15px;
    border-top-right-radius: 0;
    border-bottom-left-radius: 0;
    -webkit-transform: rotate(15deg);
    transform: rotate(15deg);
  }
  .y1 {
    -webkit-animation: v1 10s infinite;
    animation: v1 10s infinite;
  }
  .y2 {
    -webkit-animation: v2 9s infinite;
    animation: v2 9s infinite;
  }
  @-webkit-keyframes v1 {
    from {
      -webkit-transform: rotate(0deg);
    }
    50% {
      -webkit-transform: rotate(270deg);
    }
    to {
      -webkit-transform: rotate(1deg);
    }
  }
  @-webkit-keyframes v2 {
    from {
      -webkit-transform: rotate(-90deg) scale(0.8);
    }
    50% {
      -webkit-transform: rotate(-360deg) scale(0.8);
    }
    to {
      -webkit-transform: rotate(-89deg) scale(0.8);
    }
  }
  @keyframes v1 {
    from {
      transform: rotate(0deg);
    }
    50% {
      transform: rotate(270deg);
    }
    to {
      transform: rotate(1deg);
    }
  }
  @keyframes v2 {
    from {
      transform: rotate(-90deg) scale(0.8);
    }
    50% {
      transform: rotate(-360deg) scale(0.8);
    }
    to {
      transform: rotate(-89deg) scale(0.8);
    }
  }
  @media screen and (max-width: 500px) {
    html, body {
      width: 100%;
      height: 100%;
    }
    body > div {
      width:100%;
      height:100%;
    }
  }
`;

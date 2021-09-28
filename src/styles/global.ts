import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('Poppins Light'), local('Poppins-Light'),
        url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('Poppins Regular'), local('Poppins-Regular'),
        url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
  }
  
  @font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
        url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
  }

  /*----------- SETTINGS ----------*/
  :root {
    font-size: 62.5%;
    --font-poppins: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    --font-oswald: 'Oswald', sans-serif;
    --color-background: #ffffff;
    --color-white: #ffffff;
    --color-clean: #e8e8e8;
    --color-gray: #999999;
    --color-dark: #a9a9a9;
    --color-dark-gray: #333333;
  }

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    list-style: none;
    border: none;
    text-decoration: none;
  }

  *, ::after, ::before {
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
    -webkit-box-sizing: border-box; /* Safari and Chrome */
    -moz-box-sizing: border-box; /* Firefox */
    -ms-box-sizing: border-box; /* IE 9 */
    -o-box-sizing: border-box; /* Opera */
    box-sizing: border-box;
  }

  ::after, ::before {
    white-space: pre-wrap;
  }

  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0,0,0, 0.15);
    border-radius: 0;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0,0,0,0);
  }

  body,
  input,
  button,
  textarea {
    font: 300 1.4rem var(--font-poppins);
  }
  input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  input[type="radio"], input[type="checkbox"] {
    display: none;
  }

  button {
    cursor: pointer;
    background: transparent;
  }

  body {
    background: var(--color-background);
    overflow-y: overlay;
    overflow-x: hidden;
  }

  body {
    /* overflow: hidden; */
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  html, body, #__next {
    height: 100%;
  }

  html, body {
    overflow: hidden;
  }

  @-webkit-keyframes treo-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
    }
  }

  @keyframes treo-bouncedelay {
    0%,
    80%,
    100% {
      -webkit-transform: scale(0);
      transform: scale(0);
    }
    40% {
      -webkit-transform: scale(1);
      transform: scale(1);
    }
  }

  @keyframes changewidth {
    0% {
      left: -100%;
      opacity: 0;
    }
    10% {
      left: -100%;
      opacity: 0.2;
    }
    25% {
      left: 100%;
      opacity: 0.2;
    }
    90% {
      opacity: 0;
      left: 100%;
    }
    100% {
      left: -100%;
      opacity: 0;
    }
  }

  @-webkit-keyframes headShake {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    6.5% {
      -webkit-transform: translateX(-1px);
      transform: translateX(-1px);
    }
    18.5% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    31.5% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-2px);
    }
    43.5% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    50% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }
  @keyframes headShake {
    0% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
    6.5% {
      -webkit-transform: translateX(-1px);
      transform: translateX(-1px);
    }
    18.5% {
      -webkit-transform: translateX(2px);
      transform: translateX(2px);
    }
    31.5% {
      -webkit-transform: translateX(-3px);
      transform: translateX(-2px);
    }
    43.5% {
      -webkit-transform: translateX(1px);
      transform: translateX(1px);
    }
    50% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

  @keyframes IGCoreSpinnerSpin12 {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @keyframes scaleUpDown {
    0%,
    100% {
      transform: scaleY(1) scaleX(1);
    }
    50%,
    90% {
      transform: scaleY(1.1);
    }
    75% {
      transform: scaleY(0.95);
    }
    80% {
      transform: scaleX(0.95);
    }
  }

  @keyframes shake {
    0%,
    100% {
      transform: skewX(0) scale(1);
    }
    50% {
      transform: skewX(5deg) scale(0.9);
    }
  }

  @keyframes particleUp {
    0% {
      opacity: 0;
    }
    20% {
      opacity: 1;
    }
    80% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      top: -100%;
      -webkit-transform: scale(0.5); /* Safari and Chrome */
      -moz-transform: scale(0.5); /* Firefox */
      -ms-transform: scale(0.5); /* IE 9 */
      -o-transform: scale(0.5); /* Opera */
      transform: scale(0.5);
    }
  }

  @keyframes glow {
    0%,
    100% {
      background-color: #ef5a00;
    }
    50% {
      background-color: #ff7800;
    }
  }
`

export default GlobalStyle

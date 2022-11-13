import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    :root {
        --bgCallendar: #1d1f20;

        font-family: Inter, Avenir, Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 24px;
        font-weight: 400;

        color-scheme: light dark;
        color: rgba(255, 255, 255, 0.87);
        background-color: #242424;

        font-synthesis: none;
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-text-size-adjust: 100%;
    }
    
    * {
        box-sizing: border-box;
    }
`;

export default GlobalStyles;

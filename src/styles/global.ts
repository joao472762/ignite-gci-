
import { createGlobalStyle,css } from "styled-components";

export const GlobalTheme = createGlobalStyle`
    *{
        margin:  0;
        padding: 0;
        border: none;
        box-sizing: border-box;
    }
    *:focus{
        outline:  none;
        box-shadow: 0px 0px 0px 2px ${( {theme} ) => theme.colors.white};
    }
    body{
        background-color: ${( {theme} ) => theme.colors.gray[100]};
        
    }
    body,input,button{
        ${( {theme} ) => css`
            font-family: ${theme.fontFamily.default};
            font-size: ${theme.fontSize.base};
            color: ${theme.colors.white};
            font-weight: 400;
        `}
    }
    @media (max-width: 420px){
        html{
            font-size: 85%;
        }
    }
`
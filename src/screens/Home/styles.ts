import styled from "styled-components"


export const HomeContainer = styled.div`
    min-height: 100vh;
    display: flex;
    align-items:  center;

    background-color: ${( {theme} ) => theme.colors.red[400]};
    
`

export const HomeContent = styled.div`
    width: 100%;
    max-width: 1280px;

    margin: 0 auto;

`

export const Greeting = styled.div`
    margin-top: 30px;
    display: grid;
    grid-template-columns: 1fr 1fr;

    div {
        display: flex;
        align-items: flex-end;
    }

    h1 {
        margin-top: auto;
        font-weight: 800;
        line-height: 105%;
        font-size:  ${({theme}) => theme.fontSize["7xl"]};
    }
`

export const HomeFooter = styled.div`
    margin-top: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    p {
        font-weight: 600;
        font-size: ${({theme:{fontSize}}) => fontSize["2xl"]};
    }
    div {
      
    }
`

export const SelectorAdrresContainer = styled.div`
    display: flex;
    align-items: center;
   

    & > span {
        display:inline-block;
        margin-right: 1.25rem;
    }

 

`


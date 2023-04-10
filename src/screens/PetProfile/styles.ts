import { CaretLeft, Info } from "@phosphor-icons/react";
import styled from "styled-components";

export const PetProfileContainer = styled.div`
    display: flex;
    margin: 0 auto;

    *:focus{
            
        box-shadow: 0px 0px 0px 8px ${( {theme} ) => theme.colors.blue[400]};

    }
    
`

export const SideBar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    


    padding: 2rem  0;
    height: 100vh;
    width: 6rem;
    
    background-color:  ${({theme:{colors}}) =>colors.red[400] };


    button {
         display: flex;
        align-items: center;
        justify-content: center;

        height: 4rem;
        width: 4rem;
        border-radius: 20px;
        cursor:  pointer;
        background-color: ${({theme}) => theme.colors.yellow[400]};


        &:hover {
            opacity:  .8;
        }
    }


`


export const  ArrowLeftIcon =  styled(CaretLeft).attrs(({theme}) => ({
    color: theme.colors.blue[400],
    size: 24,
    weight: 'bold'


}))`
   
`

export const PetProfileContent = styled.aside`
    width: calc(100%  );
    

    max-width: 706px;
    margin: 0  auto;
    padding-bottom: 4rem;

    section {
        
        margin-left: -3rem;
        width: 100%;
        
    }

    
`

export const PetProfileHeader = styled.div`
    margin-top: 2.5rem;
        div {
            margin-top: 2.5rem;
            border-radius: 20px 20px 0px 0px;
        
            height: 21rem;
            background-color: ${({theme}) => theme.colors.white};
        }

    
    h1 {
        text-align: center;
        color: ${({theme}) => theme.colors.blue[200]};
        font-size:${({theme}) => theme.fontSize.lg} ;
        font-weight: 600;
    }
`

export const PetProfileContentWrraper = styled.div`
    padding: 2rem 4.5rem 4.5rem;
    border-radius: 0 0 20px 20px;
    background-color: ${({theme}) => theme.colors.white};
`


export const PetPofilePhoto = styled.img`
    width: 100%;
  
    height: 100%;
    border-radius: 20px 20px 0px 0px;
    object-fit: cover    ;
`

export const PetDescription = styled.div`
    margin-top: 4.375rem;
    color: ${({theme}) => theme.colors.blue[400]};

    h2 {
        font-size:${({theme}) => theme.fontSize["6xl"]} ;
        font-weight: 900;
        line-height: 160%;
    }
    p {
         font-size:${({theme}) => theme.fontSize["lg"]} ;
         font-weight: 600;
    }

    & > div {
        margin-top: 2.75rem;
        display: flex;
        gap: 14px;
        flex-wrap: wrap;
    }
`



export const PetLocation = styled.div`
    display: flex;
    padding-top: 3.125rem;
    gap:  1.125rem;
    margin-top: 2.5rem;
    border-top: 1px solid  ${({theme}) => theme.colors.blue[200]};

    & div:nth-of-type(1){
        display: flex;
        align-items: center;
        justify-content: center;

        height: 4rem;
        width: 4rem;
        border-radius: 15px;
        background-color:    ${({theme}) => theme.colors.orange[400]};

        
    }

    & div:nth-of-type(2){
        color:    ${({theme}) => theme.colors.blue[400]};
        strong {
            display: block;
            font-size:${({theme}) => theme.fontSize["3xl"]} ;
        }

        a {
            column-gap: .5rem;
            text-decoration: none;
            display: flex;
            width: 13rem;
            align-items: center;
            flex-direction: row;
            justify-content: center;
            background-color:  ${({theme}) => theme.colors.blue[100]};
            color:    ${({theme}) => theme.colors.blue[400]};
           
            border-radius: 10px;
            padding: 16px 24px;
            margin-top: 1rem;
            
            cursor: pointer;
        }
    }
`

export const AdoptionRequirements = styled.div`
    margin-top:  3.125rem;
    padding-top: 3.125rem;
    border-top: 1px solid  ${({theme}) => theme.colors.blue[200]};

    strong  {
          color:    ${({theme}) => theme.colors.blue[400]};
        font-size:${({theme}) => theme.fontSize["3xl"]} ;
    }
    ul {
        width: 100%;
        margin-top: 2.5rem;
        display: flex;
        flex-direction: column;
        gap: 10px;
        list-style-position: inside;
    }
    li {
        display: flex;
        align-items: center;
        padding: 1rem 2.5rem;
        column-gap: 14px;
        width: 100%;
        border:  1px solid  ${({theme}) => theme.colors.red[400]};
        border-radius: 10px;
        color: ${({theme}) => theme.colors.red[400]};
      
    }
`
export const ContactByWhatsapp = styled.div`
    margin-top:  3.125rem;
    padding-top: 3.125rem;
    border-top: 1px solid  ${({theme}) => theme.colors.blue[200]};
    
    a {
        display: flex;
        justify-content: center;
        padding: 20px;
        
        width: 100%;
        font-size:${({theme}) => theme.fontSize["lg"]} ;
        font-weight: 900;
        background-color: ${({theme}) => theme.colors.green[400]};
        color: ${({theme}) => theme.colors.white};
        border-radius: 20px;
        text-decoration: none;

        &:hover{
            opacity: .7;
        }

    }

`

export const InfoIcon = styled(Info).attrs(({theme}) => ({
    size: 24,
    color: theme.colors.red[400]
}) )``


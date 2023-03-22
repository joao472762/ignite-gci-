import styled from "styled-components";

export const MapContainer = styled.div`
    background-color:  ${({theme}) => theme.colors.white};
    width: 100%;
    max-width: 1560px;
    position: relative;
    margin: 0 auto;
    display: flex;

`

export const MapFilter = styled.form`
    position: fixed;
    width: 24.5rem;
    min-height: 100vh;

    background-color:  ${({theme}) => theme.colors.red[400]};

`

export const Filters = styled.div`
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-right: 2.5rem;
    padding-top: 2.18rem;
     padding-left: 3.5rem; 
    row-gap: 1.87rem;
`

export const MapFilterHeader = styled.div`
    background-color:  ${({theme}) => theme.colors.red[500]};   
    padding-top: 5rem;
    padding-left: 3.5rem;
    padding-right: 2.5rem;
    padding-bottom: 1.6rem;

    
    
    & > div {
        margin-top: 1.6rem;
        display: flex;
        column-gap: 12px;
    }

`

export const PetsContainer = styled.div`
   flex-grow: 1;
   margin-left: 24.5rem ;
   padding:  0 2rem;
   margin-top: 10rem;


   header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
        color:   ${({theme}) => theme.colors.blue[400]};
        font-size:  ${({theme}) => theme.fontSize.xl};
        width: 500;

    }
   }
`

export const PetsList = styled.div`
    margin-top: 3.5rem;
    width: 100%;
    display: grid;
    

   
    grid-template-columns: repeat(auto-fit,17.5rem);
    gap: 2rem;
    

`


import { Link } from "react-router-dom";
import styled from "styled-components";

export const PetCardContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17.5rem;
    
    text-decoration: none;
    border-radius: 20px;

    overflow: hidden;

    padding: 4px;
    padding-bottom: 1rem;
    
    
    background-color:  ${({theme:{colors}}) => colors.white};

    strong {
        color:  ${({theme:{colors}}) => colors.blue[400]};
    }

    &:focus strong, &:hover strong {
        color:  ${({ theme: { colors } }) => colors.white};
 
    }

    &:focus, &:hover {
        cursor: pointer;
        background-color:  ${({theme:{colors}}) => colors.blue[400]};
 
    }

    & > img {
        width: 100%;
        border-radius: 16px;
        object-fit: cover;
        height: 8.43rem;
 
    }
`


export const PetIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;
    margin-top:  -1.375rem;

    border-radius: 12px;
    background-color: ${({ theme: { colors } }) => colors.red[300]}; 
    border: 3px solid ${({ theme: { colors } }) => colors.blue[400]};

    height: 2.75rem;
    width: 2.75rem;

    & > img {
        width: 1rem;
        height: 1rem;
    }

    strong {
        display: inline-block;
        margin-top: .5rem;
        font-size: ${({ theme: { fontSize } }) => fontSize.lg};;
    }

`
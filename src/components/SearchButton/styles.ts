import styled from "styled-components";
import {MagnifyingGlass} from '@phosphor-icons/react'

export const SearchButtonContainer = styled.button`
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
`


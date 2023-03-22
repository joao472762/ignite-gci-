import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import {CaretDown} from '@phosphor-icons/react'

export const StateSelectContainer = styled(Select.Root)`

`

export const CitySelectTrigger = styled(Select.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;

    text-transform: uppercase;
    font-size: ${({theme}) => theme.fontSize.xl};
    font-weight: 800;
    background: transparent;
    border: 1px solid ${({theme}) => theme.colors.white};
    height: 4rem;
    width: 4rem;
    border-radius: 20px;
    
`
export const Icon = styled(CaretDown).attrs(({theme}) => ({
    color: theme.colors.white,
    width: 16,
    weight: 'bold'
}))`
    margin-left: 4px;
`



export const StateSelectCotent = styled(Select.Content)`
    border-radius: 8px;
    overflow: hidden;

   
`

export const StateSelectViewPort= styled(Select.Viewport)`
    background-color: ${({theme}) => theme.colors.white};
    padding: 8px;
 
    min-width: 6rem;


`

export const StateSelectLabel = styled(Select.Label)`
    margin-bottom: 12px;
    font-weight: bold;
   
    color:  ${({theme}) => theme.colors.blue[400]};

`

export const StateSelectItem = styled(Select.Item)`
    padding: 4px;
    border-radius: 4px;
  
    text-transform: uppercase;
    cursor: pointer;
    color:  ${({theme}) => theme.colors.blue[400]};
    font-weight: 600;
   

    &[data-highlighted]{
       border: 1px solid ${({theme}) => theme.colors.blue[400]};
    }
`


import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import {CaretDown} from '@phosphor-icons/react'

export const PetTypeSelectContainer = styled(Select.Root)`

`

export const PetTypeSelectTrigger = styled(Select.Trigger)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    height: 4rem;
    padding: 0 18px;
    width: 13.12rem;
    border-radius: 20px;
    column-gap: 18px;
    
    
    background:  ${({theme}) => theme.colors.gray[100]};
    color: ${({theme}) => theme.colors.blue[400]};
`
export const Icon = styled(CaretDown).attrs(({theme}) => ({
    color: theme.colors.blue[400],
    width: 16,
    weight: 'bold'
}))`
    margin-left: 4px;
`



export const PetTypeSelectContent = styled(Select.Content)`
    border-radius: 8px;
    overflow: hidden;

   
`

export const PetTypeSelectViewPort= styled(Select.Viewport)`
    background-color: ${({theme}) => theme.colors.white};
    padding: 8px;
 
    min-width: 6rem;


`

export const PetTypeSelectLabel = styled(Select.Label)`
    margin-bottom: 12px;
    font-weight: bold;
   
    color:  ${({theme}) => theme.colors.blue[400]};

`

export const PetTypeSelectItem = styled(Select.Item)`
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


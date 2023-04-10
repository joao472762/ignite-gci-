import * as Select from '@radix-ui/react-select';
import styled, { css } from 'styled-components';
import {CaretDown} from '@phosphor-icons/react'

export const SelectContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

`



export const Label = styled.span`
    display: block;
    margin-bottom: .75rem;
    font-size:  ${({theme:{fontSize}}) => fontSize.base};
    color: ${({theme:{colors}}) => colors.blue[400]};
    text-transform: capitalize;
    font-weight: 600;
   
`
export const CitySelectTrigger = styled(Select.Trigger)`
    ${({theme:{colors,fontSize}}) => css`
        display: flex;
        align-items: center;
        justify-content: space-between;

        font-size: ${fontSize.lg};
        color: ${colors.blue[400]};
        font-weight: 800;

        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        border-color:${colors.blue[150]};

        width: 100%;
        height: 3.75rem;
        
        
        padding: 20px;
        flex-grow: 1;
      
       
        background-color: ${colors.gray[200]};
    
    `}
    
`
export const Icon = styled(CaretDown).attrs(({theme}) => ({
    color: theme.colors.blue[400],
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

    border-width: 2px;
    border-style: solid;
    border-radius: 10px;
    border-color:${({theme:{colors}}) =>colors.blue[150]};
 
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
  
    text-transform: capitalize;
    cursor: pointer;
    color:  ${({theme}) => theme.colors.blue[400]};
    font-weight: 600;
   

    &[data-highlighted]{
       border: 1px solid ${({theme}) => theme.colors.blue[400]};
    }
`


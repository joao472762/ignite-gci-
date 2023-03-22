import * as Select from '@radix-ui/react-select';
import styled, { css } from 'styled-components';
import {CaretDown} from '@phosphor-icons/react'

export const SelectContainer = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;

`

export type SelectStyledProps = 'primary' | 'secondary'

interface SelectProps {
    variant: SelectStyledProps
}
export const Label = styled.span`
    display: block;
    margin-bottom: .75rem;
    font-size:  ${({theme:{fontSize}}) => fontSize.sm};
    font-weight: 600;
   
`
export const CitySelectTrigger = styled(Select.Trigger)<SelectProps>`
    ${({theme:{colors,fontSize},variant}) => css`
        display: flex;
        align-items: center;
        justify-content: ${variant === 'primary' ? 'space-between': 'center'};

        font-size: ${fontSize.xl};
        font-weight: 800;

        border-width: 1px;
        border-style: solid;
        width: 100%;
        height: 3.75rem;
        border-radius: 20px;
        
        
        border-color: ${variant ==='primary' ? colors.red[300] : colors.white};
        padding:  ${variant === 'primary' ? 20 : 0}px;
        flex-grow: ${variant === 'primary' ? 0: 1};
        text-transform:  ${variant === 'primary' ? 'none': 'uppercase'};;
        background: ${variant === 'primary' ? colors.red[300]: 'transparent'};
    
    `}
    
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


import styled from 'styled-components';
import * as Select from '@radix-ui/react-select';
import {CaretDown} from '@phosphor-icons/react'

export const CitySelectRoot= styled(Select.Root)`
    margin-left: 20px;
`

export const CitySelectTrigger = styled(Select.Trigger)`
    display: flex;
    align-items: center;
    margin-left: 10px;
    justify-content: center;

  
    font-weight: 900;
    padding: 19px 90px;
    height: 4rem;
    
    border-width: 2px;
    background: ${({theme}) => theme.colors.red[500]};
    font-size: ${({theme}) => theme.fontSize.xl};
   
    border-radius: 20px;
    
`
export const Icon = styled(CaretDown).attrs(({theme}) => ({
    color: theme.colors.white,
    width: 16,
    weight: 'bold'
}))`
    margin-left: 4px;
`



export const CitySelectCotent = styled(Select.Content)`
    border-radius: 8px;
    overflow: hidden;

   
`

export const CitySelectViewPort= styled(Select.Viewport)`
    background-color: ${({theme}) => theme.colors.white};
    padding: 8px;
    min-width: 6rem;


`

export const CitySelectLabel = styled(Select.Label)`
    margin-bottom: 12px;
    font-weight: bold;
   
    color:  ${({theme}) => theme.colors.blue[400]};

`

export const CitySelectItem = styled(Select.Item)`
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


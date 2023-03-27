import { Lightning } from "@phosphor-icons/react";
import styled from "styled-components";

export type indicatorTypeStyles =  'petSize' | 'petEnergy'| 'environment'

interface indicatorProps {
    type: indicatorTypeStyles;
}

export const PetEnergyIndicatorContainer = styled.div<indicatorProps>`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    gap: 16px;

    border-radius: 20px;
    border:  1px solid ${({theme:{colors}})=> colors.blue[400]};
    width: 10.87rem;
    height: 6.625rem;
    padding:  0 1.625rem;
    div {
        gap: ${({type}) => type === 'petEnergy' ? 0 : 3}px;
        display: flex;
    }
    span {
        font-size:  ${({theme}) => theme.fontSize.lg};
        font-weight:  600;
    }
`
interface circleIndicatorProps {
    isActive: boolean;
}

export const CircleIndicator = styled.div<circleIndicatorProps>`
    height: 0.75rem;
    width: 0.75rem;
    border-radius: 6px;
    background-color: ${({isActive,theme:{colors}}) =>isActive ? colors.blue[400] : colors.blue[200] }
`
export const Icon = styled(Lightning).attrs(({theme}) => ({
    
    size: 24,
  
}))`
   
`


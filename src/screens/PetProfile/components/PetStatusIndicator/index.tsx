import { Lightning } from "@phosphor-icons/react";
import { useTheme } from "styled-components";
import EnvironmentSvg from '../../../../assets/environment.svg'
import { CircleIndicator, Icon, indicatorTypeStyles, PetEnergyIndicatorContainer } from "./styles";

interface PetEnergyIndicatorProps{
    size?: number,
    type?: indicatorTypeStyles
    indicatorsChecked?:number
    title: string
}
export function PetStatusIndicator({ size=5, title, indicatorsChecked=1, type='petEnergy' }: PetEnergyIndicatorProps){

    const indicatorsAcitive = Array.from({ length: indicatorsChecked  },(_,index) => index)
    const indicatorDisabled = Array.from({ length: size - indicatorsChecked   }, (_, index) => index)
    const {colors} = useTheme()

    const petSizeStatus = {
        1: 'pequeno',
        2: 'médio',
        3: 'grande'
    }
    type petSizeStatusType = 1 | 2 | 3


    if (type === 'environment'){
        return (
            <PetEnergyIndicatorContainer type="environment">
                <img src={EnvironmentSvg }/>
                <span>{title}</span>
            </PetEnergyIndicatorContainer>

        )
    }

    
    return(
        <PetEnergyIndicatorContainer type={type}>
            <div>
                {indicatorsAcitive.map(active => (
                    type === 'petEnergy' 
                        ? <Icon key={String(active)} /> 
                        : <CircleIndicator key={String(active)} isActive/>
                ))}

                {indicatorDisabled.map(disabled => (
                    type === 'petEnergy' 
                        ? <Icon weight="fill" color={colors.blue[200]} key={String(disabled)} /> 
                        : <CircleIndicator key={String(disabled)} isActive={false} /> 
                    ))}
            </div>
            <span>
                {type === 'petEnergy' && (indicatorsChecked  < 3 ? 'pouca energia' : 'moderada a alta ')}
                {type === 'petSize' &&  petSizeStatus[indicatorsChecked as petSizeStatusType]}
            </span>
        </PetEnergyIndicatorContainer>

    )
}
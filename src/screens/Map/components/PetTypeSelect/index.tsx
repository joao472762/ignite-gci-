import * as Select from '@radix-ui/react-select';
import {SelectProps} from '@radix-ui/react-select'


import { 
    Icon,
    PetTypeSelectItem,
    PetTypeSelectLabel,
    PetTypeSelectTrigger,
    PetTypeSelectContent,
    PetTypeSelectViewPort,
 } from './styles';

interface PetTypeSelectProps extends SelectProps {}

export function PetTypeSelector({ ...rest }:PetTypeSelectProps){

    const petSelectType = {
        all: 'Cachorros e Gatos',
        dog: 'Cachorros',
        cat: 'Gatos'
    }
    const petSelectTypeKeys = Object.keys(petSelectType)
    const PetSelectValues = Object.values(petSelectType) 


    return (
        <Select.Root {...rest}   >
            <PetTypeSelectTrigger>
                <Select.Value placeholder={'cachoros e gatos'} />
                    <Icon />
            </PetTypeSelectTrigger>

            <Select.Portal >
                <PetTypeSelectContent >
                    <Select.ScrollUpButton className="SelectScrollButton">
                       
                    </Select.ScrollUpButton>
                    <PetTypeSelectViewPort >
                        <Select.Group >
                            <PetTypeSelectLabel >Selecione</PetTypeSelectLabel>
                            {
                                petSelectTypeKeys.map((petType, index) => (
                                    <PetTypeSelectItem defaultValue={'all'} key={petType} value={petType}>
                                        <Select.ItemText >{PetSelectValues[index]}</Select.ItemText>
                                    </PetTypeSelectItem>

                                ))
                            }
                          
                        </Select.Group>
                    </PetTypeSelectViewPort>
                </PetTypeSelectContent>
            </Select.Portal>
        </Select.Root>
    )
}
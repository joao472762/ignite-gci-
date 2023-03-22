import * as Select from '@radix-ui/react-select';
import {SelectProps}from '@radix-ui/react-select';
import { StyledInterface } from 'styled-components';
import { 
    Icon,
    CitySelectItem,
    CitySelectLabel,
    CitySelectRoot,
    CitySelectCotent,
    CitySelectTrigger,
    CitySelectViewPort,
} from './styles';


export type citysProps  =  {
    name: string, code: string
}[] | []

interface Props extends SelectProps {
    citys: citysProps
}

export function CitySelect({ citys,...rest }: Props){
    
    return (
        <CitySelectRoot {...rest}>
            <CitySelectTrigger>
                <Select.Value placeholder={citys[0]?.name} defaultValue={citys[0]?.name} />
                   
                <Icon/>
            </CitySelectTrigger>
            <Select.Portal>
                <CitySelectCotent>
                    <CitySelectViewPort>
                        <Select.Group>
                            <CitySelectLabel>Cidades</CitySelectLabel>
                            {citys.map(city => (
                                <CitySelectItem key={city.name} value={city.name}>
                                    <Select.ItemText >{city.name}</Select.ItemText>
                                </CitySelectItem>
                            ))}
                     
                        </Select.Group>
                    </CitySelectViewPort>
                </CitySelectCotent>
            </Select.Portal>
        </CitySelectRoot>
    )
}
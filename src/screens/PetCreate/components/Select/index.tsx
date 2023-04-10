import * as SelectRadix  from '@radix-ui/react-select';
import {SelectProps as SelectRadixProps} from '@radix-ui/react-select'



import { 
    Icon,
    Label,
    StateSelectItem,
    SelectContainer,
    StateSelectLabel,
    CitySelectTrigger,
    StateSelectCotent,
    StateSelectViewPort,
 } from './styles';


export interface SelectProps extends SelectRadixProps  {
    dataSet: string[] | [],
    dataSetPlaceholder: string[] | number[] | [],

    label?: string,
   
}

export function Select({ dataSet ,dataSetPlaceholder, label ,...rest }: SelectProps){

    return (
        <SelectContainer>
            {label && <Label>{label}</Label>}
            <SelectRadix.Root  {...rest} >
            
                <CitySelectTrigger  >
                    <SelectRadix.Value placeholder={ dataSetPlaceholder[0]} defaultValue={dataSet[0]}/>
                        <Icon />
                </CitySelectTrigger>

                <SelectRadix.Portal >
                    <StateSelectCotent >
                        <SelectRadix.ScrollUpButton className="SelectScrollButton">
                        
                        </SelectRadix.ScrollUpButton>
                        <StateSelectViewPort >
                            <SelectRadix.Group >
                                <StateSelectLabel className="SelectLabel">{label?.toUpperCase()}</StateSelectLabel>
                                {
                                    dataSet.map((data, index) => (
                                        <StateSelectItem key={data} value={data} textValue={String(dataSetPlaceholder[index])}>
                                            <SelectRadix.ItemText >
                                                {dataSetPlaceholder[index]}
                                                
                                            </SelectRadix.ItemText>
                                        </StateSelectItem>

                                    ))
                                }
                            
                            </SelectRadix.Group>
                        </StateSelectViewPort>
                    </StateSelectCotent>
                </SelectRadix.Portal>
            </SelectRadix.Root>

        </SelectContainer>
    )
}
import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

import { Select, SelectProps } from "../Select";
import { MapFormArrayTypes, MapFormProps } from "../../screens/Map";

interface SelectControlledProps extends SelectProps {
    control: Control<MapFormProps>,
    name: MapFormArrayTypes
}

export function SelectControlled({control, name, ...rest }: SelectControlledProps){
    return (
        <Controller
            control={control}
            
            render={({ field: { onChange, onBlur, value } }) => (
                <Select
                    value={value}
                    onValueChange={(event) => onChange(event)}
                    {...rest}
                />
            )}

            name={name}
        />
    )
}
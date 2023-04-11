import { Controller } from "react-hook-form";
import { Control } from "react-hook-form/dist/types";

import { Select, SelectProps } from "../Select";
import { CreatePetFormArrayTypes, CreatePetFormSchemaData } from "../..";

interface SelectControlledProps extends SelectProps {
    control: Control<CreatePetFormSchemaData>,
    name: CreatePetFormArrayTypes
}

export function SelectControlled({control, name, ...rest }: SelectControlledProps){
    return (
        <Controller
            control={control}
            
            render={({ field: { onChange, value } }) => (
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
import { InputHTMLAttributes } from "react";
import { Error, InputContainer, InputWrapper } from "./styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    label?: string;
}



export function TextInput({ error, label, ...rest}: FormInputProps){
    return (
        <InputContainer>
            {label   && (
                <span>{label}</span>

            )}
            <InputWrapper>
                <input {...rest}/>
            </InputWrapper>
            { error && <Error>
                {error.toLocaleLowerCase() === 'required' ? 'Requerido' : error}
            </Error>}
        </InputContainer>        
    )
}
import { InputHTMLAttributes } from "react";
import { Error, InputContainer, InputWrapper } from "./styles";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    label?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}



export function Input({ error, label,id,onChange, ...rest}: FormInputProps){
    return (
        <InputContainer>
           
            <InputWrapper>
                <input {...rest} onChange={onChange} />
            </InputWrapper>
            { error && <Error>
                {error.toLocaleLowerCase() === 'required' ? 'Requerido' : error}
            </Error>}
        </InputContainer>        
    )
}
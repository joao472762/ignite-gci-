import { InputHTMLAttributes, forwardRef } from "react";
import { Error, InputContainer, InputWrapper } from "./styles";
import {  UseFormRegister } from 'react-hook-form'

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement>{
    error?: string;
    label: string
}

export const TextInput = forwardRef<
    HTMLInputElement,
    FormInputProps
>(({ label, error, ...rest }, ref) => (
    <InputContainer>
        {label && (
            <span>{label}</span>

        )}
        <InputWrapper>
            <input {...rest} ref={ref} />
        </InputWrapper>
        {
            error && (
                <Error>
                    {error.toLocaleLowerCase() === 'required' ? 'Requerido' : error}
                </Error>

            )
        }

    </InputContainer>
));
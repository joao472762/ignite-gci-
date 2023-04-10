import { TextareaHTMLAttributes } from "react";
import { Error, TextAreaContainer, TextAreaWrapper } from "./styles";

interface FormInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
}



export function TextArea({ error, label, maxLength, ...rest }: FormInputProps) {
    return (
        <TextAreaContainer>
            {label && (
                <>
                    <span>{label}</span>
                    {maxLength && (<span>Máximo de {maxLength} catacteres</span>)}  
                </>

            )}
            <TextAreaWrapper>
                <textarea maxLength={maxLength} {...rest} />
            </TextAreaWrapper>
            {error && <Error>
                {error.toLocaleLowerCase() === 'required' ? 'Requerido' : error}
            </Error>}
        </TextAreaContainer>
    )
}
import { TextareaHTMLAttributes, forwardRef } from "react";
import { Error, TextAreaContainer, TextAreaWrapper } from "./styles";

interface FormInputProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    error?: string;
    label?: string;
}





export const TextArea = forwardRef<
    HTMLTextAreaElement,
    FormInputProps
    >(({ label, error, maxLength, ...rest }, ref) => (
    <TextAreaContainer>
        {label && (
            <>
                <span>{label}</span>
                {maxLength && (<span>Máximo de {maxLength} catacteres</span>)}
            </>

        )}
        <TextAreaWrapper>
            <textarea maxLength={maxLength} {...rest} ref={ref} />
        </TextAreaWrapper>
        {error && <Error>
            {error.toLocaleLowerCase() === 'required' ? 'Requerido' : error}
        </Error>}
    </TextAreaContainer>
));
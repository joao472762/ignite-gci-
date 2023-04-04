import { InputHTMLAttributes, useState } from "react";
import { Error, InputPasswordContainer, InputWrapper } from "./styles";
import { Eye, EyeSlash } from "@phosphor-icons/react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export function InputPassword({ error, label, id, ...rest }: FormInputProps) {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <InputPasswordContainer>
            {label && <label htmlFor={id}>{label}</label>}
            <InputWrapper>
                <input type={isVisible ? 'text'  : 'password'} {...rest} />
                
                <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? <Eye/> : <EyeSlash/>}

                </button>
            </InputWrapper>
            {error && <Error>{error}</Error>}
        </InputPasswordContainer>
    )
}
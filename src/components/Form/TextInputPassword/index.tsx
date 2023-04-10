import { InputHTMLAttributes, forwardRef, useState } from "react";
import { Error, InputPasswordContainer, InputWrapper } from "./styles";
import { Eye, EyeSlash } from "@phosphor-icons/react";
import { UseFormRegister } from 'react-hook-form'


interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    label?: string;
}

export const TextInputPassword = forwardRef<
    HTMLInputElement,
    FormInputProps & ReturnType<UseFormRegister<{}>>
>(({ label, error, ...rest }, ref) => {
    const [isVisible, setIsVisible] = useState(false)

    return (
        <InputPasswordContainer>
            {label && <span>{label}</span>}
            <InputWrapper>
                <input type={isVisible ? 'text' : 'password'} {...rest} ref={ref} />

                <button type="button" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? <Eye /> : <EyeSlash />}

                </button>
            </InputWrapper>
            {error && <Error>{error}</Error>}
        </InputPasswordContainer>

        )
    
    })
;
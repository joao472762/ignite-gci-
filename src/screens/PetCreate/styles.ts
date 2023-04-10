import styled from "styled-components"

export const PetCreateContainer = styled.div`
    max-width: 708px;
    margin:  0 auto;
    margin-top: 6.75rem;
`

export const PetCreateHeader = styled.header`
    display: flex;
    align-items: center;
    column-gap: 1rem;
    border-radius: 20px;
    min-height: 7.56rem;
    
    padding-right: 4.5rem;
    padding-left: 5rem;


    background-color: ${({theme:{colors}}) => colors.blue[400]};

    
    `

export const SignOutButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;
    border-radius: 15px;
    background-color:    ${({theme}) => theme.colors.blue[300]};

    &:not(:disabled):hover{
        opacity: .8;
        cursor: pointer;
    } 

    &:disabled {
        cursor: not-allowed;

    }

    
    svg {
        color:    ${({theme}) => theme.colors.white};
        font-size: 22px;
    }

`
export const PetIconWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    height: 4rem;
    width: 4rem;
    border-radius: 15px;
    background-color:    ${({theme}) => theme.colors.orange[400]};

    button {

    }
`

export const PetLocation = styled.div`
    flex-grow: 1;
    
`

export const PetCreateForm = styled.form`
    padding: 5rem;
    padding-top: 4rem;
    border-radius: 20px;

    margin-top: 1.875rem;
    border: 1px solid ${({theme}) => theme.colors.blue[150]};
    
    background-color:    ${({theme}) => theme.colors.white};  
    
    h2 {
        font-size:  ${({theme}) => theme.fontSize["4xl"]};
        color:    ${({theme}) => theme.colors.blue[400]};  
        font-weight: 800;

    }

`

export const PetTextFields = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 100%;
`

export const UploadPhotos = styled.div`
    width: 100%;
    margin-top: 16px;

    label {
       
    }
`

export const UploadPhotosBox = styled.label`
        display: flex;
        align-items: center;
        flex-direction: column;

        justify-content: center;
        width: 100%;

        color: ${({theme:{colors}}) => colors.blue[400]};
        background-color: red;
        height: 200px;

    


        background-color: ${({theme:{colors}}) => colors.gray[200]};
        border: 1px solid ${({theme:{colors}}) => colors.blue[150]} ;
        border-radius: 10px;

        & > span {
            margin-top: 20px;
            display: inline-block;
        }
        svg {
            font-size: 25px;
        }
`

export const PhotosPeview = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 14px;
`
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

    & > button {
        display: flex;
        align-items: center;
        justify-content: center;

        background-color:    ${({theme}) => theme.colors.yellow[400]};
         color:    ${({theme}) => theme.colors.blue[400]};
            font-size:  ${({theme}) => theme.fontSize["lg"]};
         font-weight: 900;
         height: 4rem;
         width: 100%;
         border-radius: 20px;
         margin-top: 8rem;
         
    }

`

export const PetTextFields = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 1.5rem;
    width: 100%;
`
export const PhotosPeview = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 8px;
    margin-top: 14px;
`

export const AdoptiontsRequirementsWrrapper = styled.div`
    h2 {
        font-size:  ${({theme}) => theme.fontSize["3xl"]};
        color:    ${({theme}) => theme.colors.blue[400]};  
        font-weight: 900;
    }
`

export const AdoptiontsRequirements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 1.75rem;
    margin-top: 1.75rem;
    border-top:  1px solid   ${({theme}) => theme.colors.blue[150]};
`

export const Requirement = styled.div`
    label {
        font-size: ${({theme}) => theme.fontSize.base};
        color:${({theme: {colors}}) => colors.blue[400]};
        font-weight: 600;

    }
    & > div {
        
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        border-color:${({theme: {colors}}) => colors.blue[150]};

        width: 100%;
        height: 4rem;

        margin-top: 6px;
        padding:  0 14px;

        &:focus-within {
            border-color:${({theme: {colors}}) => colors.blue[400]};
        }

        input {
            flex: 1;
            color:${({theme: {colors}}) => colors.blue[300]};
            font-size: ${({theme}) => theme.fontSize.lg};
            height: 90%;
            font-weight: 600;
       
    
            
            &::placeholder {
                color:${({theme: {colors}}) => colors.blue[300]};
            }
        }


    }


`

export const RemoveRequirimentButton = styled.button`
    line-height: 0;
    background-color: transparent;
    border-width: 2px;
    border-style: solid;
    border-radius: 4px;
    font-size: 20px;
    border-color:${({theme: {colors}}) => colors.red[500]};
    color:${({theme: {colors}}) => colors.red[500]};

      &:not(:disabled):hover {
        opacity: .8;
        cursor: pointer;
    }
    

`

export const RequirimentError = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.red[500] };
  margin-top: 4px;

`;

export const AddNewRequireimentButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border: 1px dashed ${({theme: {colors}}) => colors.red[500]};
    border-radius: 10px;
    height: 4rem;
    margin-top: 12px;
    
    &:not(:disabled):hover {
        opacity: .8;
        cursor: pointer;
    }

    svg {
       color :  ${({theme: {colors}}) => colors.red[500]};
       font-size: 20px;
    }


`



import styled from "styled-components"

export const UploadImagesContainer = styled.div`
    width: 100%;
    margin-top: 16px;

    label {
       
    }
`

export const UploadImagesBox = styled.label`
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
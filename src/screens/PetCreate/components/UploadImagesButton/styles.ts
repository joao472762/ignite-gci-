import styled from "styled-components";

export const UploadImagesButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    border: 1px dashed ${({theme: {colors}}) => colors.red[500]};
    border-radius: 10px;
    height: 4rem;
    
    svg {
       color :  ${({theme: {colors}}) => colors.red[500]};
       font-size: 20px;
    }

`
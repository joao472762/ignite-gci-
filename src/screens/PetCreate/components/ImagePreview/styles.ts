import styled from "styled-components";

export const ImagePreviewContainer = styled.div`
        display: flex;
        align-items: center;
        justify-content: space-between;

        border-width: 2px;
        border-style: solid;
        border-radius: 10px;
        border-color:${({theme: {colors}}) => colors.blue[150]};

        width: 100%;


        padding: 14px;
          
        background-color: ${({theme: {colors}}) => colors.gray[200]};

        div {
                display: flex;
                align-items: center;
        }

        span {
            display: inline-block;
            margin-left: 12px;
            color:${({theme: {colors}}) => colors.blue[400]};
            font-size: ${({theme: {fontSize}}) => fontSize.sm};
        }
`

export const RemoveImageButton = styled.button`
        line-height: 0;
        background-color: transparent;
        border-width: 2px;
        border-style: solid;
        border-radius: 4px;
        font-size: 20px;
        border-color:${({theme: {colors}}) => colors.red[500]};
        color:${({theme: {colors}}) => colors.red[500]};
`
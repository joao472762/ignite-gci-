import styled from "styled-components";

export  const TextAreaContainer = styled.label`
  span {
    font-size: ${({ theme }) => theme.fontSize.base};
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 8px;

    &:nth-of-type(2) {
        font-size: ${({ theme }) => theme.fontSize.xs};
        color: ${({ theme }) => theme.colors.blue[200]};
        display: inline-block;
        margin-left: 16px;
    }
  }
`;

export const TextAreaWrapper = styled.div`
    display: flex;
    width: 100%;

    background-color: #f5f8fa;
    border: 1px solid #d3e2e5;
    border-radius: 10px;
    padding: 18px;
    margin-top: 8px;


   

    textarea {
        width: 100%;
        font-size: 18px;
        font-weight: 600;
        min-height: 7.5rem;
        color: #0d3b66;
        resize: none;
        background-color: transparent;
        border: none;
        outline: none;
    }
 

  button {
    cursor: pointer;
    background-color: transparent ;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`


export const Error = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.red[500]};
  margin-top: 4px;
`;

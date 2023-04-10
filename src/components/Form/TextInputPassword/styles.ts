import styled from "styled-components";

export const InputPasswordContainer = styled.label`
  & > span:nth-of-type(1) {
    font-size: 16px;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 8px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
 

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const Error = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.red[500]};
  margin-top: 4px;
`;

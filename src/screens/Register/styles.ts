import { MapContainer } from 'react-leaflet';
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

`
export const MapWrapper = styled('div')`

`
export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 100%;
  height: 142px;
  border-radius: 16px;
  overflow: hidden;
 
`;


export const Container = styled.main`
  max-width: 1112px;
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  position: relative;
`

export const Card = styled.div`
  width: 488px;
  height: 661px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  align-self: center;

  position: sticky;
  left: 0;
  top: 0;

  background-color: #f15156;
  border-radius: 20px;
  padding: 107px 52px 39px;
  

  .logo {
    width: 174px;
  }
`

export const FormWrapper = styled.div`
  width: 488px;
  padding-right: 18px;
  height: 661px;
  display: block;
  overflow-y: auto;


  h1 {
    font-size: 54px;
    color: #0d3b66;
    line-height: 90%;
    letter-spacing: -2px;
    

    text-align: center;
    margin-bottom: 101px;
  }

  footer {
    text-align: center; 
    a {
      display: inline-block;
      margin-top: 40px;
      text-decoration: none;
      font-size: ${({theme: {fontSize}}) => fontSize.lg};
      font-weight: 900;
      color: ${({theme: {colors}}) => colors.blue[400]};

      &:hover {
        opacity: .8
      }

    }
  }
`

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;

  background-color: #f5f8fa;
  border: 1px solid #d3e2e5;
  border-radius: 10px;
  padding: 18px;
  margin-top: 15px;
 

  button {
    cursor: pointer
    background-color: transparent ;
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.blue[200]};
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;



  label {
    font-size: 16px;
    font-weight: 600;
    color: #0d3b66;
    margin-bottom: 8px;
  }

  input {
    width: 100%;
    font-size: 18px;
    font-weight: 600;
    color: #0d3b66;
    background-color: transparent;
    border: none;
    outline: none;
  }

  img {
    cursor: pointer;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 21px;
  margin-top: 61px;

  .primary {
    color: #ffffff;
    background-color: #0d3b66;
  }

  .secondary {
    color: #0d3b66;
    background-color: #f5f8fa;
  }
`
export const Button = styled.button`
  width: 100%;
  height: 72px;


  font-size: 20px;
  font-weight: 800;
  text-align: center;
  border-radius: 20px;
  padding: 19px auto;
  border: none;
`

export const Error = styled.span`
  display: block;
  font-weight: bold;
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.red[500] };
  margin-top: 4px;

`;

import styled from "styled-components"
import { MapContainer } from 'react-leaflet'

export const ContainerGeoMap = styled.div`
  margin-top: 4.375rem;
  height: 18.5rem;
  width: 100%;
  background: ${({theme}) => theme.colors.blue[400]};
  border-radius: 2rem;

`
export const ContainerMap = styled(MapContainer)`
  width: 100%;
  height: 14.5rem;
  border-radius: 2rem;
`

export const LinkRedirect = styled.a`
  width:  100%;
  display: block;

  color: ${({ theme }) => theme.colors.yellow[400]};
  font-size: ${({theme: {fontSize}}) => fontSize.lg};
  text-decoration: none;
  font-weight: 700;
  text-align: center;
  padding: 20px 0;
`
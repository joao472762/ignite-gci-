import { MapContainer,TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import {User} from '@phosphor-icons/react'


import Leaflet from 'leaflet'
import LocationMapSvg from '../../../../assets/customMarkerIcon.svg'
import { ContainerGeoMap, ContainerMap, LinkRedirect } from './styles'

interface GeoMapProps {
    latitude: number  
    longitude: number 
}

const IconLocationMap = Leaflet.icon({
    iconUrl: LocationMapSvg,
    iconSize: [48, 58],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2],
})


export function GeoMap({ latitude ,longitude }: GeoMapProps){
   
    
    return (
        <ContainerGeoMap>
            <ContainerMap style={{ width: '100%', height: 227 }} center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    
                    attribution='&copy; <a href="">OpenStreetMap</a> contributors'
                    url={`https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=b03a45222f3c4983b87d57a8eb5d2ae3`}
                />
                <Marker
                    icon={IconLocationMap} 
                    position={[latitude, longitude]}
                >
                
                </Marker>
            </ContainerMap>
            <LinkRedirect
                target='_blank'
                href={`https://maps.google.com/?q=${latitude},${longitude}`}
            >
                Ver rotas no Google Maps
            </LinkRedirect>
        </ContainerGeoMap>

    )
}
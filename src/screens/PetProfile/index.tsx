import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";

import { useState } from "react";
import { 
    PetProfileContainer, 
    PetProfileContent, 
    PetPofilePhoto, 
    PetDescription, 
    PetLocation, 
    PetProfileHeader,
    PetProfileContentWrraper,
    AdoptionRequirements,
    SideBar,
    ArrowLeftIcon,
    InfoIcon,
    ContactByWhatsapp, 
} from "./styles";
import DogSvg from '../../assets/dog.svg';
import WhatsAppSvg from '../../assets/whatsapp.svg'

import { api } from "../../libs/axios";
import { GeoMap } from "./components/GeoMap";
import { PetStatusIndicator } from "./components/PetStatusIndicator";
import { PetPhotosSelector } from "./components/PetPhotosSelector";

interface petAdoptionRequirement  {
    id: string;
    title: string;
}

interface petProps {
  
    id: string
    name: string,
    description: string,
    city: string,
    age: string,
    energy: number,
    size: 'small' | 'medium' | 'big',
    independence: 'low'| 'medium' | 'high',
    type: 'cat' | 'dog',
    photo: string,
    orgId: string,
    photo_url: string,
    org: {
        id: string
        cep: string,
        address: string
        whatsappNumber:string
    }
    
}

interface petCoordinatesProps  {
    latitude: string
    longitude: string
}

export function PetProfile(){
    const params = useParams()
    const {id} = params
    const navigate = useNavigate();
    
    const [petPhotoSelected, setPetPhotoSelected] = useState<string>()

    const { data: pet } = useQuery<petProps>(['pet',id], async () => {
        const response = await api.get(`/pets/show/${id}`)
        setPetPhotoSelected(response.data.pet.photo_url)
        return response.data.pet

    })
    const { data: petAdoptionRequirements =[] } = useQuery<petAdoptionRequirement[]>(['petAdoptionRequiments', id], async () => {
        const response = await api.get(`/pets/adoption-requirements/${id}`)
        console.log(response.data.adoption_requirements)
        return response.data.adoption_requirements

    })
    const { data: petCoordinates } = useQuery<petCoordinatesProps | undefined>(['petCoordinates',pet?.org.cep],async() => {
        if(!pet?.org.cep){
            return undefined
        }
        const response = await api.get(`/location/coordinates/${pet?.org.cep}`)
        return response.data.coordinates

    },{
        enabled: !!pet?.org.cep
    })


    const petSizeNumber = {
        'small': 1,
        'medium': 2,
        'big': 3
    }

    function handleGoback(){
        navigate(-1)
    }
    const orgPhoneFormated = pet?.org.whatsappNumber && pet?.org.whatsappNumber.replace('+55','')

    return (
        <PetProfileContainer>
            <SideBar>
                <img
                    src={DogSvg}
                    alt={'desenho do rosto de  um cachoro com a cor branca  e ao lado o nome da empresa findAfrien'}
                />
                <button 
                    title="voltar para tela anterior"
                    onClick={handleGoback}
                >
                    <ArrowLeftIcon />

                </button>
            </SideBar>

            <PetProfileContent>
                <section>
                    <PetProfileHeader>
                        <h1>Seu novo amigo</h1>
                        <div>
                            <PetPofilePhoto src={petPhotoSelected}/>

                        </div>


                    </PetProfileHeader>

                    <PetProfileContentWrraper>
                        <PetPhotosSelector
                            petPhotoSelected={petPhotoSelected}
                            changePetPhotoSelected={setPetPhotoSelected}
                        />
                        <PetDescription>
                            <h2>{pet?.name} </h2>
                            <p>{pet?.description}</p>
                            <div>

                                <PetStatusIndicator 
                                    indicatorsChecked={pet?.energy} 
                                    
                                    type='petEnergy'  
                                    title='Muita energia' 
                                />

                                <PetStatusIndicator
                                    type='environment'
                                    title='Ambiente amplo'
                                />
                                
                                <PetStatusIndicator 
                                    indicatorsChecked={pet ? petSizeNumber[pet.size] : 0} 
                                    size={3} 
                                    type='petSize' 
                                    title='Muita energia' 
                                />
                            </div>



                            
                        </PetDescription>
                        {petCoordinates && (
                            <GeoMap 
                                latitude={Number(petCoordinates.latitude)}
                                longitude={Number(petCoordinates.longitude)}
                            />

                        )}

                        
                        <PetLocation>

                            <div>
                                <img
                                    src={DogSvg}
                                    alt={'desenho do rosto de  um cachoro com a cor branca  e ao lado o nome da empresa findAfrien'}
                                />

                            </div>
                            <div>
                                <strong>Seu Cãopanheiro</strong>
                                <span>{pet?.org.address} </span>
                                <a href={`tel:${pet?.org.whatsappNumber}`}>
                                    <img src={WhatsAppSvg} /> <span>{orgPhoneFormated}</span>
                                </a>
                            </div>
                        </PetLocation>

                        <AdoptionRequirements>
                            <strong>Requesitos para adoção</strong>

                            <ul>
                                {
                                    petAdoptionRequirements.map(requirement => (
                                        <li key={requirement.id}>
                                            <InfoIcon />
                                            <p>{requirement.title}</p>
                                        </li>
                                    ))
                                }
                              
                                
                            </ul>
                        </AdoptionRequirements>

                        <ContactByWhatsapp   >
                            <a
                                href={`whatsapp://send?phone=${pet?.org.whatsappNumber}&text='quero sabe mais sobre o ${pet?.name}'`}

                            >
                            Entrar em contato

                            </a>
                        </ContactByWhatsapp>
                    </PetProfileContentWrraper>


                    
                </section>


            </PetProfileContent>


        </PetProfileContainer>
    )
}
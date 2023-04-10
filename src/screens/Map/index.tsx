import { useQuery } from "react-query";
import { useForm } from "react-hook-form";
import { useState } from "react";
import {useParams,useLocation} from 'react-router-dom'


import { PetCard } from "../../components/PetCard";
import { citysProps } from "../Home/components/CitySelect";
import { SearchButton } from "../../components/SearchButton";
import { PetTypeSelector } from "./components/PetTypeSelect";
import { StateSelector  } from "../../components/StateSelector";
import { SelectControlled } from "../../components/Form/SelectControlled";

import { api } from "../../libs/axios";
import DogSvg from '../../assets/dog.svg'
import { MapFilter, Filters, PetsContainer, PetsList, MapContainer, MapFilterHeader } from './styles'
import { PetAge, PetEnergy, PetIdependence, PetSize } from "../../utils/FilterFormData";
import { queryClient } from "../../libs/react-query";


export interface MapFormProps {
    city: string;
    age: string;
    energy: string;
    independence: string;
    size: string;
}

export interface Pet {
  id: string
  age: string
  energy: number
  independence: string
  name: string
  photo_url: string
  size: string
  type: 'dog' | 'cat'
 
}

type PetTypeFilter = 'dog' | 'cat' | 'all'


export type MapFormArrayTypes = 'energy' | 'age' | 'independence' | 'size' | 'city'

export function Map(){
    const params = useParams()
    const {search} = useLocation()
    const { city: citySelected } = params
    
    
    const queryParams = new URLSearchParams(search);
    const currentStateUf =  queryParams.get('UF')
    
    const [stateUf, setStateUf] = useState(currentStateUf)
    const [petTypeFilter, setPetTypeFilter] = useState<PetTypeFilter>('all')

   
    function savePetListInlocaStorage(peListToSave: Pet[], citySelected: string) {
        const PetsListAndLocale= {
            city: citySelected,
            pets: peListToSave
        }
        const PetsListAndLocaleToLocalStorage = JSON.stringify(PetsListAndLocale)
        
        localStorage.setItem('@igniteGcc:PetsListAndLocale', PetsListAndLocaleToLocalStorage)
    }

    function getPetListInlocaStorage() {
        const petListResponse = localStorage.getItem('@igniteGcc:PetsListAndLocale')
        if (!petListResponse) {
            return 
        }
        return JSON.parse(petListResponse) as  {
            city: string,
            pets: Pet[]
        }
    }

    const { control, handleSubmit,formState} = useForm<MapFormProps>({
        defaultValues: {
            city: citySelected,
            age:  Object.keys(PetAge)[0],
            energy:Object.keys(PetEnergy)[0],
            independence: Object.keys(PetIdependence)[0],
            size: Object.keys(PetSize)[0]
            
        }
    })

    const { data: citys = [] } = useQuery<citysProps>(['stateUf', stateUf], async () => {
      

        const response = await api.get(`/location/citys/${stateUf}`)

        if (!response.data.citys) {
            return []
        }
        return response.data.citys

    }, {
        enabled: !!stateUf
    })

    const { data: petList=[] } = useQuery<Pet[]>(['pets', citySelected], async () => {
        const PetListAndCity = getPetListInlocaStorage()

        if (PetListAndCity?.city === citySelected && PetListAndCity) {
            return PetListAndCity.pets
        }

        const response = await api.get<{pets: Pet[]}>(`/pets/${citySelected}`)
        
        return response.data.pets
    })

   

    
    

    
    async function handleFetchNewPets(formData: MapFormProps ){
        const {age,city,energy,independence,size} = formData
        const queryParams = `age=${age}&energy=${energy}&independence=${independence}&size=${size}`
        const response = await api.get<{ pets: Pet[] }>(`/pets/${city}?${queryParams}`)
         queryClient.setQueryData(['pets', citySelected],response.data.pets,)
        savePetListInlocaStorage(response.data.pets, city)
    }
    

    const petListFiltredByType = petList.filter(pet => {
        if (petTypeFilter === 'all') {
            return pet
        }
        return pet.type === petTypeFilter
    })

    const citysOnlyName = citys.map(city => city.name)

    return (
        <MapContainer>
            <MapFilter onSubmit={handleSubmit(handleFetchNewPets)}>
                <MapFilterHeader>
                    
                    <img
                        src={DogSvg}
                        alt={'desenho do rosto de  um cachoro com a cor branca  e ao lado o nome da empresa findAfrien'}
                    />
                    <div>
                        <StateSelector defaultValue={currentStateUf as string} placeholder={currentStateUf as string} onValueChange={setStateUf} />
                        <SelectControlled 
                            variant="secondary" 
                            dataSet={citysOnlyName}
                            dataSetPlaceholder={citysOnlyName}
                            control={control}
                            name={'city'}
                        />
                        <SearchButton
                            type="submit"
                            style={{ width: '3.75rem', height:'3.75rem'}}
                        />
                        
                    </div>
                </MapFilterHeader>
                <Filters>
              
                      
                    <SelectControlled 
                        name="age"
                        control={control} 
                        label="idade"
                        dataSet={Object.keys(PetAge)}
                        dataSetPlaceholder={Object.values(PetAge)}
                    />
                    <SelectControlled
                        name='energy' 
                        control={control}
                        label="Nível de Energia"
                        dataSet={Object.keys(PetEnergy)} 
                        dataSetPlaceholder={Object.values(PetEnergy)}
                    />
                    <SelectControlled
                        name='size' 
                        control={control}
                        dataSet={Object.keys(PetSize)}
                        dataSetPlaceholder={Object.values(PetSize)}
                        label="Porte do animal"  
                    />
                    <SelectControlled
                        control={control}
                        name='independence'
                        dataSet={Object.keys(PetIdependence)}
                        dataSetPlaceholder={Object.values(PetIdependence)}
                        label="Nível de independência"  
                    />
                    
                </Filters>


            </MapFilter>


            <PetsContainer>
                <header>
                    <p> Encontre <strong>{petListFiltredByType.length} amigos</strong> na sua cidade</p>
                    <PetTypeSelector onValueChange={event => setPetTypeFilter(event as PetTypeFilter )} />
                </header>
                <PetsList>
                    {
                        petListFiltredByType.map(pet => (
                            <PetCard
                                key={pet.id}
                                id={pet.id}
                                imageUrl={pet.photo_url}
                                name={pet.name}
                            />

                        ))
                    }
                   
                    
                </PetsList>
            </PetsContainer>

        </MapContainer>
    )
}


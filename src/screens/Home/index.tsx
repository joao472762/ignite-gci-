import { useState } from 'react';
import {useQuery} from 'react-query'
import { useNavigate} from 'react-router-dom';

import LogoImage from '../../assets/Logo.png'
import IlustrationImage from '../../assets/Ilustration.png'

import { CitySelect, citysProps } from "./components/CitySelect";
import { SearchButton } from '../../components/SearchButton';
import {  StateSelector} from "../../components/StateSelector";

import { api } from '../../libs/axios';


import { 
    Greeting, 
    HomeContainer, 
    HomeFooter, 
    SelectorAdrresContainer,      
    HomeContent,
} from "./styles";


export function Home(){
    const [stateUf, setStateUf] = useState('SP')
    const [citySelected, setCitySelected] = useState<string | undefined>( ) 
    const navigate = useNavigate()
    
    function handleNavigteToMapScreen(){
        if(!citySelected){
            return
        }
        navigate(`/map/${citySelected}?UF=${stateUf}`,)
    }

    const { data: citys = []} = useQuery<citysProps>(['stateUf', stateUf], async () => {

        const response = await api.get(`/location/citys/${stateUf}`)
        
        if (!response.data.citys){
            return []
        }
       
        setCitySelected(response.data.citys[0].name)
        
        return response.data.citys

    }, {
        enabled: !!stateUf
    })


  

    return (
        <HomeContainer>
            <HomeContent>
                <header>
                    <img 
                        src={LogoImage} 
                        alt={'desenho do rosto de  um cachoro com a cor branca  e ao lado o nome da empresa findAfrien'}
                    />
                </header>
                <Greeting>
                    <div>
                        <h1>
                            Leve <br/>
                            a felicidade <br/>
                            para o seu lar
                        </h1>

                    </div>

                    <aside>
                        <img src={IlustrationImage}/>
                    </aside>
                </Greeting>
                <HomeFooter>
                    <p>Encontre o animal de estimação ideal  <br />
                        para seu estilo de vida!
                    </p>
                    <SelectorAdrresContainer>
                        <span>Busque um amigo: </span>
                        <StateSelector defaultValue={stateUf} placeholder={stateUf}  onValueChange={setStateUf}/>
                        <CitySelect  
                            citys={citys}
                            onValueChange={setCitySelected}
                        />

                        
                        <SearchButton
                            role={'link'}
                            onClick={handleNavigteToMapScreen}
                            title="pesquisar" 
                            type="button"
                            style={{marginLeft: '2rem'}}
                        />
                       
                    </SelectorAdrresContainer>



                </HomeFooter>

            </HomeContent>
        </HomeContainer>
    )
}
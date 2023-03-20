import LogoImage from '../../assets/Logo.png'
import IlustrationImage from '../../assets/Ilustration.png'

import { CitySelect, citysProps } from "./components/CitySelector";
import {  StateSelector} from "./components/StateSelector";
import {useQuery} from 'react-query'

import MagnifyingGlass from '../../assets/magnifyingGlass.svg'


import { 
    Greeting, 
    HomeContainer, 
    HomeFooter, 
    SelectorAdrresContainer, 
    SearchButton 
} from "./styles";
import { useEffect, useState } from 'react';
import { api } from '../../libs/axios';




export function Home(){
    const [stateUf, setStateUf] = useState('SP')
    const [cityIsSelected, setCityIsSelected] = useState(false) 
    


    const { data: citys = []} = useQuery<citysProps>(['stateUf', stateUf], async () => {

        const response = await api.get(`/location/citys/${stateUf}`)
        
        if (!response.data.citys){
            return []
        }
        return response.data.citys

    }, {
        enabled: !!stateUf
    })


  

    return (
        <HomeContainer>
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
                    <StateSelector updateState={setStateUf}/>
                    <CitySelect citys={citys}/>
                    <SearchButton title="pesquisar" type="button">
                       <img src={MagnifyingGlass}/>
                    </SearchButton>
                </SelectorAdrresContainer>



            </HomeFooter>
        </HomeContainer>
    )
}
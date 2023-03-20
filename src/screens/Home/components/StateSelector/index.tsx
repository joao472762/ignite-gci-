import * as Select from '@radix-ui/react-select';
import { useEffect, useState } from 'react';
import { api } from '../../../../libs/axios';


import { 
    Icon,
    StateSelectItem,
    StateSelectLabel,
    CitySelectTrigger,
    StateSelectCotent,
    StateSelectViewPort,
 } from './styles';


interface stateProps {
        id: number,
        sigla: string,
        nome: string,
        regiao: {
            id: number,
            sigla: string,
            nome: string
        }
}


interface StateSelectorProps {
    updateState: (UF: string) => void;
}

export function StateSelector({ updateState }: StateSelectorProps){


    const [states, setSatates] = useState<stateProps[]>([])

    async function fetchEstates() {
        const response = await api.get('/location/states')
        setSatates(response.data.states)

    }
    
    
    function handleUpdateState(ufState: string){
        updateState(ufState)
    }
    
    

    useEffect(() => {
        fetchEstates()
    }, [])

    return (
        <Select.Root onValueChange={handleUpdateState}>
            <CitySelectTrigger>
                <Select.Value placeholder={'SP'} defaultValue={'SP'}/>
                    <Icon />
            </CitySelectTrigger>

            <Select.Portal >
                <StateSelectCotent >
                    <Select.ScrollUpButton className="SelectScrollButton">
                       
                    </Select.ScrollUpButton>
                    <StateSelectViewPort >
                        <Select.Group >
                            <StateSelectLabel className="SelectLabel">Estados</StateSelectLabel>
                            {
                                states.map(state => (
                                    <StateSelectItem key={state.id} value={state.sigla}>
                                        <Select.ItemText >{state.sigla}</Select.ItemText>
                                    </StateSelectItem>

                                ))
                            }
                          
                        </Select.Group>
                    </StateSelectViewPort>
                </StateSelectCotent>
            </Select.Portal>
        </Select.Root>
    )
}
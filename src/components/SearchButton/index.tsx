import {ButtonHTMLAttributes} from 'react'
import { SearchButtonContainer } from './styles'
import MagnifyingGlass from '../../assets/magnifyingGlass.svg'

export function SearchButton(props: ButtonHTMLAttributes<HTMLButtonElement>){
    return (
        <SearchButtonContainer {...props}>
            <img src={MagnifyingGlass} />
        </SearchButtonContainer>
    )
}
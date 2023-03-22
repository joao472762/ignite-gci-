import { ResultType } from "@remix-run/router/dist/utils";
import DogSvg from '../../assets/dog.svg';
import { PetCardContainer, PetIcon } from "./styles";

interface PetCardProps{
    name: string,
    id:  string,
    imageUrl: string,
}

export function PetCard({id,imageUrl,name}: PetCardProps){
    return (
        <PetCardContainer>
            <img src={imageUrl} alt="pet" />
            <PetIcon>
                <img src={DogSvg} />
            </PetIcon>
            <strong>{name}</strong>

        </PetCardContainer>
    )
}
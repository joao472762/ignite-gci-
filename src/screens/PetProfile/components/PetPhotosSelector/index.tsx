import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { api } from "../../../../libs/axios";
import { PetPhotosSelectorContainer, PetPhotPreview } from "./styles";

interface petGalleryProps  {
    id: string,
    photo_url: string,
}

interface PetPhotosSelectorProps {
    petPhotoSelected: string | undefined,
    changePetPhotoSelected: (photoSelected: string) => void
}

export function PetPhotosSelector({ petPhotoSelected, changePetPhotoSelected }: PetPhotosSelectorProps ){
    const params = useParams()
    const {id} = params

    const {data: petGallery=[]} = useQuery<petGalleryProps[]>(['petGallery',id], async () => {
        const response = await api.get(`/pets/gallery/${id}`)
        return response.data.pet_gallery
    })

    function handleChangePetPhotoSelected(photoSelected: string){
        changePetPhotoSelected(photoSelected)
    }

    return (
        <PetPhotosSelectorContainer>
           
                {
                    petGallery.map(petPhoto => (
                        <button key={petPhoto.id}>
                            <PetPhotPreview
                                isSelected={petPhotoSelected === petPhoto.photo_url}
                                src={petPhoto.photo_url}
                                onClick={() => handleChangePetPhotoSelected(petPhoto.photo_url)}
                            />

                        </button>
                    ))
                }
          
          
        </PetPhotosSelectorContainer>
    )
}
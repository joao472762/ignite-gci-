import PaperSvg from '../../../../assets/paper.svg'
import { X } from '@phosphor-icons/react'
import { ImagePreviewContainer, RemoveImageButton } from './styles'
interface ImagePreviewProps {
    name: string,
    onDelete: (imageName: string) => void

}
export function ImagePreview({ name, onDelete}: ImagePreviewProps){
    function handleDeleteImage(){
        onDelete(name)
    }
    return (
        <ImagePreviewContainer>
            <div>
                <img src={PaperSvg}/>
                <span>{name}</span>
            </div>
            <RemoveImageButton onClick={handleDeleteImage} type='button'>
                <X/>
            </RemoveImageButton>
        </ImagePreviewContainer>
    )
}
import Dropzone from 'react-dropzone'
import { UploadImagesContainer, UploadImagesBox } from './styles'
import { CloudArrowUp } from '@phosphor-icons/react'

interface UploadImagesProps{
    onUpLoadImages: (files: File[]) => void
}

export function UploadImages({onUpLoadImages }: UploadImagesProps){
    function handleUploadImages(files: File[]) {
        onUpLoadImages(files)
    }

    return (
        <Dropzone onDrop={acceptedFiles => handleUploadImages(acceptedFiles)}>
            {({ getRootProps, getInputProps, }) => (

                <UploadImagesContainer {...getRootProps()}>
                    <input type='file' accept='images/*' {...getInputProps()} onChange={() => console.log('oi')} />
                    <UploadImagesBox >
                        <CloudArrowUp />
                        <span>Arraste e solte o arquivo</span>
                    </UploadImagesBox>
                </UploadImagesContainer>

            )}
        </Dropzone>
    )
}
import { Plus } from '@phosphor-icons/react'
import Dropzone from 'react-dropzone'
import {HTMLAttributes} from 'react'
import { UploadImagesButtonContainer } from './styles'

interface UploadImagesButtonPorps extends HTMLAttributes<HTMLDivElement>{
    onUpLoadImages: (files: File[]) => void
}

export function UploadImagesButton({ onUpLoadImages,...rest}: UploadImagesButtonPorps){
    function handleUploadImages(files: File[]) {
        onUpLoadImages(files)
    }
    return (
        <Dropzone onDrop={acceptedFiles => handleUploadImages(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
                <UploadImagesButtonContainer {...getRootProps()} {...rest}>
                    <input {...getInputProps()} />
                    <Plus/>
                </UploadImagesButtonContainer>
            )}
    
        </Dropzone>

    )
}
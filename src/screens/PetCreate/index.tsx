import DogSvg from '../../assets/dog.svg'
import {SignOut} from '@phosphor-icons/react' 
import { 
    PetCreateContainer, 
    PetCreateHeader, 
    PetLocation, 
    PetCreateForm, 
    PetIconWrapper,
    SignOutButton,
    PetTextFields,
    UploadPhotos,
    UploadPhotosBox,
    PhotosPeview,
 } from './styles'
import { TextInput } from '../../components/Form/TextInput'
import { TextArea } from '../../components/Form/TextArea'
import { Select } from './components/Select'
import { PetAge, PetEnergy, PetIdependence, PetIndependeceWithDescription, PetSize } from '../../utils/FilterFormData'
import { ChangeEvent, ChangeEventHandler, useState } from 'react'
import {CloudArrowUp} from '@phosphor-icons/react'
import { ImagePreview } from './components/ImagePreview'

import Dropzone from 'react-dropzone'

import { UploadImagesButton } from './components/UploadImagesButton'
import { UploadImages } from './components/UploadImages'


export function PetCreate(){
    const [files,setFiles] = useState<File[]>([])

    function handleUploadPhotos(newFiles: File[] ){
        const filesToUpdated = [...newFiles,...files].slice(0,5)
        setFiles(filesToUpdated)
    }

    function deleteOneFile(fileName: string){
        const filesWithouOneFile = files.filter(file => file.name !== fileName)
        setFiles(filesWithouOneFile)
    }

    return (
        <PetCreateContainer>
            <PetCreateHeader>
                <PetIconWrapper>
                    <img
                        src={DogSvg}
                        alt={'desenho do rosto de  um cachoro com a cor branca  e ao lado o nome da empresa findAfrien'}
                    />
                </PetIconWrapper>
                <PetLocation>
                    <h1>Seu Cãopanheiro</h1>
                    <p>Rua do meio, 123 , Boa viagem, Recife - PE </p>
                </PetLocation>
                <SignOutButton>
                    <SignOut weight='bold'/>
                </SignOutButton>
            </PetCreateHeader>


            <PetCreateForm>
               <PetTextFields>
                    <TextInput
                        label='Nome'
                        
                        placeholder='digite o seu Nome' 
                    />
                    <TextArea
                        label='Sobre'
                        maxLength={300}
                        
                        onChange={event => console.log(event.target.value.length)}
                        placeholder='Fale Sobre o Pet'
                    />
                    <Select
                        name="age"
                        
                        label="idade"
                        dataSet={Object.keys(PetAge)}
                        dataSetPlaceholder={Object.values(PetAge)}
                    />
       
                    <Select
                        name='energy'

                        label="Porte"
                        dataSet={Object.keys(PetSize)}
                        dataSetPlaceholder={Object.values(PetSize)}
                    />
                    <Select
                        name='energy'
                       
                        label="Nível de Energia"
                        dataSet={Object.keys(PetEnergy)}
                        dataSetPlaceholder={Object.values(PetEnergy)}
                    />

                    <Select
                        name='energy'

                        label="Nível de independência"
                        dataSet={Object.keys(PetIndependeceWithDescription)}
                        dataSetPlaceholder={Object.values(PetIndependeceWithDescription)}
                    />
                    
                    

               </PetTextFields>
               <section>
                    <UploadImages onUpLoadImages={handleUploadPhotos}/>

                <PhotosPeview>
                        {files.map(file => (
                            <ImagePreview
                            name={file.name}
                            key={file.name}
                            onDelete={deleteOneFile}
                            />
                            ))}
                </PhotosPeview>

                <UploadImagesButton 
                        onUpLoadImages={handleUploadPhotos}
                        style={{marginTop:'2.5rem'}}
                />

               </section>

               


            </PetCreateForm>
        </PetCreateContainer>
    )
}
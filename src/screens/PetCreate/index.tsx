import DogSvg from '../../assets/dog.svg'
import {Plus, SignOut, X} from '@phosphor-icons/react' 
import { 
    PetCreateContainer, 
    PetCreateHeader, 
    PetLocation, 
    PetCreateForm, 
    PetIconWrapper,
    SignOutButton,
    PetTextFields,
   
    PhotosPeview,
    AdoptiontsRequirementsWrrapper,
    AdoptiontsRequirements,
    Requirement,
    RemoveRequirimentButton,
    AddNewRequireimentButton,
    RequirimentError,
 } from './styles'
import { TextInput } from '../../components/Form/TextInput'
import { TextArea } from '../../components/Form/TextArea'
import { Select } from './components/Select'
import { PetAge, PetEnergy, PetIdependence, PetIndependeceWithDescription, PetSize, PetType } from '../../utils/FilterFormData'
import { useState } from 'react'
import { ImagePreview } from './components/ImagePreview'
import { useFieldArray, useForm } from 'react-hook-form'


import { UploadImagesButton } from './components/UploadImagesButton'
import { UploadImages } from './components/UploadImages'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { SelectControlled } from './components/Form/SelectControlled'
import { api } from '../../libs/axios'
import { useAuth } from '../../hook/useAtuh'

const CreatePetFormSchema =  z.object({
    name: z.string().nonempty('Digite o Nome Do pet.'),
    description: z.string().
        min(5, 'A descrição deve ter pelo menos 5 letras'),
    age: z.string(),
    size: z.string(),
    energy: z.string(),
    independence: z.string(),
    type: z.string(),
    requiriments: z.array(z.object({
        requirement: z.string().nonempty('O campo de requisto não pode ficar vazío'),
    }))

})

export type CreatePetFormSchemaData = z.infer<typeof CreatePetFormSchema>
export type CreatePetFormArrayTypes = 'energy' | 'age' | 'independence' | 'size' | 'type'


export function PetCreate(){
    const [files,setFiles] = useState<File[]>([])
    const {org} = useAuth()

    const { handleSubmit,register , control, formState, watch,  getFieldState} = useForm<CreatePetFormSchemaData>({
        resolver: zodResolver(CreatePetFormSchema),
        defaultValues: {
            requiriments: [{requirement: ''}],
            age: Object.keys(PetAge)[0],
            energy: Object.keys(PetEnergy)[0],
            independence: Object.keys(PetIdependence)[0],
            type: Object.keys(PetType)[0],
            size: Object.keys(PetSize)[0]
        }
    })
    const {isSubmitting, errors} = formState

    function handleUploadPhotos(newFiles: File[] ){
        const filesToUpdated = [...newFiles,...files].slice(0,5)
        setFiles(filesToUpdated)
    }

    function deleteOneFile(fileName: string){
        const filesWithouOneFile = files.filter(file => file.name !== fileName)
        setFiles(filesWithouOneFile)
    }

    const {append,fields:requirimentsList,remove } = useFieldArray({
        name: 'requiriments',
        control: control
    })

    function handleAddNewRequirement(){
        append({requirement:''})
    }

    function handleRemoveRequirement(requirimentIndex: number){
        remove(requirimentIndex)
    }

    async function handleCreateNewPet(createPetForm: CreatePetFormSchemaData ) {
        try {
            const formData = new FormData()
    
            formData.append('name', createPetForm.name)
            formData.append('age', createPetForm.age)
            formData.append('size', createPetForm.size)
            formData.append('description', createPetForm.description)
            formData.append('energy', createPetForm.energy)
            formData.append('independence', createPetForm.independence)
            formData.append('type', createPetForm.type)
            formData.append(
                'adoptionRequirements',
                JSON.stringify(
                    createPetForm.requiriments.map((item) => item.requirement),
                ),
            )
    
            files.forEach((file) => {
                formData.append('images', file!)
            })
            await api.post('/pets', formData)
            
        } catch (error) {
            alert('houve algun erro')
        }
     
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
                    <p>{org.address}</p>
                </PetLocation>
                <SignOutButton>
                    <SignOut weight='bold'/>
                </SignOutButton>
            </PetCreateHeader>


            <PetCreateForm onSubmit={handleSubmit(handleCreateNewPet)}> 
               <PetTextFields>
                    <TextInput
                        label='Nome'
                        {...register('name')}
                        placeholder='digite o seu Nome'
                        error={errors.name?.message}

                    />
                    <TextArea
                        label='Sobre'
                        maxLength={300}
                        {...register('description')}
                        placeholder='Fale Sobre o Pet'
                        error={errors.description?.message}
                    />

                    <SelectControlled
                        control={control}
                        name="age"
                        label="idade"
                        dataSet={Object.keys(PetAge)}
                        dataSetPlaceholder={Object.values(PetAge)}
                    />
       
                    <SelectControlled
                        name='size'
                        control={control}
                        label="Porte"
                        dataSet={Object.keys(PetSize)}
                        dataSetPlaceholder={Object.values(PetSize)}
                    />
                    <SelectControlled
                        name='energy'
                        control={control}
                        label="Nível de Energia"
                        dataSet={Object.keys(PetEnergy)}
                        dataSetPlaceholder={Object.values(PetEnergy)}
                    />

                    <SelectControlled
                        name='independence'
                        control={control}
                        label="Nível de independência"
                        dataSet={Object.keys(PetIndependeceWithDescription)}
                        dataSetPlaceholder={Object.values(PetIndependeceWithDescription)}
                    />

                    <SelectControlled
                        name='type'
                        control={control}
                        label="Nível de independência"
                        dataSet={Object.keys(PetType)}
                        dataSetPlaceholder={Object.values(PetType)}
                    /> 
                    
               </PetTextFields>
               <section>
                    <UploadImages onUpLoadImages={handleUploadPhotos}/>

                    <PhotosPeview>
                            {files.map(file => (
                                <ImagePreview
                                    key={file.name}
                                    name={file.name}
                                 
                                    onDelete={deleteOneFile}
                                />
                                ))}
                    </PhotosPeview>

                    <UploadImagesButton 
                            onUpLoadImages={handleUploadPhotos}
                            style={{marginTop:'2.5rem'}}
                    />

               </section>

               <AdoptiontsRequirementsWrrapper>
                    <h2>Requesitos para adoção</h2>
                    <AdoptiontsRequirements>
                        {requirimentsList.map((requiriment, index) => (
                            <Requirement key={requiriment.id}>
                                <label htmlFor={requiriment.id}>
                                    Requisito
                                </label>
                                <div>
                                    <input
                                        id={requiriment.id}
                                        placeholder='Defina um requisito|'
                                        {...register(`requiriments.${index}.requirement`)}
                                    />
                                    <RemoveRequirimentButton 
                                        onClick={() =>  handleRemoveRequirement(index)}  
                                        type='button'
                                    >
                                        <X />
                                    </RemoveRequirimentButton>

                                </div>
                                {
                                    errors.requiriments?.[index]?.requirement && (
                                        <RequirimentError>{errors.requiriments?.[index]?.requirement?.message}</RequirimentError>
                                    )
                                    
                                }


                            </Requirement>
                        ))}
                        
                    </AdoptiontsRequirements>

                    <AddNewRequireimentButton onClick={handleAddNewRequirement}>
                        <Plus/>
                    </AddNewRequireimentButton>

               </AdoptiontsRequirementsWrrapper>

               

                <button type='submit'>Confirmar</button>
            </PetCreateForm>
        </PetCreateContainer>
    )
}
import * as z from 'zod'
import { IMaskInput } from 'react-imask'
import { Link } from 'react-router-dom'
import {  TileLayer } from 'react-leaflet'
import { useEffect, useState } from 'react'
import { useForm, Controller} from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Logo from '../../assets/Logo.png'
import Ilustration from '../../assets/Ilustration.png'

import { api } from '../../libs/axios'
import { useAuth } from '../../hook/useAtuh'
import { AppError } from '../../utils/AppError'
import { PasswordRegex } from '../../utils/Regex'

import {
  Wrapper,
  Container,
  Card,
  FormWrapper,
  Form,
  InputWrapper,
  Buttons,
  Button,
  Error,
  ContainerMap,
  MapWrapper,
} from './styles'
import { TextInput } from '../../components/Form/TextInput'
import { TextInputPassword } from '../../components/Form/TextInputPassword'

const { passwordErrorMessage, Regex: passwordRegex } = PasswordRegex

const RegisterFormSchema = z.object({
  name: z.string().min(4, 'Nome Precisa de 4 ou mais letras'),
  email: z.string().email('Digite um email válido'),
  cep: z.string(),
  phone_number: z.string().transform(phone => phone.replace(/[()-\s]+/g, '')),
  address: z.string(),
  password: z.string().regex(passwordRegex,passwordErrorMessage),
  confirm_password: z.string(),
}).superRefine((schemaData, context) => {
  if (schemaData.password !== schemaData.confirm_password) {
    context.addIssue({
      code: z.ZodIssueCode.custom,
      path: ["confirm_password"],
      message: "Confirme a Senha",
    })
  }
})

interface CordinatesProps {
  latitude: number
  longitude: number
}

interface LocalizationProps {
  coordinates: CordinatesProps,
  address: string
}

type RegisterFormSchemaData = z.infer<typeof RegisterFormSchema>

export function Register() {
  const {sign}  = useAuth()

  const { formState, control, register, handleSubmit,watch, setValue} = useForm<RegisterFormSchemaData>({
    resolver: zodResolver(RegisterFormSchema)
  })

  const [cordinates,setCondinatesProps] = useState<CordinatesProps>()
  const { errors, isSubmitting} = formState


  async function handleRegisterOrganization(formData: RegisterFormSchemaData) {
    
    try {
      await api.post('/orgs',{
        name: formData.name,
        email: formData.email,
        cep: formData.cep,
        address: formData.address,
        whatsappNumber: formData.phone_number,
        password: formData.password,
        passwordConfirm: formData.confirm_password 
  
      })

      await sign(formData.email, formData.password)

    }
    catch(error) {
    
      const isAppError = error instanceof AppError
      alert(isAppError? error.error : 'Algun Probelma ao cadastrar a a org , tente novamente mais tarde')
    }
  }


  const [cep] = watch(['cep'])


  async function fetchLocation(){
    if(!cep || cep.length < 9) return ;

    const response = await api.get<LocalizationProps>(`/location/coordinates/${cep}`)
    if(!response.data.coordinates.latitude) return;
    setValue('address', response.data.address)
    setCondinatesProps(response.data.coordinates)
  }


  useEffect(() => {
    fetchLocation()
  }, [cep])

  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={Logo} className="logo" alt="" />
          <img src={Ilustration} alt="" />
        </Card>
        <FormWrapper>
          <h1>Cadastre sua organização</h1>
          <Form onSubmit={handleSubmit(handleRegisterOrganization)}>
            
              <TextInput
                label="Nome"
                placeholder='Seu nome'
                {...register('name')}
                error= {errors.name && errors.name.message}
              />

            <TextInput
              {...register('email')}
              type="email"
              placeholder="mayk@email.com"
              label='Email'
              error={errors.email && errors.email.message}
            />

            <div>
              <label htmlFor="cep">Cep</label>
              <InputWrapper>
                <Controller
                  control={control}
                  name='cep'
                  render={({field: {onChange,value}}) => (
                    <IMaskInput
                      id='cep'
                    
                      placeholder='00000-000'
                      mask={'00000{-}000'}
                      
                      onAccept={(ImaskValue) => onChange(ImaskValue)}
                      
                    />
                  )}
                
                />
          
              </InputWrapper>
              {errors.cep && <Error>{errors.cep.message}</Error>}
            </div>

            <TextInput
              {...register('address')}
              placeholder="Rua do Meio, 1825"
              label='Endereço'
              error={errors.address && errors.address.message}
            />

            {cordinates && (
              <MapWrapper>
                <ContainerMap style={{ width: '100%', height: 227 }} center={[cordinates.latitude,cordinates.longitude]} zoom={13} scrollWheelZoom={false}>
                  <TileLayer

                    attribution='&copy; <a href="">OpenStreetMap</a> contributors'
                    url={`https://maps.geoapify.com/v1/tile/positron/{z}/{x}/{y}.png?&apiKey=b03a45222f3c4983b87d57a8eb5d2ae3`}
                  />
          
                </ContainerMap>
              </MapWrapper>
            )}

            <div>
              <label htmlFor="contact">Whatsapp</label>
              <InputWrapper>
                <Controller
                  control={control}
                  name='phone_number'
                  render={({ field: { onChange, value } }) => (
                    <IMaskInput
                      id='contact'
                      
                      placeholder='+55 (00) 00000-0000'
                      mask={'+55 (00) 00000{-}0000 '}
                      onAccept={(ImakValue) => { onChange(ImakValue )}}

                    />
                  )}

                />
              </InputWrapper>
              {errors.phone_number && <Error>{errors.phone_number.message}</Error>}
            </div>
            <TextInputPassword
              label={'Senha'}
              placeholder="Senha"
              error={errors.password && errors.password.message}
              {...register('password')}
            
            />

            <TextInputPassword
              label={'Confirmar senha'}
              placeholder="Confirme sua Senha"
              {...register('confirm_password')}
              error={errors.password && errors.password.message}
            />
            
            <footer>
              <Buttons>
                <Button 
                  type="submit" 
                  onClick={() => {}} 
                  className="primary"
                  disabled={isSubmitting}
                >
                  Cadastrar
                </Button>
              </Buttons>

            <Link to={'/login'}> Já possui conta?</Link>

            </footer>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}
//293 lines
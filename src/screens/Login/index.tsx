import { z } from 'zod'
import { useForm  } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { zodResolver } from '@hookform/resolvers/zod'

import Logo from '../../assets/Logo.png'
import Eye from '../../assets/password-eye.svg'

import { AppError } from '../../utils/AppError'
import { useAuth } from '../../hook/useAtuh'
import Ilustration from '../../assets/Ilustration.png'

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
} from './styles'
import { TextInput } from '../../components/Form/TextInput'
import { TextInputPassword } from '../../components/Form/TextInputPassword'



const LoginFormSchema = z.object({
  email: z.string().email('Digite um email válido').toLowerCase(),
  password: z.string().min(1,'Digte a senha')
})

type LoginFormDataSchema = z.infer<typeof LoginFormSchema>

export function Login() {
  const {sign} = useAuth()
  const navigate = useNavigate()
  const { register, formState, handleSubmit } = useForm<LoginFormDataSchema>({
    resolver: zodResolver(LoginFormSchema)
  })
  const { errors, isSubmitting} = formState

  async function handleLogin(formData: LoginFormDataSchema) {
    try {
      const {email,password} = formData
      await sign(email, password)
      navigate('/petCreate')
    
    } catch (error) {
      const isAppError = error instanceof AppError
      alert(isAppError ? error.error : 'Erro au Autenticar, por favor tente novamente mais tarde')


    }
  }





  return (
    <Wrapper>
      <Container>
        <Card>
          <img src={Logo} className="logo" alt="" />
          <img src={Ilustration} alt="" />
        </Card>
        <FormWrapper>
          <h1>Boas-vindas!</h1>
          <Form onSubmit={handleSubmit(handleLogin)}>
           
      
            <TextInput
              type="email"
              label='Email'
              placeholder="Digite o seu Email"
              error={errors.email && errors.email.message}
              {...register('email')}
            />
           
            <TextInputPassword
              placeholder="Senha"
              label='Senha'
              error={errors.password && errors.password.message}
              {...register('password')}
            />
            

            

            <Buttons>
              <Button type="submit"  className="primary">
                Login
              </Button>
              <Button 
                role='navigation' 
                disabled={isSubmitting}
                type="button" 
                className="secondary"
              >
                Cadastrar minha organização
              </Button>
            </Buttons>
          </Form>
        </FormWrapper>
      </Container>
    </Wrapper>
  )
}

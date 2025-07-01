import { useNavigate, Link } from "react-router-dom";
import { MdEmail, MdLock } from 'react-icons/md'
import { FaUser } from "react-icons/fa"
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { api } from '../../services/api';

import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import {
    Container,
    Title,
    Column,
    TitleLogin,
    SubtitleLogin,
    Text,
    Row,
    Wrapper
} from './styles';

const schema = yup.object({
    name: yup.string().required('Nome é obrigatório'),
    email: yup.string().email('E-mail inválido').required('E-mail é obrigatório'),
    senha: yup.string().min(6, 'Senha deve ter no mínimo 6 caracteres').required('Senha é obrigatória'),
});

const SignUp = () => {

    const navigate = useNavigate()

    const { control, handleSubmit, formState: { errors } } = useForm({
        reValidateMode: 'onChange',
        mode: 'onChange',
        resolver: yupResolver(schema)
    });

    const onSubmit = async (formData) => {
        try {
            const { status } = await api.post(`/users`, formData);

            if (status === 201) {
                navigate('/feed')
                return
            }

            alert('Usuário ou senha inválido')
        } catch (e) {
            //TODO: HOUVE UM ERRO
        }
    };

    console.log('errors', errors);

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                    e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                    <TitleLogin>Comece agora grátis</TitleLogin>
                    <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Input 
                            placeholder="Nome completo" 
                            leftIcon={<FaUser />} 
                            name="name" 
                            control={control} 
                            errorMessage={errors?.name?.message}
                        />
                        <Input 
                            placeholder="E-mail" 
                            leftIcon={<MdEmail />} 
                            name="email" 
                            control={control} 
                            errorMessage={errors?.email?.message}
                        />
                        <Input 
                            type="password" 
                            placeholder="Senha" 
                            leftIcon={<MdLock />} 
                            name="senha" 
                            control={control} 
                            errorMessage={errors?.senha?.message}
                        />
                        <Button title="Criar minha conta" variant="secondary" type="submit" />
                    </form>
                    <Row>
                        <Text>
                            Ao clicar em "criar minha conta", declaro que
                            aceito as Políticas de Privacidade e os Termos de Uso da DIO.
                        </Text>
                    </Row>
                    <Row>
                        <Text size={14}>
                            <strong>Já tenho conta. </strong>
                            <Link to={'/login'} style={{
                                color: '#23DD7A',
                                fontWeight: 700,
                                textDecoration: 'none'
                            }}>
                                Fazer Login
                            </Link>
                        </Text>
                    </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { SignUp }
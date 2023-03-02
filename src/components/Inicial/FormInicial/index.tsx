import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuth } from '../../../contexts/auth';
import { getFirebaseResponseMessage } from '../../../enums/FirebaseErrorEnum';
import { useFocus } from '../../../hooks/useFocus';
import useValidacaoLogin from '../../../hooks/useValidacaoLogin';
import ConfirmationButton from '../../Common/ConfirmationButton';
import Input from '../../Common/Input';
import Wrapper from '../../Common/Wrapper';
import InitialLoading from '../InitialLoading';
import * as C from './styles';

interface ErrorFlagType {
    type: 'email' | 'password' | undefined;
    message: string;
}

function FormInicial() {

    const { loading } = useAuth();
    const [emailRef, setEmailsFocus] = useFocus()
    const [pwRef, setPWFocus] = useFocus()

    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [errorFlag, setErrorFlag] = React.useState<ErrorFlagType>();

    const { signIn, error } = useAuth();
    const navigate = useNavigate();
    const { validarLogin } = useValidacaoLogin();

    const goFocus = (type: 'email' | 'password') => {
        if (type === 'email') {
            setEmailsFocus();
        } else {
            setPWFocus();
        }
    }

    React.useEffect(() => {
        if (error) {
            console.log(error.code)
            const err = getFirebaseResponseMessage(error.code as keyof typeof getFirebaseResponseMessage);
            if (error.code === "auth/user-not-found") {
                goFocus("email");
                setErrorFlag({
                    type: 'email',
                    message: err || 'Email inválido'
                })
            } else if (error.code === "auth/wrong-password") {
                goFocus("password");
                setErrorFlag({
                    type: 'password',
                    message: err || 'Senha inválida'
                })
            }else{
                toast.error(err || 'Erro desconhecido');
                setErrorFlag({
                    type: undefined,
                    message: err + " Tente novamente mais tarde." 
                })
            }
        }
    }, [error])

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e: any) => {
        setPassword(e.target.value);
    }

    const onSubmit = async (email: string, password: string) => {
        await signIn(email, password);
        navigate('/');
    }

    const handleConfirmation = (e: any) => {
        e.preventDefault();

        validarLogin({ email: { value: email, focuser: setEmailsFocus }, senha: { value: password, focuser: setPWFocus } })
            .then(() => onSubmit(email, password))
            .catch(setErrorFlag)
    }

    if (loading)
        return <InitialLoading />

    return (
        <Wrapper>
            <C.Title>Fome de Gol</C.Title>
            <C.Subtitle>Aproveite cada lance. Aproveite cada lanche.</C.Subtitle>
            {errorFlag && <C.ErrorMessage>{errorFlag.message}</C.ErrorMessage>}
            <C.InputWrapper autoComplete="nope">
                <Input autoComplete="nope" forwardedRef={emailRef} type="text" placeholder='Usuário ou Email' value={email} onChange={handleEmailChange} error={errorFlag && errorFlag.type === "email"} />
                <Input forwardedRef={pwRef} type="password" placeholder='Senha' value={password} onChange={handlePasswordChange} error={errorFlag && errorFlag.type === "password"} />
            </C.InputWrapper>
            <C.ForgotPassword>Esqueceu a senha?</C.ForgotPassword>
            <C.CenterWrapper>
                <ConfirmationButton text={'Entrar'} onClick={handleConfirmation} />
                <C.CreateAccount>Crie uma Conta</C.CreateAccount>
            </C.CenterWrapper>
        </Wrapper>
    );
}

export default FormInicial;

import { validaFormatoEmail } from "../utils/ValidacaoCamposUtils";

const CARACTERES_MINIMOS_SENHA = 6;

interface ValidacaoLoginParams {
    email: {
        value: string;
        focuser: () => void;
    };
    senha: {
        value: string;
        focuser: () => void;
    }
}

const useValidacaoLogin = () => {
    

    const validarLogin = (params: ValidacaoLoginParams) => {

        const { email, senha } = params;

        return new Promise<void>((resolve, reject) => {
            if(email === undefined || email.value === ''){
                email.focuser();
                reject({
                    type: 'email',
                    message: 'Email não pode ser vazio'
                });
            }else if(!validaFormatoEmail(email.value)){
                email.focuser();
                reject({
                    type: 'email',
                    message: 'Formato de Email inválido'
                });
            }else if(senha === undefined || senha.value === ''){
                senha.focuser();
                reject({
                    type: 'password',
                    message: 'Senha não pode ser vazia'
                });
            }else if(senha.value.length < CARACTERES_MINIMOS_SENHA){
                senha.focuser();
                reject({
                    type: 'password',
                    message: `Senha deve ter no mínimo ${CARACTERES_MINIMOS_SENHA} caracteres`
                });
            }else{
                resolve();
            }
        })
    }

    return {
        validarLogin
    }

}

export default useValidacaoLogin;
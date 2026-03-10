import { cadastroEvents } from "../components/form/teste-events";
import { AuthLayout } from "../layouts/auth-layout";
import { Teste } from '@/components/form/teste';

export function SignUp() {

    return AuthLayout(`

        ${Teste()}
    `,
        'Cadastre sua organzação!'

    )
}

export function initSignUp(){

    cadastroEvents()

}
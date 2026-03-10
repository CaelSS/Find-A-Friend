import { Form } from '@/components/form/form';
import { formEvents } from '@/components/form/form-events';
import { AuthLayout } from '../layouts/auth-layout';

export function SignIn() {
  return AuthLayout(`
        ${Form()}
  `,
    "Boas vindas!");
}

export function initSignIn() {
  formEvents();
}

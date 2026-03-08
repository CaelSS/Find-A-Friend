import { Form } from '@/components/form/form';
import { formEvents } from '@/components/form/form-events';

export function SignIn() {
  return `
    <section class="containers">
      <div class="marca">
        <div class="logo">
          <img src="../img/logo.svg" alt="Logo com img escrito FIND A FRIEND" />
          <h1>FindAFriend</h1>
        </div>
        <div class="dogs">
          <img src="../img/dogsRighSide.svg" alt="Varios cachorros animados" />
        </div>
      </div>

      <div class="forms">
        <h2 class="titulo2">Boas-vindas!</h2>
        ${Form()}
      </div>
    </section>
    `;
}

export function initSignIn() {
  formEvents();
}

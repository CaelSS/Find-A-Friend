import { Input } from '../input.js';
import { Button } from '../button.js';

export function Form() {
  return `
    <form id="form-login">
      ${Input({
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'email@email.com',
      })}
      
      ${Input({
        id: 'password',
        type: 'password',
        label: 'Senha',
        name: 'password',
        placeholder: '*******',
      })}

      <div class="buttons">
        ${Button({
          text: 'Login',
        })}

        ${Button({
          text: 'Cadastrar minha organzação',
        })}
      </div>
    </form>
  `;
}

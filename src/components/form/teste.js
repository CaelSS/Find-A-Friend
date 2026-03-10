import { Input } from '../input.js';
import { Button } from '../button.js';

export function Teste() {
    return `
    <form id="cadastroOrgs">
     ${Input({
        id: 'nome',
        type: 'text',
        label: 'Nome do responsável',
        name: 'name',
        placeholder: 'Antônio Bandeira',
    })}

    ${Input({
        id: 'email',
        type: 'email',
        label: 'Email',
        name: 'email',
        placeholder: 'nome@email.com',
    })}

    ${Input({
        id: 'cep',
        type: 'text',
        label: 'CEP',
        name: 'cep',
        placeholder: '13254-000',
    })}

        ${Input({
        id: 'endereco',
        type: 'text',
        label: 'Endereço',
        name: 'endereco',
        placeholder: 'rua do meio',
    })}

    ${Input({
        id: 'whatsapp',
        type: 'tel',
        label: 'Whatsapp',
        name: 'whatsapp',
        placeholder: '81 91234.5678',
    })}

    ${Input({
        id: 'senha',
        type: 'password',
        label: 'Senha',
        name: 'senha',
        placeholder: 'Digite sua senha',
    })}

    ${Input({
        id: 'confirmar_senha',
        type: 'password',
        label: 'Confirmar senha',
        name: 'confirmar_senha',
        placeholder: 'Digite novamente sua senha',
    })}

      <div class="buttons">
        ${Button({
        text: 'Cadastrar',
        className: 'botao',
        size: "small",
    })}

        ${Button({
        text: 'Ja possui conta?!',
        className: 'botao',
        size: "large",
    })}

    <button type="submit">Submit</button>
      </div>
    </form>
  `;
}


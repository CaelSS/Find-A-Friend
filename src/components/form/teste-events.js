import { axios } from '@/services/axios.js';

export function cadastroEvents() {
  const form = document.getElementById('cadastroOrgs');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      name: form.elements['name'].value,
      email: form.elements['email'].value,
      cep: form.elements['cep'].value,
      address: form.elements['endereco'].value,
      whatsapp_number: form.elements['whatsapp'].value,
      password: form.elements['senha'].value,
    //   password_confirmation: form.elements['confirmar_senha'].value,
    };

    try {
      const response = await axios.post('/orgs', data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  });
}
import { axios } from '@/services/axios.js';

async function createOrg() {
  const response = await axios.post('/orgs', {
    name: 'Org tabajara',
    email: 'tabajara@email.com',
    password: 'senha123',
    cep: '78096-014',
    address: 'Rua Quatro Residencial Jardim Pauliceia Cuiabá - MT',
    whatsapp_number: '5521988887777',
  });

  console.log(response);
}

document.getElementById('create-org').addEventListener('click', createOrg);

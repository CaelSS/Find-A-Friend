import { axios } from '@/services/axios.js';

export function formEvents() {
  const form = document.getElementById('form-login');

  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const data = {
      email: form.elements['email'].value,
      password: form.elements['password'].value,
    };

    try {
      const response = await axios.post('/orgs/session', data);

      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  });
}

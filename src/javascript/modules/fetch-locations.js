import { axios } from '@/services/axios.js';

export function fetchLocations(url, { selectUf, selectCity }) {
  async function fetchUfs() {
    const response = await axios.get(`${url}/estados?orderBy=nome`);

    selectUf.innerHTML = '';

    response.data.forEach((uf) => {
      const option = document.createElement('option');
      option.value = uf.sigla;
      option.textContent = uf.sigla;

      selectUf.appendChild(option);
    });

    await fetchCities();
  }

  async function fetchCities() {
    const uf = selectUf.value;

    const response = await axios.get(
      `${url}/estados/${uf}/municipios?orderBy=nome`
    );

    selectCity.innerHTML = '<option value="">Selecione a cidade</option>';

    response.data.forEach((city) => {
      const option = document.createElement('option');
      option.value = city.nome;
      option.textContent = city.nome;
      selectCity.appendChild(option);
    });
  }

  selectUf.addEventListener('change', fetchCities);

  fetchUfs();
}

import { fetchLocations } from './modules/fetch-locations';

fetchLocations('https://servicodados.ibge.gov.br/api/v1/localidades', {
  selectUf: document.getElementById('select-uf'),
  selectCity: document.getElementById('select-city'),
});

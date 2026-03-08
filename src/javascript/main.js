// este script aqui tu carrega ele no index.html, então ele irá centralizar os scripts que serão usado no projeto
// para evitar que fique chamando vários scripts no index.html
import { initRouter } from '../routes/router';
import { fetchLocations } from './modules/fetch-locations';

initRouter();

// aqui eu chamo a função "fetchLocations" que estou importando acima
// passo pra ela o endereço da api do IBGE, no primeiro parametro, e no segundo parametro eu passo
// os elementos (select) do html, dentro de um objeto, contendo chave e valor, as chaves são "selectUf, selectCity"
// e os valores são os elementos html
// da um ctrl + click na função "fetchLocations" que o vscode te manda pra ela pra tu entender ela melhor

fetchLocations('https://servicodados.ibge.gov.br/api/v1/localidades', {
  selectUf: document.getElementById('select-uf'),
  selectCity: document.getElementById('select-city'),
});

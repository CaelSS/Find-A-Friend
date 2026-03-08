import { axios } from '@/services/axios.js';

// aqui eu recebo a url, e o objeto com os elementos (select)
// crio a fetchUfs para lidar com a requisição dos estados
// e crio fetchCities para lidar com a requisição das cidades
export function fetchLocations(url, { selectUf, selectCity }) {
  if (!selectUf || !selectCity) {
    return;
  }

  async function fetchUfs() {
    const response = await axios.get(`${url}/estados?orderBy=nome`); // crio a variavel response para armazenar a resposta da api

    selectUf.innerHTML = ''; // limpo o html do elemento (select)

    response.data.forEach((uf) => {
      // se tu der um log em response verá que retorna um objeto com a resposta da api, e dentro deste objeto tem o data
      // que dentro do data tem as informações dos estados
      // então eu faço response.data que são os estados .forEach para fazer um loop entre os estados
      // crio um elemento option e armazeno na variavel option, e vou manipulando o dom, atribuindo o valor e o texto do option
      // depois pego o selectUf (o select que tem os estados) e uso o appendChild() que é para criar um novo elemento, um filho
      // e passo o option que foi criado apartir do createElement
      const option = document.createElement('option');
      option.value = uf.sigla;
      option.textContent = uf.sigla;

      selectUf.appendChild(option);
    });

    // aqui eu chamo a função que faz a requisição das cidades, pra quando eu chamar o estado, ele já buscar as cidades
    await fetchCities();
  }

  async function fetchCities() {
    // aqui eu pego o valor do estado selecionado no select
    const uf = selectUf.value;

    // faço a requisição para buscar as cidades, passo a url, que vem do parametro da função fetchLocations
    // e paço o estado selecionado, que é o valor do select de estados
    const response = await axios.get(
      `${url}/estados/${uf}/municipios?orderBy=nome`
    );

    // dentro do select de cidades, eu injeto um html sendo um elemento option dizendo pra pessoa selecionar uma cidade, só pra não ficar algo vazio
    selectCity.innerHTML = '<option value="">Selecione a cidade</option>';

    // aqui segue a mesma lógica da função acima
    response.data.forEach((city) => {
      const option = document.createElement('option');
      option.value = city.nome;
      option.textContent = city.nome;
      selectCity.appendChild(option);
    });
  }

  // aqui eu adiciono um evento no select de estado, para cada vez que ele mudar o valor ele chamar a função que busca as cidades
  selectUf.addEventListener('change', fetchCities);

  // aqui eu chamo a função que busca os estados para iniciar ela
  fetchUfs();
}

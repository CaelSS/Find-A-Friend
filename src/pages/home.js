export function Home() {
  return `
    <div class="landpage">
        <div class="logo"><img src="src/img/logo.svg" alt="">
            <h1> FindAFriend</h1>
        </div>
        <div class="container">
            <div class="content-left">
                <div class="subtitulo">
                    <h2 class="logoPhrase">
                        Leve <br> a felicidade <br>para o seu lar
                    </h2>
                </div>

                <div class="cep">
                    <span>
                        Encontre o animal de estimaçao ideal para o seu estilo de vida!
                    </span>
                </div>
            </div>

            <div class="content-right">
                <div>
                    <img src="src/img/dogsRighSide.svg" alt="">
                </div>

                <div class="content-ceps">
                    <label for="cep">Busque um amigo:</label>
                    <div class="selects">
                        <select class="estados" name="estados" id="select-uf">
                            <option value="">BA</option>
                        </select>
                        <select class="cidade" id="select-city">
                            <option value="">cidade</option>
                        </select>
                    </div>
                    <a href="/sign-in"><button class="btnBuscar"> <img src="src/img/lupa.svg" alt=""></button></a>
                    <!-- <a href="src/pages/listPets.html">lista</a> -->
                </div>
            </div>
        </div>
    </div>
`;
}

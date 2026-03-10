export function AuthLayout(content, title) {
  return `
       
       <section class="layoutcontainer">
            <div class="marca">
              <div class="logo">
                <img src="../img/logo.svg" alt="Logo com img escrito FIND A FRIEND" />
                <h1>FindAFriend</h1>
              </div>
              <div class="dogs">
                <img src="../img/dogsRighSide.svg" alt="Varios cachorros animados" />
              </div>
            </div>
      
            <div class="forms">
              <h2 class="titulo2">${title}</h2>
              ${content}
            </div>
          </section>
      
    `;
}

import "../styles/layouts/auth-layout.css"

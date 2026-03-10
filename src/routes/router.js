import { Home } from '../pages/home.js';
import { SignIn, initSignIn } from '../pages/sign-in.js';
import { initSignUp, SignUp } from '../pages/sign-up.js';

const routes = {
  '/': { page: Home, title: 'Bem vindo - home' },
  '/sign-in': { page: SignIn, init: initSignIn, title: 'Login' },
  '/sign-up': { page: SignUp, init:initSignUp, title: 'Cadastro' }
 
};

export function initRouter() {
  const app = document.getElementById('app');
  const path = window.location.pathname;


  const route = routes[path] || routes['/'];
  document.title = route.title;
  app.innerHTML = route.page();

  if (route.init) {
    route.init();
  }
}



import { Home } from '../pages/home.js';
import { SignIn, initSignIn } from '../pages/sign-in.js';

const routes = {
  '/': { page: Home },
  '/sign-in': { page: SignIn, init: initSignIn },
};

export function initRouter() {
  const app = document.getElementById('app');
  const path = window.location.pathname;

  const route = routes[path] || routes['/'];

  app.innerHTML = route.page();

  if (route.init) {
    route.init();
  }
}

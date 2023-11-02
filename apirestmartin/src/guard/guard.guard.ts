import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let usuarioLogeado = localStorage.getItem('Usuario');

  if (usuarioLogeado) {
    usuarioLogeado = JSON.parse(usuarioLogeado);
  }

  if (usuarioLogeado) {
    return true;
  } else {
    return false;
  }
};

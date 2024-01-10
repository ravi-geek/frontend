import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../Service/auth.service';
import { Store } from '@ngrx/store';

export const AuthGuard: CanActivateFn = (route, state) => {
  console.log('route', route);
  console.log('state', state);
  const current = route.url[0].path;
  const authService = inject(AuthService);
  const store = inject(Store);
  let user$ = store.select('user');
  return authService.isUserLoggedIn();
  if (current === 'courses' || current === 'dashboard' && authService.isUserLoggedIn()) {
    return true;
  } else {
    const router = inject(Router);
    router.navigate(['']);
    return false;
  }
}

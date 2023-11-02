import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { guardGuard } from 'src/guard/guard.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../components/login/pages/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'Home',
    loadChildren: () =>
      import('../components/home/pages/home/home.module').then(
        (m) => m.HomeModule
      ),
    canActivate: [guardGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

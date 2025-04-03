import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/basics/basics.module').then((m) => m.BasicsModule),
  },
];

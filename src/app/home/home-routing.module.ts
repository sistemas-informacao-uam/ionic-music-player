import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children: [
      {
        path: 'config',
        loadChildren: () => import('./config/config.module').then( m => m.ConfigPageModule)
      },
      {
        path: 'biblioteca',
        loadChildren: () => import('./biblioteca/biblioteca.module').then( m => m.BibliotecaPageModule)
      },
      {
        path: 'player',
        loadChildren: () => import('./player/player.module').then( m => m.PlayerPageModule)
      },
      {
        path: 'explorar',
        loadChildren: () => import('./explorar/explorar.module').then( m => m.ExplorarPageModule)
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.gaurd';
import { AppLayoutComponent } from '@shared/layout/app.layout.component';
import { NotfoundComponent } from '@shared/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashabord',
        loadChildren: () =>import('./features/dashabord/dashabord.module').then((m) => m.DashabordModule),
        canActivate: []
      },
      {
        path: 'crud',
        loadChildren: () => import('./features/crud/crud.module').then(m => m.CrudModule),
        canActivate: [],
        data: { role: 'ADMIN' } // Apenas usuários com a ROLE "ADMIN" podem acessar
      },
      {
        path: 'gerenciar-publicacao',
        loadChildren: () => import('./features/gerenciar-publicacao/gerenciar-publicacao.module').then(m => m.GerenciarPublicacaoModule),
        canActivate: [],
        data: {role: 'GERENCIAR_PUBLICACAO_SALVAR'} // Apenas usuários com a ROLE "ADMIN" podem acessar
      },
      { path: 'calendar', loadChildren: () => import('./features/calendar/calendar.module').then(m => m.CalendarModule) },
      { path: '', redirectTo: 'dashabord', pathMatch: 'full' },

    ]
  },
  { path: 'notfound', component: NotfoundComponent },
  { path: 'access-denied', component: NotfoundComponent },
  { path: '**', redirectTo: '/notfound' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

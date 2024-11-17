import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@core/guards/auth.gaurd';
import { AppLayoutComponent } from '@shared/layout/app.layout.component';
import { NotfoundComponent } from '@shared/pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    data: { breadCrum: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./features/dashabord/dashabord.module').then((m) => m.DashabordModule),
      },
      {
        path: 'crud',
        loadChildren: () =>
          import('./features/crud/crud.module').then((m) => m.CrudModule),
        data: { breadCrum: 'CRUD', role: 'ADMIN' },
      },
      {
        path: 'gerenciar-publicacao',
        loadChildren: () =>
          import('./features/gerenciar-publicacao/gerenciar-publicacao.module').then(
            (m) => m.GerenciarPublicacaoModule
          ),
        data: { breadCrum: 'Gerenciar Publicação', role: 'GERENCIAR_PUBLICACAO_SALVAR' },
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('./features/calendar/calendar.module').then((m) => m.CalendarModule),
        data: { breadCrum: 'Calendar' },
      },
      { path: 'notfound', component: NotfoundComponent, data: { breadCrum: 'Not Found' } },
      { path: 'access-denied', component: NotfoundComponent, data: { breadCrum: 'Access Denied' } },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }, // Redireciona a raiz para /dashboard
    ],
  },
  { path: '**', redirectTo: '/notfound' }, // Rota coringa para rotas inexistentes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

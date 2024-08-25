import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/pages/home/home.component';
import { CadastrarParceiroComponent } from './features/pages/cadastrar-parceiro/cadastrar-parceiro.component';
import { CadastrarEmpresaExternaComponent } from './features/pages/cadastrar-empresa-externa/cadastrar-empresa-externa.component';
import { ListarParceiroComponent } from './features/pages/listar-parceiro/listar-parceiro.component';
import { ListarEmpresaComponent } from './features/pages/listar-empresa-externa/listar-empresa-externa.component';
import { AuthGuardService } from './features/services/authGuard.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./features/pages/login/login-modules/login.module').then(l => l.LoginModule) },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuardService] }, // Protegendo a rota
  { path: 'cadastrar-parceiros', component: CadastrarParceiroComponent, canActivate: [AuthGuardService] }, // Protegendo a rota
  { path: 'cadastrar-empresas-externas', component: CadastrarEmpresaExternaComponent, canActivate: [AuthGuardService] }, // Protegendo a rota
  { path: 'empresas-externas', component: ListarEmpresaComponent, canActivate: [AuthGuardService] }, // Protegendo a rota
  { path: 'parceiros', component: ListarParceiroComponent, canActivate: [AuthGuardService] }, // Protegendo a rota
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

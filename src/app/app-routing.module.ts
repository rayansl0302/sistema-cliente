import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/pages/login/login.component';
import { HomeComponent } from './features/pages/home/home.component';
import { CadastrarParceiroComponent } from './features/pages/cadastrar-parceiro/cadastrar-parceiro.component';
import { CadastrarEmpresaExternaComponent } from './features/pages/cadastrar-empresa-externa/cadastrar-empresa-externa.component';
import { ListarParceiroComponent } from './features/pages/listar-parceiro/listar-parceiro.component';
import { ListarEmpresaComponent } from './features/pages/listar-empresa-externa/listar-empresa-externa.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cadastrar-parceiros', component: CadastrarParceiroComponent },
  { path: 'cadastrar-empresas-externas', component: CadastrarEmpresaExternaComponent },
  { path: 'empresas-externas', component: ListarEmpresaComponent },
  { path: 'parceiros', component: ListarParceiroComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

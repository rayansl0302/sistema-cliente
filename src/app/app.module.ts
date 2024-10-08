import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './features/pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastrarEmpresaExternaComponent } from './features/pages/cadastrar-empresa-externa/cadastrar-empresa-externa.component';
import { NavbarComponent } from './features/components/navbar/navbar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ListarParceiroComponent } from './features/pages/listar-parceiro/listar-parceiro.component';
import { EditarParceiroComponent } from './features/pages/cadastrar-parceiro/containers/editar-parceiro/editar-parceiro.component';
import { ListarEmpresaComponent } from './features/pages/listar-empresa-externa/listar-empresa-externa.component';
import { CadastrarParceiroComponent } from './features/pages/cadastrar-parceiro/cadastrar-parceiro.component';

//Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatChipsModule } from '@angular/material/chips';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CadastrarParceiroComponent,
    CadastrarEmpresaExternaComponent,
    NavbarComponent,
    ListarParceiroComponent,
    EditarParceiroComponent,
    ListarEmpresaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatTableModule,
    MatSortModule,
    MatDialogModule,
    MatPaginatorModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatSnackBarModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

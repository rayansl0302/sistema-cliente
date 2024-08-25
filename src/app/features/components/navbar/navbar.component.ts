import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CadastrarEmpresaExternaComponent } from '../../pages/cadastrar-empresa-externa/cadastrar-empresa-externa.component';
import { CadastrarParceiroComponent } from '../../pages/cadastrar-parceiro/cadastrar-parceiro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  username: string | null = '';

  constructor(private _router: Router,public dialog: MatDialog) {}

  ngOnInit(): void {
    this.username = this.getUsernameFromCookie();
    this.updateNavbarWithUsername();
  }

  getUsernameFromCookie(): string | null {
    const name = 'username=';
    const decodedCookie = decodeURIComponent(document.cookie);
    const cookieArray = decodedCookie.split(';');
    for (let i = 0; i < cookieArray.length; i++) {
      let cookie = cookieArray[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1);
      }
      if (cookie.indexOf(name) === 0) {
        return cookie.substring(name.length, cookie.length);
      }
    }
    return null;
  }

  
  updateNavbarWithUsername(): void {
    const usernameElement = document.getElementById('username');
    if (usernameElement && this.username) {
      usernameElement.textContent = this.username;
    }
  }
  deleteCookie(name: string): void {
    document.cookie = `${name}=; Max-Age=-99999999;`;
  }

  openCadastrarParceiros(): void {
    this.dialog.open(CadastrarParceiroComponent, {
      width: '800px'
    });
  }

  openCadastrarEmpresaExterna(): void {
    this.dialog.open(CadastrarEmpresaExternaComponent, {
      width: '800px'
    });
  }

  logout(): void {
    this.deleteCookie('username');

    localStorage.removeItem('username');

    this._router.navigate(['/login']);
  }

}

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar'; // Importando o MatSnackBar

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private router: Router, private snackBar: MatSnackBar) {} // Injetando o MatSnackBar

  canActivate(): boolean {
    const username = localStorage.getItem('username') || this.getCookie('username');
    if (username) {
      return true; // O usuário está autenticado
    } else {
      this.openSnackBar(); // Abre a mensagem
      this.router.navigate(['/login']); // Redireciona para a página de login
      return false; // O usuário não está autenticado
    }
  }

  private getCookie(name: string): string | null {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) {
      const cookieValue = parts.pop()?.split(';').shift();
      return cookieValue ? cookieValue : null;
    }
    return null;
  }

  private openSnackBar(): void {
    this.snackBar.open('Por favor, realize o login antes de acessar o sistema.', 'Fechar', {
      duration: 3000, // Duração da mensagem em milissegundos
    });
  }
}

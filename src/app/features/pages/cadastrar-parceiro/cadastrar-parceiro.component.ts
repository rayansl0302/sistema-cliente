import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-cadastrar-parceiro',
  templateUrl: './cadastrar-parceiro.component.html',
  styleUrls: ['./cadastrar-parceiro.component.less']
})
export class CadastrarParceiroComponent {
  parceiroForm: FormGroup;
  separatorKeysCodes: number[] = [ENTER, COMMA]; // Configuração dos separadores

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CadastrarParceiroComponent>
  ) {
    this.parceiroForm = this.fb.group({
      name: ['', Validators.required],
      description: [''],
      repositoryGit: ['', Validators.required],
      urlDoc: ['', Validators.required],
      clients: [[]],
      projects: [[]],
      createdAt: [new Date().toISOString()]
    });
  }

  get name(): AbstractControl | null {
    return this.parceiroForm.get('name');
  }

  get repositoryGit(): AbstractControl | null {
    return this.parceiroForm.get('repositoryGit');
  }

  get urlDoc(): AbstractControl | null {
    return this.parceiroForm.get('urlDoc');
  }

  get createdAt(): AbstractControl | null {
    return this.parceiroForm.get('createdAt');
  }

  get clients(): AbstractControl | null {
    return this.parceiroForm.get('clients');
  }

  get projects(): AbstractControl | null {
    return this.parceiroForm.get('projects');
  }

  addClient(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
  
    if ((value || '').trim()) {
      this.clients?.value.push(value.trim());
      this.clients?.updateValueAndValidity();
    }
  
    if (input) {
      input.value = '';
    }
  }
  
  removeClient(client: string): void {
    if (this.clients) {
      const index = this.clients.value.indexOf(client);
      if (index >= 0) {
        this.clients.value.splice(index, 1);
        this.clients.updateValueAndValidity();
      }
    }
  }

  addProject(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    if (this.projects && (value || '').trim()) {
      this.projects.value.push(value.trim());
      this.projects.updateValueAndValidity();
    }

    if (input) {
      input.value = '';
    }
  }

  removeProject(project: string): void {
    if (this.projects) {
      const index = this.projects.value.indexOf(project);
      if (index >= 0) {
        this.projects.value.splice(index, 1);
        this.projects.updateValueAndValidity();
      }
    }
  }

  applyDateTimeMask(event: any): void {
    let value = event.target.value.replace(/\D/g, '');
    if (value.length >= 4) {
      value = value.slice(0, 4) + '-' + value.slice(4);
    }
    if (value.length >= 7) {
      value = value.slice(0, 7) + '-' + value.slice(7);
    }
    if (value.length >= 10) {
      value = value.slice(0, 10) + ' ' + value.slice(10);
    }
    if (value.length >= 13) {
      value = value.slice(0, 13) + ':' + value.slice(13);
    }
    if (value.length >= 16) {
      value = value.slice(0, 16) + ':' + value.slice(16);
    }
    event.target.value = value;
    this.parceiroForm.get('lastSubmit')?.setValue(value);
  }

  onSubmit(): void {
    if (this.parceiroForm.valid) {
      const newPartner: Partner = this.parceiroForm.value;
      console.log('Parceiro criado:', newPartner);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

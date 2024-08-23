import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Partner } from '../../models/partner.model';

@Component({
  selector: 'app-cadastrar-parceiro',
  templateUrl: './cadastrar-parceiro.component.html',
  styleUrls: ['./cadastrar-parceiro.component.less']
})
export class CadastrarParceiroComponent {
  parceiroForm: FormGroup;

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

  get name() {
    return this.parceiroForm.get('name');
  }

  get repositoryGit() {
    return this.parceiroForm.get('repositoryGit');
  }

  get urlDoc() {
    return this.parceiroForm.get('urlDoc');
  }

  get createdAt() {
    return this.parceiroForm.get('createdAt');
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
      // Aqui você pode enviar os dados para o serviço ou API
      console.log('Parceiro criado:', newPartner);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

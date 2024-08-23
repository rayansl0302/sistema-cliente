import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Company } from '../../models/companies.model';

@Component({
  selector: 'app-cadastrar-empresa-externa',
  templateUrl: './cadastrar-empresa-externa.component.html',
  styleUrls: ['./cadastrar-empresa-externa.component.less']
})
export class CadastrarEmpresaExternaComponent {
  empresaForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<CadastrarEmpresaExternaComponent>
  ) {
    this.empresaForm = this.fb.group({
      companyName: ['', Validators.required],
      collaboratorsCount: [0, [Validators.required, Validators.min(0)]],
      isActive: [true],
      lastSubmit: [''],
      createdAt: [new Date().toISOString()]
    });
  }

  get companyName() {
    return this.empresaForm.get('companyName');
  }

  get collaboratorsCount() {
    return this.empresaForm.get('collaboratorsCount');
  }

  get createdAt() {
    return this.empresaForm.get('createdAt');
  }

  onSubmit(): void {
    if (this.empresaForm.valid) {
      const newCompany: Company = this.empresaForm.value;
      // Aqui você pode enviar os dados para o serviço ou API
      console.log('Empresa criada:', newCompany);
      this.dialogRef.close();
    }
  }

  onCancel(): void {
    this.dialogRef.close();
  }
}

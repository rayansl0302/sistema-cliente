import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpresaExternaService } from 'src/app/features/services/empresa-externa.service';
import { Company } from 'src/app/features/models/companies.model';

@Component({
  selector: 'app-editar-empresa-externa',
  templateUrl: './editar-empresa-externa.component.html',
  styleUrls: ['./editar-empresa-externa.component.less']
})
export class EditarEmpresaExternaComponent {
  editCompanyForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private companiesService: EmpresaExternaService,
    public dialogRef: MatDialogRef<EditarEmpresaExternaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Company
  ) {
    this.editCompanyForm = this.fb.group({
      companyName: [data.companyName, Validators.required],
      collaboratorsCount: [data.collaboratorsCount, Validators.required],
      lastSubmit: [data.lastSubmit],
      createdAt: [data.createdAt],
      isActive: [data.isActive]
    });
  }

  onSubmit(): void {
    if (this.editCompanyForm.valid) {
      const updatedCompany: Company = { ...this.data, ...this.editCompanyForm.value };
      this.companiesService.updateCompany(updatedCompany.id, updatedCompany).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        error => {
          console.error('Erro ao atualizar empresa', error);
        }
      );
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

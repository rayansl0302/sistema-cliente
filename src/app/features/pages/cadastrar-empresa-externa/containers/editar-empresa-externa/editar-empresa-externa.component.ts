import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmpresaExternaService } from 'src/app/features/services/empresa-externa.service';
import { Company } from 'src/app/features/models/companies.model';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@Component({
  standalone: true,
  imports: [CommonModule, MatInputModule, MatFormFieldModule, MatButtonModule, ReactiveFormsModule, MatCheckboxModule],
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

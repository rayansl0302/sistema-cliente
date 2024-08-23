import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParceirosService } from 'src/app/features/services/parceiros.service';
import { Partner } from 'src/app/features/models/partner.model';

@Component({
  selector: 'app-editar-parceiro',
  templateUrl: './editar-parceiro.component.html',
  styleUrls: ['./editar-parceiro.component.less']
})
export class EditarParceiroComponent {
  editPartnerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private parceirosService: ParceirosService,
    public dialogRef: MatDialogRef<EditarParceiroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Partner
  ) {
    this.editPartnerForm = this.fb.group({
      name: [data.name, Validators.required],
      description: [data.description, Validators.required],
      repositoryGit: [data.repositoryGit],
      urlDoc: [data.urlDoc]
    });
  }

  onSubmit(): void {
    if (this.editPartnerForm.valid) {
      const updatedPartner: Partner = { ...this.data, ...this.editPartnerForm.value };
      this.parceirosService.updatePartner(updatedPartner.id, updatedPartner).subscribe(
        () => {
          this.dialogRef.close(true);
        },
        error => {
          console.error('Error updating partner', error);
        }
      );
    }
  }

  onClose(): void {
    this.dialogRef.close();
  }
}

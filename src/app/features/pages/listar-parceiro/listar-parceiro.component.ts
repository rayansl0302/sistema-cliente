import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { Partner } from '../../models/partner.model';
import { ParceirosService } from '../../services/parceiros.service';
import { EditarParceiroComponent } from '../cadastrar-parceiro/containers/editar-parceiro/editar-parceiro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-parceiro',
  templateUrl: './listar-parceiro.component.html',
  styleUrls: ['./listar-parceiro.component.less']
})
export class ListarParceiroComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Partner>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private parceirosService: ParceirosService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPartners();
  }

  loadPartners(): void {
    this.parceirosService.getAllPartners().subscribe(
      (partners: Partner[]) => {
        this.dataSource.data = partners;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Erro ao buscar parceiros', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditDialog(partner: Partner): void {
    const dialogRef = this.dialog.open(EditarParceiroComponent, {
      width: '500px',
      data: partner
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPartners(); // Refresh the list if a partner was updated
      }
    });
  }

  deletePartner(id: string): void {
    if (confirm('Você tem certeza que deseja excluir este parceiro?')) {
      this.parceirosService.deletePartner(id).subscribe(
        () => {
          this.loadPartners();
        },
        error => {
          console.error('Erro ao excluir parceiro', error);
        }
      );
    }
  }
}

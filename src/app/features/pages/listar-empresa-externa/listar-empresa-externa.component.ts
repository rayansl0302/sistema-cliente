import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Company } from '../../models/companies.model';
import { EmpresaExternaService } from '../../services/empresa-externa.service';
import { EditarEmpresaExternaComponent } from '../cadastrar-empresa-externa/containers/editar-empresa-externa/editar-empresa-externa.component';

@Component({
  selector: 'app-listar-empresa-externa',
  templateUrl: './listar-empresa-externa.component.html',
  styleUrls: ['./listar-empresa-externa.component.less']
})
export class ListarEmpresaComponent implements OnInit {
  displayedColumns: string[] = ['id', 'companyName', 'collaboratorsCount', 'isActive', 'actions'];
  dataSource = new MatTableDataSource<Company>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private companiesService: EmpresaExternaService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCompanies();
  }

  loadCompanies(): void {
    this.companiesService.getAllCompanies().subscribe(
      (companies: Company[]) => {
        this.dataSource.data = companies;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
      error => {
        console.error('Erro ao buscar empresas', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  openEditDialog(company: Company): void {
    const dialogRef = this.dialog.open(EditarEmpresaExternaComponent, {
      width: '500px',
      data: company
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadCompanies(); // Refresh the list if a company was updated
      }
    });
  }

  deleteCompany(id: string): void {
    if (confirm('Você tem certeza que deseja excluir esta empresa?')) {
      this.companiesService.deleteCompany(id).subscribe(
        () => {
          this.loadCompanies();
        },
        error => {
          console.error('Erro ao excluir empresa', error);
        }
      );
    }
  }
}

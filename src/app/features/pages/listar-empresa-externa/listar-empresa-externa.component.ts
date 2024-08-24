import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
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
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private companiesService: EmpresaExternaService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadCompanies();

    // Obter parâmetros de consulta ao iniciar
    this.route.queryParams.subscribe(params => {
      const page = params['page'];
      if (page) {
        this.currentPage = +page; // Atualizar o índice da página
        this.paginator.pageIndex = this.currentPage; // Definir o índice da página
        this.paginator._changePageSize(this.paginator.pageSize); // Atualizar a tabela
      }
    });
  }

  loadCompanies(): void {
    this.companiesService.getAllCompanies().subscribe(
      (companies: Company[]) => {
        this.dataSource.data = companies;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator.length = companies.length; // Atualizar o comprimento total do paginator
      },
      error => {
        console.error('Erro ao buscar empresas', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
      if (this.paginator) {
      this.paginator.length = this.dataSource.filteredData.length; 
      this.paginator.pageIndex = 0; // Reseta a página para a primeira ao aplicar o filtro
    }
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

  onPageChange(event: any): void {
    this.currentPage = event.pageIndex;
    this.updateUrl();
  }

  updateUrl(): void {
    const url = this.router.createUrlTree([], {
      queryParams: { page: this.currentPage },
      relativeTo: this.route
    });
    history.replaceState({}, '', url.toString());
  }

  shareLink(): void {
    const page = this.currentPage;
    const shareableLink = `${window.location.origin}/empresas-externas?page=${page}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert('Link copiado para a área de transferência: ' + shareableLink);
    });
  }
}

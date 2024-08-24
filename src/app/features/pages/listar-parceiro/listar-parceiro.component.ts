import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Router, ActivatedRoute } from '@angular/router';
import { Partner } from '../../models/partner.model';
import { ParceirosService } from '../../services/parceiros.service';
import { EditarParceiroComponent } from '../cadastrar-parceiro/containers/editar-parceiro/editar-parceiro.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-listar-parceiro',
  templateUrl: './listar-parceiro.component.html',
  styleUrls: ['./listar-parceiro.component.less']
})
export class ListarParceiroComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Partner>();
  currentPage: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private parceirosService: ParceirosService,
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.loadPartners();

    // Obter parâmetros de consulta ao iniciar
    this.route.queryParams.subscribe(params => {
      const page = params['page'];
      if (page) {
        this.currentPage = +page; // Define a página atual a partir da URL
      }
    });
  }

  ngAfterViewInit(): void {
    if (this.paginator) {
      setTimeout(() => {
        this.paginator.pageIndex = this.currentPage; // Define o índice da página
      });
    }
  }

  loadPartners(): void {
    this.parceirosService.getAllPartners().subscribe(
      (partners: Partner[]) => {
        this.dataSource.data = partners;
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        // Atualiza o paginator com o número total de itens
        if (this.paginator) {
          this.paginator.length = this.dataSource.data.length; // Define o comprimento do paginator
          this.paginator.pageIndex = this.currentPage; // Define o índice da página
        }
      },
      error => {
        console.error('Erro ao buscar parceiros', error);
      }
    );
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Atualiza a quantidade de itens na tabela com base no filtro
    if (this.paginator) {
      this.paginator.length = this.dataSource.filteredData.length; // Atualiza o comprimento do paginator
      this.paginator.pageIndex = 0; // Reseta a página para a primeira ao aplicar o filtro
    }
  }

  openEditDialog(partner: Partner): void {
    const dialogRef = this.dialog.open(EditarParceiroComponent, {
      width: '500px',
      data: partner
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.loadPartners(); // Atualiza a lista se um parceiro foi editado
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
    const shareableLink = `${window.location.origin}/parceiros?page=${this.currentPage}`;
    navigator.clipboard.writeText(shareableLink).then(() => {
      alert('Link copiado para a área de transferência: ' + shareableLink);
    });
  }
}

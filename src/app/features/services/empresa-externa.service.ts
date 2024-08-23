import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Company } from '../models/companies.model';

@Injectable({
  providedIn: 'root'
})
export class EmpresaExternaService {
  // URL base da API para as empresas externas, definida no ambiente
  private apiUrl = environment.apiUrlExternalCompanies;

  // Injeta a dependência HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  /**
   * Retorna uma lista de todas as empresas externas.
   * @returns Um Observable contendo um array de objetos Company.
   */
  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }

  /**
   * Retorna uma empresa específica pelo seu ID.
   * @param id O ID da empresa que será buscada.
   * @returns Um Observable contendo o objeto Company correspondente ao ID.
   */
  getCompanyById(id: string): Observable<Company> {
    return this.http.get<Company>(`${this.apiUrl}/${id}`);
  }

  /**
   * Cadastra uma nova empresa.
   * @param company O objeto Company que será criado.
   * @returns Um Observable contendo o objeto Company criado.
   */
  createCompany(company: Company): Observable<Company> {
    return this.http.post<Company>(this.apiUrl, company);
  }

  /**
   * Atualiza os dados de uma empresa existente.
   * @param id O ID da empresa que será atualizada.
   * @param company O objeto Company com os dados atualizados.
   * @returns Um Observable contendo o objeto Company atualizado.
   */
  updateCompany(id: string, company: Company): Observable<Company> {
    return this.http.put<Company>(`${this.apiUrl}/${id}`, company);
  }

  /**
   * Exclui uma empresa pelo seu ID.
   * @param id O ID da empresa que será excluída.
   * @returns Um Observable vazio (void) indicando que a exclusão foi realizada.
   */
  deleteCompany(id: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

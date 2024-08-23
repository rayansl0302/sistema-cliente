import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partner } from '../models/partner.model';

@Injectable({
  providedIn: 'root'
})
export class ParceirosService {
  // URL base da API para os parceiros, definida no ambiente
  private apiUrl = environment.apiUrlPartners;

  // Opções de HTTP, incluindo o cabeçalho para o tipo de conteúdo JSON
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // Injeta a dependência HttpClient para fazer requisições HTTP
  constructor(private http: HttpClient) { }

  /**
   * Retorna uma lista de todos os parceiros.
   * @returns Um Observable contendo um array de objetos Partner.
   */
  getAllPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiUrl);
  }

  /**
   * Retorna um parceiro específico pelo seu ID.
   * @param id O ID do parceiro que será buscado.
   * @returns Um Observable contendo o objeto Partner correspondente ao ID.
   */
  getPartnerById(id: string): Observable<Partner> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Partner>(url);
  }

  /**
   * Cadastra um novo parceiro.
   * @param partner O objeto Partner que será criado.
   * @returns Um Observable contendo o objeto Partner criado.
   */
  createPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.apiUrl, partner, this.httpOptions);
  }

  /**
   * Atualiza os dados de um parceiro existente.
   * @param id O ID do parceiro que será atualizado.
   * @param partner O objeto Partner com os dados atualizados.
   * @returns Um Observable contendo o objeto Partner atualizado.
   */
  updatePartner(id: string, partner: Partner): Observable<Partner> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Partner>(url, partner, this.httpOptions);
  }

  /**
   * Exclui um parceiro pelo seu ID.
   * @param id O ID do parceiro que será excluído.
   * @returns Um Observable vazio (void) indicando que a exclusão foi realizada.
   */
  deletePartner(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

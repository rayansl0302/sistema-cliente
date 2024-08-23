import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Partner } from '../models/partner.model';


@Injectable({
  providedIn: 'root'
})
export class ParceirosService {
  private apiUrl = environment.apiUrlPartners;

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  // Listar todos os parceiros
  getAllPartners(): Observable<Partner[]> {
    return this.http.get<Partner[]>(this.apiUrl);
  }

  // Listar um parceiro por ID
  getPartnerById(id: string): Observable<Partner> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Partner>(url);
  }

  // Cadastrar um novo parceiro
  createPartner(partner: Partner): Observable<Partner> {
    return this.http.post<Partner>(this.apiUrl, partner, this.httpOptions);
  }

  // Atualizar um parceiro existente
  updatePartner(id: string, partner: Partner): Observable<Partner> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Partner>(url, partner, this.httpOptions);
  }

  // Deletar um parceiro
  deletePartner(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}

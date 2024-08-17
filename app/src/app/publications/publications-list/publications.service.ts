import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Publication } from '../Publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationsService {

  constructor(private http: HttpClient) { }

  getPublications() {
    return this.http.get<Publication[]>('/api/v1/publications/data.json');
  }
}

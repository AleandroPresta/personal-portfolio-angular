import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor(private http: HttpClient) { }

  getProjects() {
    return this.http.get<Project[]>('/api/v1/projects/data.json');
  }
}

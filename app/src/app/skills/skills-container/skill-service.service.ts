import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Skill } from '../Skill';

@Injectable({
  providedIn: 'root'
})
export class SkillServiceService {

  constructor(private http: HttpClient) { }

  getSkillSet1() {
    return this.http.get<Skill[]>('/api/v1/skills/1/data.json');
  }

  getSkillSet2() {
    return this.http.get<Skill[]>('/api/v1/skills/2/data.json');
  }
}

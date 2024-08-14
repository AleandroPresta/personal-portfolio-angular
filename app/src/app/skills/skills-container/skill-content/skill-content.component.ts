import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill-content',
  standalone: true,
  imports: [],
  templateUrl: './skill-content.component.html',
  styleUrl: './skill-content.component.css'
})
export class SkillContentComponent {

  skill: string = 'Angular';
  experience: string = 'Basic';

}

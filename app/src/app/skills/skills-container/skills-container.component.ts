import { Component } from '@angular/core';
import { SkillContentComponent } from "./skill-content/skill-content.component";

@Component({
  selector: 'app-skills-container',
  standalone: true,
  imports: [SkillContentComponent],
  templateUrl: './skills-container.component.html',
  styleUrl: './skills-container.component.css'
})
export class SkillsContainerComponent {

  skills: Map<string, string> = new Map<string, string>([
    ['skill1', 'value1'],
    ['skill2', 'value2'],
    ['skill3', 'value3'],
    ['skill4', 'value4'],
  ])

}

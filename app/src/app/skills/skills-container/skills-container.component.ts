import { Component } from '@angular/core';
import { SkillContentComponent } from "./skill-content/skill-content.component";
import { NgFor } from '@angular/common';
import { Skill } from '../Skill';

@Component({
  selector: 'app-skills-container',
  standalone: true,
  imports: [SkillContentComponent, NgFor],
  templateUrl: './skills-container.component.html',
  styleUrl: './skills-container.component.css'
})
export class SkillsContainerComponent {

  // Programming Languages
  skillset1: Skill[] = [
    new Skill('JavaScript', 'Intermediate'),
    new Skill('TypeScript', 'Intermediate'),
    new Skill('Python', 'Intermediate'),
    new Skill('Java', 'Intermediate'),
    new Skill('C#', 'Intermediate'),
    new Skill('C++', 'Intermediate'),
    new Skill('C', 'Intermediate'),
  ];

  // Web Frameworks
  skillset2: Skill[] = [
    new Skill('Angular', 'Intermediate'),
    new Skill('React', 'Intermediate'),
    new Skill('Vue', 'Intermediate'),
    new Skill('Node.js', 'Intermediate'),
  ];

}

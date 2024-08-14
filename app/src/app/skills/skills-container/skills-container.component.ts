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

  skills: Skill[] = [
    new Skill('Angular', 'Intermediate'),
    new Skill('React', 'Intermediate'),
    new Skill('Vue', 'Intermediate'),
    new Skill('Node.js', 'Intermediate'),
  ];

}

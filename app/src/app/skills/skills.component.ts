import { Component } from '@angular/core';
import { SkillsContainerComponent } from "./skills-container/skills-container.component";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SkillsContainerComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {

}

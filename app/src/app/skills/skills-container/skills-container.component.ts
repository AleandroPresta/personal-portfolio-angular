import { Component, OnInit } from '@angular/core';
import { SkillContentComponent } from "./skill-content/skill-content.component";
import { NgFor } from '@angular/common';
import { Skill } from '../Skill';
import { HttpClientModule } from '@angular/common/http';
import { SkillServiceService } from './skill-service.service';

@Component({
  selector: 'app-skills-container',
  standalone: true,
  imports: [SkillContentComponent, NgFor, HttpClientModule],
  templateUrl: './skills-container.component.html',
  styleUrl: './skills-container.component.css'
})
export class SkillsContainerComponent implements OnInit {

  // Programming Languages
  skillset1: Skill[] = [

  ];

  // Web Frameworks
  skillset2: Skill[] = [

  ];


  constructor(private skillService: SkillServiceService) { }

  ngOnInit() {
    this.skillService.getSkillSet1().subscribe((data: Skill[]) => {
      console.log(data);
      this.skillset1 = data;
    });

    this.skillService.getSkillSet2().subscribe((data: Skill[]) => {
      console.log(data);
      this.skillset2 = data;
    });
  }

}

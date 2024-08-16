import { Component, OnInit } from '@angular/core';
import { ProjectContentComponent } from './project-content/project-content.component';
import { Project } from '../Project';
import { NgFor } from '@angular/common';
import { ProjectsService } from './projects.service';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectContentComponent, NgFor],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent implements OnInit {

  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.projectsService.getProjects().subscribe(
      (data: Project[]) => this.projects = data
    );
  }

}

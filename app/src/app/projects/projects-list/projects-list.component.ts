import { Component } from '@angular/core';
import { ProjectContentComponent } from './project-content/project-content.component';
import { Project } from '../Project';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectContentComponent, NgFor],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {

  projects: Project[] = [
    new Project('Project 1', 'Description 1', 'https://via.placeholder.com/150', 'https://www.google.com'),
    new Project('Project 2', 'Description 2', 'https://via.placeholder.com/150', 'https://www.google.com'),
    new Project('Project 3', 'Description 3', 'https://via.placeholder.com/150', 'https://www.google.com'),
    new Project('Project 4', 'Description 1', 'https://via.placeholder.com/150', 'https://www.google.com'),
    new Project('Project 5', 'Description 2', 'https://via.placeholder.com/150', 'https://www.google.com'),
    new Project('Project 6', 'Description 3', 'https://via.placeholder.com/150', 'https://www.google.com')
  ];

}

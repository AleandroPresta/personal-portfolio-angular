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
    new Project('Project 1', 'Description 1', 'https://placehold.co/200x400/orange/white', 'https://www.google.com'),
    new Project('Project 2', 'Description 2', 'https://placehold.co/400x400/orange/white', 'https://www.google.com'),
    new Project('Project 3', 'Description 3', 'https://placehold.co/300x400/orange/white', 'https://www.google.com'),
    new Project('Project 4', 'Description 1', 'https://placehold.co/400x400/orange/white', 'https://www.google.com'),
    new Project('Project 5', 'Description 2', 'https://placehold.co/100x400/orange/white', 'https://www.google.com'),
    new Project('Project 6', 'Description 3', 'https://placehold.co/400x600/orange/white', 'https://www.google.com')
  ];

}

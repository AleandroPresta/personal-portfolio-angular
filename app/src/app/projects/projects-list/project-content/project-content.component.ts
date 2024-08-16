import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-project-content',
  standalone: true,
  imports: [],
  templateUrl: './project-content.component.html',
  styleUrl: './project-content.component.css'
})
export class ProjectContentComponent {

  @Input() projectTitle: string = 'Project 1';
  @Input() projectDescription: string = 'Description 1';
  @Input() projectImageUrl: string = 'https://placehold.co/300x300/orange/white';
  @Input() projectUrl: string = 'https://www.google.com';

}

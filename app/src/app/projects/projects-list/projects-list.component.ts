import { Component } from '@angular/core';
import { ProjectContentComponent } from './project-content/project-content.component';

@Component({
  selector: 'app-projects-list',
  standalone: true,
  imports: [ProjectContentComponent],
  templateUrl: './projects-list.component.html',
  styleUrl: './projects-list.component.css'
})
export class ProjectsListComponent {

}

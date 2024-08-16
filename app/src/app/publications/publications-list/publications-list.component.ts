import { Component, Input } from '@angular/core';
import { PublicationsContentComponent } from './publications-content/publications-content.component';
import { PublicationsComponent } from "../publications.component";
import { Publication } from '../Publication';

@Component({
  selector: 'app-publications-list',
  standalone: true,
  imports: [PublicationsContentComponent, PublicationsComponent],
  templateUrl: './publications-list.component.html',
  styleUrl: './publications-list.component.css'
})
export class PublicationsListComponent {

  @Input() publications: Publication[] = [];

}

import { Component } from '@angular/core';
import { PublicationsListComponent } from './publications-list/publications-list.component';

@Component({
  selector: 'app-publications',
  standalone: true,
  imports: [PublicationsListComponent],
  templateUrl: './publications.component.html',
  styleUrl: './publications.component.css'
})
export class PublicationsComponent {

}

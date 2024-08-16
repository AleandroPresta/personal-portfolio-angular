import { Component, Input } from '@angular/core';
import { Author } from '../../Publication';

@Component({
  selector: 'app-publications-content',
  standalone: true,
  imports: [],
  templateUrl: './publications-content.component.html',
  styleUrl: './publications-content.component.css'
})
export class PublicationsContentComponent {

  @Input() publicationTitle: string = '';
  @Input() publicationTags: string[] = [];
  @Input() publicationPreviewImage: string = '';
  @Input() publicationDate: string = '';
  @Input() publicationAuthors: Author[] = [];

  constructor() { }

}

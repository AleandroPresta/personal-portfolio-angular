import { Component, Input } from '@angular/core';
import { Author } from '../../Publication';
import { CustomBadgeComponent } from '../../../custom-badge/custom-badge.component';

@Component({
  selector: 'app-publications-content',
  standalone: true,
  imports: [CustomBadgeComponent],
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

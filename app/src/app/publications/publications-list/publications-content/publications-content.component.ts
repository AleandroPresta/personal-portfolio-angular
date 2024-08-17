import { Component, Input } from '@angular/core';
import { Author } from '../../Publication';
import { CustomBadgeComponent } from '../../../custom-badge/custom-badge.component';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-publications-content',
  standalone: true,
  imports: [CustomBadgeComponent, NgFor],
  templateUrl: './publications-content.component.html',
  styleUrl: './publications-content.component.css'
})
export class PublicationsContentComponent {

  @Input() publicationTitle: string = 'Paper Title';
  @Input() publicationTags: string[] = ['Tag 1', 'Tag 2', 'Tag 3'];
  @Input() publicationPreviewImage: string = 'https://placehold.co/150x150';
  @Input() publicationDate: string = 'Aug 2024';
  @Input() publicationAuthors: Author[] = [
    { authorName: 'Author 1', authorProfilePicture: 'https://placehold.co/25x25' },
    { authorName: 'Author 2', authorProfilePicture: 'https://placehold.co/25x25' },
    { authorName: 'Author 3', authorProfilePicture: 'https://placehold.co/25x25' }
  ];

  constructor() { }

}

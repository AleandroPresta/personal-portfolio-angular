import { Component, Input } from '@angular/core';
import { PublicationsContentComponent } from './publications-content/publications-content.component';
import { PublicationsComponent } from "../publications.component";
import { Publication } from '../Publication';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-publications-list',
  standalone: true,
  imports: [PublicationsContentComponent, PublicationsComponent, NgFor],
  templateUrl: './publications-list.component.html',
  styleUrl: './publications-list.component.css'
})
export class PublicationsListComponent {

  @Input() publications: Publication[] = [
    new Publication(
      'The future of AI in the automotive industry',
      ['AI', 'Automotive'],
      'assets/images/ai-automotive.jpg',
      'January 2021',
      [
        { authorName: 'John Doe', authorProfilePicture: 'assets/images/john-doe.jpg' },
        { authorName: 'Jane Doe', authorProfilePicture: 'assets/images/jane-doe.jpg' }
      ]
    ),
    new Publication(
      'The impact of blockchain technology on the financial sector',
      ['Blockchain', 'Finance'],
      'assets/images/blockchain-finance.jpg',
      'February 2021',
      [
        { authorName: 'John Doe', authorProfilePicture: 'assets/images/john-doe.jpg' },
        { authorName: 'Jane Doe', authorProfilePicture: 'assets/images/jane-doe.jpg' }
      ]
    ),
    new Publication(
      'The role of IoT in the healthcare industry',
      ['IoT', 'Healthcare'],
      'assets/images/iot-healthcare.jpg',
      'March 2021',
      [
        { authorName: 'John Doe', authorProfilePicture: 'assets/images/john-doe.jpg' },
        { authorName: 'Jane Doe', authorProfilePicture: 'assets/images/jane-doe.jpg' }
      ]
    )
  ];

}

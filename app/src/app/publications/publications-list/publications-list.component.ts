import { Component, Input, OnInit } from '@angular/core';
import { PublicationsContentComponent } from './publications-content/publications-content.component';
import { PublicationsComponent } from "../publications.component";
import { Publication } from '../Publication';
import { NgFor } from '@angular/common';
import { PublicationsService } from './publications.service';
import { Author } from '../Publication';

@Component({
  selector: 'app-publications-list',
  standalone: true,
  imports: [PublicationsContentComponent, PublicationsComponent, NgFor],
  templateUrl: './publications-list.component.html',
  styleUrl: './publications-list.component.css'
})
export class PublicationsListComponent implements OnInit {

  publications: Publication[] = [

  ];

  constructor(private publicationsService: PublicationsService) { }

  ngOnInit(): void {
    this.publicationsService.getPublications().subscribe(data => {
      this.publications = data;
    });
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-badge',
  standalone: true,
  imports: [],
  templateUrl: './custom-badge.component.html',
  styleUrl: './custom-badge.component.css'
})
export class CustomBadgeComponent {

  @Input() badgeText: string = 'Badge Text';

}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
  @Input({ required: true }) title: string = "";
  @Input({ required: true }) myColor: string = "";
}

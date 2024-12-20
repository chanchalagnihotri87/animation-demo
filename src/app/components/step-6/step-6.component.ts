import { Component, output } from '@angular/core';
import { mediumZoomInAnimation } from '../../animations/mediumZoomInAnimation';

@Component({
  selector: 'app-step-6',
  standalone: true,
  imports: [],
  templateUrl: './step-6.component.html',
  styleUrl: './step-6.component.css',
  animations: [mediumZoomInAnimation],
})
export class Step6Component {
  onMoveNext = output();
  onMovePrevious = output();

  moveNext() {
    this.onMoveNext.emit();
  }

  movePrevious() {
    this.onMovePrevious.emit();
  }
}

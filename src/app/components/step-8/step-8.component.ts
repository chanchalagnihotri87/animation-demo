import { Component, output } from '@angular/core';
import { mediumZoomInAnimation } from '../../animations/mediumZoomInAnimation';

@Component({
  selector: 'app-step-8',
  standalone: true,
  imports: [],
  templateUrl: './step-8.component.html',
  animations: [mediumZoomInAnimation],
})
export class Step8Component {
  onMoveToStart = output();

  moveToStart() {
    this.onMoveToStart.emit();
  }
}

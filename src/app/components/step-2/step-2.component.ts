import { Component, output } from '@angular/core';
import { zoomInAnimation } from '../../animations/zoomInAnimation';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [],
  templateUrl: './step-2.component.html',
  animations: [zoomInAnimation],
})
export class Step2Component {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

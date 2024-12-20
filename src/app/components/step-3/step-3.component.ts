import { Component, output } from '@angular/core';
import { pendulumAnimation } from '../../animations/pendulumAnimation';

@Component({
  selector: 'app-step-3',
  standalone: true,
  imports: [],
  templateUrl: './step-3.component.html',
  animations: [pendulumAnimation],
})
export class Step3Component {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

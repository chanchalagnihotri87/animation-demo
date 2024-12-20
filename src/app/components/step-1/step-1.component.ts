import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [],
  templateUrl: './step-1.component.html',
})
export class Step1Component {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

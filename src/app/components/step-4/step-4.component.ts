import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-4',
  standalone: true,
  imports: [],
  templateUrl: './step-4.component.html',
})
export class Step4Component {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

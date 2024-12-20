import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-5',
  standalone: true,
  imports: [],
  templateUrl: './step-5.component.html',
})
export class Step5Component {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-5-bottom-section',
  standalone: true,
  imports: [],
  templateUrl: './step-5-bottom-section.component.html',
})
export class Step5BottomSectionComponent {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

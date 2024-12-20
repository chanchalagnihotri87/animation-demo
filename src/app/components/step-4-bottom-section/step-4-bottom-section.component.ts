import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-4-bottom-section',
  standalone: true,
  imports: [],
  templateUrl: './step-4-bottom-section.component.html',
  styleUrl: './step-4-bottom-section.component.css',
})
export class Step4BottomSectionComponent {
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }
}

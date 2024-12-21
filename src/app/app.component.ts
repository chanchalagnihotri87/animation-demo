import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { mediumZoomInAnimation } from './animations/mediumZoomInAnimation';
import { pendulumAnimation } from './animations/pendulumAnimation';
import { zoomInAnimation } from './animations/zoomInAnimation';
import { FooterDetailComponent } from './components/footer-detail/footer-detail.component';
import { Step1Component } from './components/step-1/step-1.component';
import { Step2Component } from './components/step-2/step-2.component';
import { Step3Component } from './components/step-3/step-3.component';
import { Step4BottomSectionComponent } from './components/step-4-bottom-section/step-4-bottom-section.component';
import { Step4Component } from './components/step-4/step-4.component';
import { Step5BottomSectionComponent } from './components/step-5-bottom-section/step-5-bottom-section.component';
import { Step5Component } from './components/step-5/step-5.component';
import { Step6Component } from './components/step-6/step-6.component';
import { Step7Component } from './components/step-7/step-7.component';
import { Step8Component } from './components/step-8/step-8.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [
    NgIf,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    Step6Component,
    Step7Component,
    Step8Component,
    FooterDetailComponent,
    Step4BottomSectionComponent,
    Step5BottomSectionComponent,
  ],
  animations: [zoomInAnimation, mediumZoomInAnimation, pendulumAnimation],
})
export class AppComponent {
  title = 'Animation-Demo';
  step = 1;

  footerVisible = false;

  get displayFooter() {
    return this.footerVisible || (this.step > 1 && this.step < 5);
  }

  get displayWizard() {
    return this.step < 6;
  }

  showFooter() {
    if (this.step == 1) {
      this.footerVisible = true;
    }
  }

  hideFooter() {
    this.footerVisible = false;
  }

  moveToStart() {
    this.step = 1;
  }

  movePrevious() {
    this.step -= 1;
  }

  moveNext() {
    this.step = this.step + 1;
  }

  moveToStepFour() {
    this.step = 4;
  }

  moveToStepEight() {
    this.step = 8;
  }

  showStep(stepNo: number) {
    return this.step == stepNo;
  }
}

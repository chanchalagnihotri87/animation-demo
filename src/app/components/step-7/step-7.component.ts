import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';
import { flowOutLeftAnimation } from '../../animations/flowOutLeftAnimation';
import { flowOutLeftMiddleAnimation } from '../../animations/flowOutLeftMiddleAnimation';
import { flowOutRightAnimation } from '../../animations/flowOutRightAnimation';
import { flowOutRightMiddleAnimation } from '../../animations/flowOutRightMiddleAnimation';
import { flowOutTopLeftAnimation } from '../../animations/flowOutTopLeftAnimation';
import { flowOutTopMiddleAnimation } from '../../animations/flowOutTopMiddleAnimation';
import { zoomInMessageAnimation } from '../../animations/zoomInMessageAnimation';

@Component({
  selector: 'app-step-7',
  standalone: true,
  imports: [NgIf],
  templateUrl: './step-7.component.html',
  styleUrl: './step-7.component.css',
  animations: [
    flowOutLeftAnimation,
    flowOutLeftMiddleAnimation,
    flowOutRightAnimation,
    flowOutRightMiddleAnimation,
    flowOutTopMiddleAnimation,
    flowOutTopLeftAnimation,
    zoomInMessageAnimation,
  ],
})
export class Step7Component {
  showImages = true;
  showMiddleStar = true;
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }

  hideImages() {
    this.showImages = false;
    // this.showMiddleStar = true;
  }

  hideMiddleStar() {
    this.showMiddleStar = false;
  }
}

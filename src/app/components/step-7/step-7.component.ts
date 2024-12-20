import {
  animate,
  group,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { NgIf } from '@angular/common';
import { Component, output } from '@angular/core';

@Component({
  selector: 'app-step-7',
  standalone: true,
  imports: [NgIf],
  templateUrl: './step-7.component.html',
  animations: [
    trigger('flow-out-left', [
      transition('void => *', [
        group([
          animate(
            10,
            style({
              transform: 'scale(0) translateY(200px)',
            })
          ),
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.2) translateX(-60px) translateY(-5px)',
                offset: 0.3,
              }),
              style({
                transform: 'scale(0.6) translateX(-120px) translateY(-10px)',
                offset: 0.6,
              }),
              style({
                transform: 'scale(1) translateX(-180px) translateY(-15px)',
                display: 'none',
                offset: 0.9,
              }),
              style({
                transform: 'scale(0) translateX(-180px) ',
                display: 'none',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('flow-out-left-middle', [
      transition('void => *', [
        group([
          animate(
            10,
            style({
              transform: 'scale(0)',
            })
          ),
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.2) translateX(-90px) translateY(-30px)',
                offset: 0.3,
              }),
              style({
                transform: 'scale(0.6) translateX(-160px) translateY(-60px)',
                offset: 0.6,
              }),
              style({
                transform: 'scale(1)  translateX(-180px)  translateY(-90px)',
                display: 'none',
                offset: 0.9,
              }),
              style({
                transform: 'scale(0) ',
                display: 'none',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('flow-out-right', [
      transition('void => *', [
        group([
          animate(
            10,
            style({
              transform: 'scale(0)',
              offset: 0,
            })
          ),
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.2) translateX(60px) translateY(-5px)',
                offset: 0.3,
              }),
              style({
                transform: 'scale(0.6) translateX(120px) translateY(-5px)',
                offset: 0.6,
              }),
              style({
                transform: 'scale(1) translateX(180px) translateY(-15px)',
                display: 'none',
                offset: 0.9,
              }),
              style({
                transform: 'scale(0)',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('flow-out-right-middle', [
      transition('void => *', [
        group([
          animate(
            10,
            style({
              transform: 'scale(0)',
              offset: 0,
            })
          ),
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.2) translateX(60px) translateY(-30px)',
                offset: 0.3,
              }),
              style({
                transform: 'scale(0.6) translateX(120px) translateY(-60px)',
                offset: 0.6,
              }),
              style({
                transform: 'scale(1) translateX(180px) translateY(-90px)',
                display: 'none',
                offset: 0.9,
              }),
              style({
                transform: 'scale(0)',
                display: 'none',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('flow-out-top-middle', [
      transition('void => *', [
        group([
          animate(
            10,
            style({
              transform: 'scale(0)',
              offset: 0,
            })
          ),
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.2) translateX(0px) translateY(-30px)',
                offset: 0.3,
              }),
              style({
                transform: 'scale(0.6) translateX(10px) translateY(-60px)',
                offset: 0.6,
              }),
              style({
                transform: 'scale(1) translateX(0px) translateY(-90px)',
                display: 'none',
                offset: 0.9,
              }),
              style({
                transform: 'scale(0)',
                display: 'none',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('flow-out-top-left', [
      transition('void => *', [
        group([
          animate(
            2000,
            keyframes([
              style({
                transform: 'scale(0.7)',
                offset: 0.01,
              }),
              style({
                transform: 'scale(1)',
                offset: 0.25,
              }),
              style({
                transform: 'translateX(-15px) translateY(-20px)',
                offset: 0.4,
              }),
              style({
                transform: 'translateX(-65px) translateY(-63px)',
                offset: 0.6,
              }),
              style({
                transform: 'translateX(-115px) translateY(-113px)',
                offset: 0.8,
              }),
              style({
                transform: 'translateX(-165px) translateY(-180px)',
                offset: 0.98,
              }),
              style({
                display: 'none',
                offset: 1,
              }),
            ])
          ),
        ]),
      ]),
    ]),
    trigger('zoomInMessage', [
      transition('void => *', [
        animate(
          4000,
          keyframes([
            style({
              transform: 'scale(0.5)',
              offset: 0,
            }),
            style({
              transform: 'scale(1.1)',
              offset: 0.5,
            }),
            style({
              transform: 'scale(1)',
              offset: 0.6,
            }),
            style({
              transform: 'scale(1)',
              offset: 1,
            }),
          ])
        ),
      ]),
    ]),
  ],
})
export class Step8Component {
  showImages = true;
  showMiddleStar = false;
  onMoveNext = output();

  moveNext() {
    this.onMoveNext.emit();
  }

  hideImages() {
    this.showImages = false;
    this.showMiddleStar = true;
  }

  hideMiddleStar() {
    this.showMiddleStar = false;
  }
}

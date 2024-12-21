import {
  animate,
  group,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const flowOutTopLeftAnimation = trigger('flowOutTopLeftAnimation', [
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
            transform: 'scale(0.2)',
            offset: 0.2,
          }),
          style({
            transform: 'scale(0.4) translateX(-15px) translateY(-20px)',
            offset: 0.4,
          }),
          style({
            transform: 'scale(0.6) translateX(-65px) translateY(-63px)',
            offset: 0.6,
          }),
          style({
            transform: 'scale(0.8) translateX(-115px) translateY(-113px)',
            offset: 0.8,
          }),
          style({
            transform: 'scale(1) translateX(-165px) translateY(-180px)',
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
]);

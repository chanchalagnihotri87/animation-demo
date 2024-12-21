import {
  animate,
  group,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const flowOutRightMiddleAnimation = trigger(
  'flowOutRightMiddleAnimation',
  [
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
  ]
);

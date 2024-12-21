import {
  animate,
  group,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const flowOutLeftAnimation = trigger('flowOutLeftAnimation', [
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
]);

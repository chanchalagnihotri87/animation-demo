import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';

export const zoomInMessageAnimation = trigger('zoomInMessageAnimation', [
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
]);

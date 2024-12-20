import { animate, style, transition, trigger } from '@angular/animations';
export const mediumZoomInAnimation = trigger('mediumZoomInAnimation', [
  transition('void => *', [
    style({
      transform: 'scale(0.9)',
    }),
    animate(
      500,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
]);

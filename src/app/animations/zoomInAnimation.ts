import { animate, style, transition, trigger } from '@angular/animations';
export const zoomInAnimation = trigger('zoomInAnimation', [
  transition('void => *', [
    style({
      transform: 'scale(0.5)',
    }),
    animate(
      500,
      style({
        transform: 'scale(1)',
      })
    ),
  ]),
]);

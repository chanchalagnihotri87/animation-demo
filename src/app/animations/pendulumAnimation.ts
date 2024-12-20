import {
  animate,
  keyframes,
  style,
  transition,
  trigger,
} from '@angular/animations';
export const pendulumAnimation = trigger('pendulumAnimation', [
  transition(
    'void => *',
    animate(
      2200,
      keyframes([
        style({
          rotate: 'z -30deg',
          offset: 0.1,
        }),
        style({
          rotate: 'z 30deg',
          offset: 0.3,
        }),
        style({
          rotate: 'z -30deg',
          offset: 0.5,
        }),
        style({
          rotate: 'z 0deg',
          offset: 0.6,
        }),
        style({
          transform: 'scale(0.8)',
          offset: 0.8,
        }),
        style({
          transform: 'scale(1)',
          offset: 1,
        }),
      ])
    )
  ),
]);

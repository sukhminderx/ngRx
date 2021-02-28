import { createAction, props } from '@ngrx/store';

export const incHome = createAction('[Scoreboard Page] Home Score');
export const incAway = createAction('[Scoreboard Page] Away Score');
export const incBoth = createAction('[Scoreboard Page] Set Scores');
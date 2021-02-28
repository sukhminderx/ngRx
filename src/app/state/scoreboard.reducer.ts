import { Action, createReducer, on } from '@ngrx/store';
import * as ScoreboardPageActions from './scoreboard.actions';

export interface ScoreState {
  home: number;
  away: number;
}

export const initialState: ScoreState = {
    home: 0,
    away: 0,
  };

const scoreboardReducer = createReducer(
    initialState,
    on(ScoreboardPageActions.incHome, state => ({ ...state, home: state.home + 1 })),
    on(ScoreboardPageActions.incAway, state => ({ ...state, away: state.away + 1 })),
    on(ScoreboardPageActions.incBoth, (state) => ({ ...state, home: state.home + 1, away: state.away + 1 }))
  );
  
  export function reducer(state: ScoreState | undefined, action: Action) {
    return scoreboardReducer(state, action);
  }

  export const scoreboardFeatureKey = 'game';
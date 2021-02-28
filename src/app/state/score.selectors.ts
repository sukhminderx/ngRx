import { createSelector, createFeatureSelector } from "@ngrx/store";
import { AppState } from "./app.state";
import { ScoreState } from "./scoreboard.reducer";

export const selectScore = createFeatureSelector<
  AppState,
  ScoreState
>("game");

export const selectFeatureHome = createSelector(
  selectScore,
  (state: ScoreState) => state.home
);

export const selectFeatureAway = createSelector(
  selectScore,
  (state: ScoreState) => state.away
);
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import * as fromScoreboard from '../state/scoreboard.reducer';
import { ScoreboardComponent } from './scoreboard.component';

@NgModule({
  declarations: [ScoreboardComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
  ],
  exports: [ScoreboardComponent]
})
export class ScoreboardModule {}
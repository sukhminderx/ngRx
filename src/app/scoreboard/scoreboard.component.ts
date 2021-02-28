import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { selectFeatureAway, selectFeatureHome } from '../state/score.selectors';

import { incHome, incAway, incBoth  } from '../state/scoreboard.actions';


@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css'],
})
export class ScoreboardComponent {
  home$ = this.store.pipe(select(selectFeatureHome));
  away$ = this.store.pipe(select(selectFeatureAway));
  constructor(
    private store: Store
  ) {}

  
  incHome() {
    this.store.dispatch(incHome());
  }

  incAway() {
    this.store.dispatch(incAway());
  }

  incBoth() {
    this.store.dispatch(incBoth());
  }
}


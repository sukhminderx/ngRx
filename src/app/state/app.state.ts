import { Book } from '../book-list/books.model';
import { ScoreState } from './scoreboard.reducer';

export interface AppState {
  books: ReadonlyArray<Book>;
  collection: ReadonlyArray<string>;
  game: ScoreState;
}
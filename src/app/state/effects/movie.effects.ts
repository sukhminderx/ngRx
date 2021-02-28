import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { GoogleBooksService } from '../../book-list/books.service';

@Injectable()
export class MovieEffects {
  loadBooks$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Dummy Page] Load Books'),
      mergeMap(() =>
        this.googleBooksService.getBooks().pipe(
          map((books) => {
            return{
              type: '[Book List/API] Retrieve Books Success',
              payload: books,
            };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private googleBooksService: GoogleBooksService
  ) {}
}

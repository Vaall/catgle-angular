import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  error: {};

  private allKittyUrl = 'http://localhost:5000/api/kitties/all';
  private byAgeKittyUrl = 'http://localhost:5000/api/kitties/by-age';
  private byNameOrBreedKittyUrl = 'http://localhost:5000/api/kitties/by-name-or-breed';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient, ) { }

  handleSearchCall(searchType, searchValue): Observable<{}> {
    if (searchType === 'all') {
      return this.http.post(this.allKittyUrl, this.httpOptions).pipe(
        tap(result => result),
        catchError(err => err));
    }
    if (searchType === 'particular') {
      if (searchValue.length) {
        if (parseInt(searchValue).toString() === searchValue) {
          return this.http.post(this.byAgeKittyUrl, { data: searchValue }, this.httpOptions).pipe(
            tap(result => result),
            catchError(err => err));
        }
        if (searchValue) {
          return this.http.post(this.byNameOrBreedKittyUrl, { data: searchValue }, this.httpOptions).pipe(
            tap(result => result),
            catchError(err => err));
        }
      }
    }
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { RevenueAdjustment } from './main-page/constants';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  taxonomy$: Observable<any>;
  taxonomySubject$ = new BehaviorSubject<any>(null);
  revenueItems$: Observable<RevenueAdjustment[]>;
  revenueItemsSubject$ = new BehaviorSubject<RevenueAdjustment[]>(null);

  constructor(
    private httpService: HttpClient
  ) {
    this.taxonomy$ = this.taxonomySubject$.asObservable();
    this.revenueItems$ = this.revenueItemsSubject$.asObservable();
  }

  public loadTaxonomy() {
    this.httpService.get('http://localhost:3000/get-taxonomy').subscribe((value) => {
      this.taxonomySubject$.next(value);
    });
  }

  public loadRevenueAdjustments() {
    const result = this.httpService.get('http://localhost:3000/revenue-adjustments/get-all').subscribe((value: any[]) => {
      this.revenueItemsSubject$.next(value);
    });

    return result;
  }

  public updateAll(data: RevenueAdjustment[]) {
    const result = this.httpService.post('http://localhost:3000/revenue-adjustments/update-all', data).subscribe((value: any[]) => {
      // this.revenueItemsSubject$.next(value);
    });

    return result;
  }
}

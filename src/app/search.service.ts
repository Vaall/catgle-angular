import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private allKittyUrl = 'http://localhost:5000/api/kitties/all';
  private byAgeKittyUrl = 'http://localhost:5000/api/kitties/by-age';
  private byNameOrBreedKittyUrl = 'http://localhost:5000/api/kitties/by-name-or-breed';
  private data: object;

  handleSearchCall(searchType: string, searchValue: string) {
    this.data = { data: searchValue };

    if (searchType === 'all') {
      return axios.post(this.allKittyUrl)
        .then((response) => {
          return response.data;
        });
    }
    if (searchType === 'particular') {
      if (parseInt(searchValue).toString() === searchValue) {
        return axios.post(this.byAgeKittyUrl, this.data)
          .then((response) => {
            return response.data;
          });
      }
      return axios.post(this.byNameOrBreedKittyUrl, this.data)
        .then((response) => {
          return response.data;
        });
    }
  }
}

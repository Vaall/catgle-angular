import { Component, OnInit, OnChanges } from '@angular/core';
import { SearchService } from '../search.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Kitty } from '../kitty';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isLoading: boolean;
  isObject: boolean;
  results: Kitty[];
  noResults: boolean = false;
  error: object = { message: '', status: false };
  searchInput: string = '';
  faSpinner = faSpinner;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getInputValue($event) {
    this.searchInput = $event;
  }

  handleSearchClick($event) {
    this.noResults = false;
    this.isLoading = true;

    this.searchService.handleSearchCall($event, this.searchInput)
      .then((response) => {
        if (response.length) {
          this.results = response;
        } else {
          this.noResults = true;
        }
      })
      .catch((err) => {
        this.error = { message: err, status: true };
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}

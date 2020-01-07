import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isLoading: boolean;
  results: {};
  searchInput: string = '';
  faSpinner = faSpinner;
  constructor(private searchService: SearchService) { }

  ngOnInit() {
  }

  getInputValue($event) {
    this.searchInput = $event;
  }

  handleSearchClick($event) {
    this.isLoading = true;
    this.searchService.handleSearchCall($event, this.searchInput)
      .subscribe(results => this.results = results)
      .add(() => this.isLoading = false)
  }
}

import { Component, OnInit, Output } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.scss']
})
export class SearcherComponent implements OnInit {
  @Output() passInputValue = new EventEmitter<string>();
  @Output() passButtonHandler = new EventEmitter<string>();
  inputValue

  faSearch = faSearch;

  constructor() { }

  ngOnInit() {
  }

  onInputChange(value) {
    this.passInputValue.emit(value.target.value);
  }

  onSearchClicked(value) {
    this.passButtonHandler.emit(value.target.id);
  }
}

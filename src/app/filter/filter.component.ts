import {
  Component,
  EventEmitter,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css'],
})
export class FilterComponent {
  changedSearchValue!: number;
  @Output() changedSearch = new EventEmitter<number>();
  constructor() {}
  searchValueChanged() {
    this.changedSearch.emit(this.changedSearchValue);
  }
}

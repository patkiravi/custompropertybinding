import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

enteredSearchData:string="ravi";

@Output() someEvent:EventEmitter<string>=new EventEmitter<string>();

searchTextChanged(){
this.someEvent.emit(this.enteredSearchData);
}

}

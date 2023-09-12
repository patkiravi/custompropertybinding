import { Component, Input,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  @Input() all:number=0;
  @Input() free:number=0;
  @Input() premium:number=0;

  radioButtonSelected:string='All';


@Output() radioButtonClicked:EventEmitter<string>=new EventEmitter<string>();

buttonClicked(){
  
  this.radioButtonClicked.emit(this.radioButtonSelected);
}


}

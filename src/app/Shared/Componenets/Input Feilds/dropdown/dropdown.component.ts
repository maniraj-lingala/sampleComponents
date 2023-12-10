import { Component, DoCheck,OnChanges,OnDestroy,OnInit, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent{
  @Input() placeholder!:string;
  @Input() dropdownList!:any;
  @Output() selectedValueChange=new EventEmitter();
  selectedvalue!:string;
  onSelectionChange() 
  {
      console.log(this.selectedvalue);
      this.selectedValueChange.emit(this.selectedvalue);
  }
}

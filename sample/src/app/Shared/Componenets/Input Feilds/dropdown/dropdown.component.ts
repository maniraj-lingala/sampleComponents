import { Component, EventEmitter, Input, Output } from '@angular/core';

import {MatSelectModule} from '@angular/material/select';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [MatSelectModule],
  templateUrl: './dropdown.component.html'
})
export class DropdownComponent {
  @Input() placeholder!:string;
  @Input() dropdownList!:any;
  @Output() return=new EventEmitter();
  selectedvalue:string='';
  ngOnInit():void
  {
    this.return.emit(this.selectedvalue);
  }
  constructor()
  {
  }
}

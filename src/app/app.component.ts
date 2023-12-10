import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

/*Component imports  */
import { DatePickerComponent } from './Shared/Componenets/Input Feilds/date-picker/date-picker.component';
import { InputfeildComponent } from "./Shared/Componenets/Input Feilds/inputfeildText/inputfeild.component";
import { DropdownComponent } from "./Shared/Componenets/Input Feilds/dropdown/dropdown.component";

/* JSON imports */
import managers from "../assets/JSON/managers.json";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    imports: [CommonModule, RouterOutlet, DatePickerComponent, InputfeildComponent, DropdownComponent]
})
export class AppComponent implements OnChanges{
  title = 'sample';
  dropdownList:any=managers['Managers List'];
  dropdownName:string=managers.label;
  managerSelected:string='default';
  dropdownSelected!:number;
  ngOnChanges(changes:SimpleChanges):void
  {
      if(changes['dropdownSelected'])
      {
        console.log(this.dropdownSelected);
      }
  }
  ngonDestroy()
  {
    console.log(this.dropdownSelected);
  }
}

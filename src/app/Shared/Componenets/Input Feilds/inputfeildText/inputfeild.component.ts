import { Component} from '@angular/core';
import { Output, Input,EventEmitter } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import {MatInputModule} from '@angular/material/input';


@Component({
  selector: 'app-inputfeild',
  templateUrl: './inputfeild.component.html',
  standalone:true,
  imports:[MatFormFieldModule,FormsModule,MatInputModule]
})
export class InputfeildComponent 
{
  value:string='';
  @Input() title!:string;
  @Output() returnValue=new EventEmitter<string>();
}

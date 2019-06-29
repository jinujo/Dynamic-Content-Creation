import { Component,OnInit  } from '@angular/core';
import { FormGroup, FormControl,FormArray,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit   {
  dynamicArrayForm:FormGroup;
constructor(private fb:FormBuilder){
this.dynamicArrayForm=this.fb.group({
  codetype:[''],
  codevalue:[''],
  codeitems:this.fb.array([])
})
}
ngOnInit(){
 
}
CreateItems(){
  return this.fb.group({
    code:'',
    label:''
  })
}
}

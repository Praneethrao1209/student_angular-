import { Component } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import {HttpClient} from '@angular/common/http'
import { ConfigServiceService } from './config-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private student:ConfigServiceService){}   
  
  title = 'Forms';
  // favoriteColorControl = new FormControl('green',[Validators.minLength(5),Validators.pattern(/[!@#$%^&*(),.?":{}|<>]/g)]);

  // sample(){
  //   console.log(this.favoriteColorControl);
  // }
  values(){
  //   console.log(name);
  //   console.log(this.age);
  //   console.log(this.gpa);
  //   console.log(this.city);
  //   console.log(this.working);
  console.log(this.studentForm);
  console.log(this.studentForm.errors);

  console.log(this.studentForm.controls['name']);

  console.warn(this.studentForm.value);

  }
  
  studentForm = new FormGroup(
    {
  name:new FormControl(''),
  age: new FormControl(''),
  gpa:new FormControl(''),
  city: new FormControl(''),
  working: new FormControl('')
}
)
saveData(){
 this.student.fakeclick(this.studentForm.value).subscribe(res=>{
});
}
}

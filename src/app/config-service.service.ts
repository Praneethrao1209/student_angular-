import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormControl, Validators, FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ConfigServiceService {

  constructor(private http:HttpClient) {}

  fakeclick(body:any){
    const url:string='https://639a6696d51415019734f42a.mockapi.io/api/v1/students';
   return this.http.post(url,body);
    
  }
  getStudents(){
    const url:string='https://639a6696d51415019734f42a.mockapi.io/api/v1/students';
    return this.http.get(url);
  }
}

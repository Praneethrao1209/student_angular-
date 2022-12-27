import { Component, OnInit } from '@angular/core';
import { ConfigServiceService } from '../config-service.service';
import { DataSource } from '@angular/cdk/table';
import { MatTableDataSource } from '@angular/material';


export interface students {
  name: string;
  age: number;
  working: boolean;
  gpa:number;
  city: string;
  id:number;
}

// const ELEMENT_DATA: students[] = [
//     {"name": 'praneeth',"age": 23,"working": true},
//     {"name": 'Bharath',"age": 24,"working": false},
//     {"name": 'pranav',"age": 25,"working": true},
//     {"name": 'vinay',"age": 26,"working": true}
//  ];

@Component({
  selector: 'app-student-display',
  templateUrl: './student-display.component.html',
  styleUrls: ['./student-display.component.css']
})
export class StudentDisplayComponent implements OnInit {
  res: any;
  

  constructor(private student:ConfigServiceService) { }
  dataSource:any=[]
  ngOnInit(): void {
    this.student.getStudents().subscribe(res => {
      console.log(res);
      this.dataSource= this.res;
    })
  }
  displayedColumns: string[] = [ 'name', 'age', 'gpa','city','working','id'];
  
}

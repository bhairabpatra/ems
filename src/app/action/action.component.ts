import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from '../employeelist.service';

@Component({
  selector: 'app-action',
  templateUrl: './action.component.html',
  styleUrls: ['./action.component.css']
})
export class ActionComponent implements OnInit {

public allemplIst: any;
  constructor(private emplist : EmployeelistService) { }

  ngOnInit(): void {
    this.getEMployee();
  }

  public getEMployee(){
    this.allemplIst = this.emplist.allEmp
    console.log( this.allemplIst.length)
  }

}

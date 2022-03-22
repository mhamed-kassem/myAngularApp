import { Component, OnInit } from '@angular/core';
import { EmployeesService } from '../employees.service';
@Component({
  selector: 'app-employee-component',
  templateUrl: './employee-component.component.html',
  styleUrls: ['./employee-component.component.scss']
})
export class EmployeeComponentComponent implements OnInit {
  
  constructor(private EmpService:EmployeesService) { }
  EmployeeList:any = this.EmpService.getEmployeeList()
  ngOnInit(): void {
  }

}

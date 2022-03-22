import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor() { }

  getEmployeeList(){
    return[
      {"id":"1","name":"saad","age":"45"},
      {"id":"2","name":"amged","age":"12"},
      {"id":"3","name":"gamal","age":"26"},
      {"id":"4","name":"ahmed","age":"30"}
    ]
  }
}

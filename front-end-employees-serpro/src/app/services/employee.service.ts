import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Response } from '../models/Response';
import { Employee } from '../models/Employee';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.baseApiUrl}/Employee`;
  constructor(private http: HttpClient) {}

  // End point to get the employee
  GetEmployees(): Observable<Response<Employee[]>> {
    return this.http.get<Response<Employee[]>>(this.apiUrl);
  }
  GetEmployee(id: number): Observable<Response<Employee>> {
    return this.http.get<Response<Employee>>(`${this.apiUrl}/${id}`);
  }

  // End point to post new employees
  CreateEmployee(employee: Employee): Observable<Response<Employee[]>> {
    return this.http.post<Response<Employee[]>>(`${this.apiUrl}`, employee);
  }

  EditEmployee(employee: Employee): Observable<Response<Employee[]>> {
    return this.http.put<Response<Employee[]>>(`${this.apiUrl}`, employee);
  }

  ShutDownEmployee(id: number): Observable<Response<Employee[]>> {
    return this.http.put<Response<Employee[]>>(
      `${this.apiUrl}/shutDownEmployee?id=${id}`,
      id
    );
  }
  DeleteEmployee(id: number): Observable<Response<Employee[]>> {
    return this.http.delete<Response<Employee[]>>(`${this.apiUrl}?id=${id}`);
  }
}

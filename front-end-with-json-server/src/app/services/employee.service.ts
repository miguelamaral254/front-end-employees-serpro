import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../models/Response';
import { Employee } from '../models/Employee';
import { catchError, map, switchMap } from 'rxjs/operators'; 

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  private apiUrl = `${environment.baseApiUrl}/employees`;

  constructor(private http: HttpClient) {}

  GetEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      map((employees: any[]) => {
        return employees.map(employee => ({
          ...employee,
          id: +employee.id 
        }));
      })
    );
  }
  
  GetEmployee(id: number): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/${id}`).pipe(
      map((employee: any) => ({
        ...employee,
        id: +employee.id
      }))
    );
  }

  CreateEmployee(employee: Employee): Observable<Employee> {
    return this.http.get<Employee[]>(this.apiUrl).pipe(
      map(employees => {
        const maxId = employees.reduce((max, emp) => (emp.id && emp.id > max ? emp.id : max), 0);
        employee.id = maxId + 1;
        return employee;
      }),
      switchMap(newEmployee => this.http.post<Employee>(this.apiUrl, newEmployee)),
      catchError(error => {
        console.error('Error creating employee:', error);
        return throwError('Failed to create employee. Please try again.');
      })
    );
  }

  EditEmployee(employee: Employee): Observable<Employee> {
    if (employee.id === undefined || typeof employee.id !== 'number') {
      return throwError("Invalid employee ID");
    }
    return this.http.put<Employee>(`${this.apiUrl}/${employee.id}`, employee);
  }

  ShutDownEmployee(id: number): Observable<Response<Employee[]>> {
    return this.http.put<Response<Employee[]>>(`${this.apiUrl}/${id}`, { active: false });
  }

  DeleteEmployee(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}

import { Injectable } from '@nestjs/common';
import { Employee } from './employee.model';

@Injectable()
export class EmployeesService {
  private employees: Employee[] = [];

  registerEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  updateEmployee(username: string, newData: Partial<Employee>): boolean {
    const employeeIndex = this.employees.findIndex((e) => e.username === username);

    if (employeeIndex === -1) {
      return false;
    }

    this.employees[employeeIndex] = { ...this.employees[employeeIndex], ...newData };
    return true;
  }

  deleteEmployee(username: string): boolean {
    const employeeIndex = this.employees.findIndex((e) => e.username === username);

    if (employeeIndex === -1) {
      return false;
    }

    this.employees.splice(employeeIndex, 1);
    return true;
  }

  findEmployee(username: string): Employee {
    return this.employees.find((e) => e.username === username);
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }
}

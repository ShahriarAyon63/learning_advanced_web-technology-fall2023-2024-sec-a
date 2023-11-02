import { EmployeesService } from './employees.service';
import { Employee } from './employee.model';
export declare class EmployeesController {
    private employeesService;
    constructor(employeesService: EmployeesService);
    registerEmployee(employeeData: Employee): string;
    updateEmployee(username: string, newData: Partial<Employee>): "Employee information updated" | "Employee not found";
    deleteEmployee(username: string): "Employee not found" | "Employee deleted";
    searchEmployee(username: string): Employee | "Employee not found";
    listEmployees(): Employee[];
}

import { Employee } from './employee.model';
export declare class EmployeesService {
    private employees;
    registerEmployee(employee: Employee): void;
    updateEmployee(username: string, newData: Partial<Employee>): boolean;
    deleteEmployee(username: string): boolean;
    findEmployee(username: string): Employee;
    getAllEmployees(): Employee[];
}

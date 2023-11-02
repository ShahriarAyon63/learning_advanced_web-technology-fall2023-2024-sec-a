import { Controller, Post, Body, Put, Delete, Get, Param, Query } from '@nestjs/common';
import { EmployeesService } from './employees.service';
import { Employee } from './employee.model';

@Controller('employees')
export class EmployeesController {
  constructor(private employeesService: EmployeesService) {}

  @Post('register')
  registerEmployee(@Body() employeeData: Employee) {
    this.employeesService.registerEmployee(employeeData);
    return 'Employee registered successfully';
  }

  @Put('update/:username')
  updateEmployee(@Param('username') username: string, @Body() newData: Partial<Employee>) {
    const success = this.employeesService.updateEmployee(username, newData);
    if (success) {
      return 'Employee information updated';
    } else {
      return 'Employee not found';
    }
  }

  @Delete('delete/:username')
  deleteEmployee(@Param('username') username: string) {
    const success = this.employeesService.deleteEmployee(username);
    if (success) {
      return 'Employee deleted';
    } else {
      return 'Employee not found';
    }
  }

  @Get('search')
  searchEmployee(@Query('username') username: string) {
    const employee = this.employeesService.findEmployee(username);
    if (employee) {
      return employee;
    } else {
      return 'Employee not found';
    }
  }

  @Get('list')
  listEmployees() {
    return this.employeesService.getAllEmployees();
  }
}

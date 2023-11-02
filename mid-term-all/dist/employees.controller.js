"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmployeesController = void 0;
const common_1 = require("@nestjs/common");
const employees_service_1 = require("./employees.service");
const employee_model_1 = require("./employee.model");
let EmployeesController = class EmployeesController {
    constructor(employeesService) {
        this.employeesService = employeesService;
    }
    registerEmployee(employeeData) {
        this.employeesService.registerEmployee(employeeData);
        return 'Employee registered successfully';
    }
    updateEmployee(username, newData) {
        const success = this.employeesService.updateEmployee(username, newData);
        if (success) {
            return 'Employee information updated';
        }
        else {
            return 'Employee not found';
        }
    }
    deleteEmployee(username) {
        const success = this.employeesService.deleteEmployee(username);
        if (success) {
            return 'Employee deleted';
        }
        else {
            return 'Employee not found';
        }
    }
    searchEmployee(username) {
        const employee = this.employeesService.findEmployee(username);
        if (employee) {
            return employee;
        }
        else {
            return 'Employee not found';
        }
    }
    listEmployees() {
        return this.employeesService.getAllEmployees();
    }
};
exports.EmployeesController = EmployeesController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [employee_model_1.Employee]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "registerEmployee", null);
__decorate([
    (0, common_1.Put)('update/:username'),
    __param(0, (0, common_1.Param)('username')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "updateEmployee", null);
__decorate([
    (0, common_1.Delete)('delete/:username'),
    __param(0, (0, common_1.Param)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "deleteEmployee", null);
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "searchEmployee", null);
__decorate([
    (0, common_1.Get)('list'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EmployeesController.prototype, "listEmployees", null);
exports.EmployeesController = EmployeesController = __decorate([
    (0, common_1.Controller)('employees'),
    __metadata("design:paramtypes", [employees_service_1.EmployeesService])
], EmployeesController);
//# sourceMappingURL=employees.controller.js.map
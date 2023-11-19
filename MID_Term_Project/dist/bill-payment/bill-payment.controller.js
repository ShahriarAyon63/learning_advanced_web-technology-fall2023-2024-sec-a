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
exports.BillPaymentController = void 0;
const common_1 = require("@nestjs/common");
const bill_payment_service_1 = require("./bill-payment.service");
const bill_payment_dto_1 = require("./dto/bill-payment.dto");
let BillPaymentController = class BillPaymentController {
    constructor(billPaymentService) {
        this.billPaymentService = billPaymentService;
    }
    async payBill(billPaymentDto) {
        return this.billPaymentService.payBill(billPaymentDto);
    }
};
exports.BillPaymentController = BillPaymentController;
__decorate([
    (0, common_1.Post)('pay'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [bill_payment_dto_1.BillPaymentDto]),
    __metadata("design:returntype", Promise)
], BillPaymentController.prototype, "payBill", null);
exports.BillPaymentController = BillPaymentController = __decorate([
    (0, common_1.Controller)('bill-payment'),
    __metadata("design:paramtypes", [bill_payment_service_1.BillPaymentService])
], BillPaymentController);
//# sourceMappingURL=bill-payment.controller.js.map
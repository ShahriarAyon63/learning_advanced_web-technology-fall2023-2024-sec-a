"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BillPaymentDatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const bill_payment_entity_1 = require("../entities/bill-payment.entity");
let BillPaymentDatabaseModule = class BillPaymentDatabaseModule {
};
exports.BillPaymentDatabaseModule = BillPaymentDatabaseModule;
exports.BillPaymentDatabaseModule = BillPaymentDatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([bill_payment_entity_1.BillPaymentEntity]),
        ],
        exports: [typeorm_1.TypeOrmModule],
    })
], BillPaymentDatabaseModule);
//# sourceMappingURL=bill-payment-database.module.js.map
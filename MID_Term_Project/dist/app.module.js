"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const auth_module_1 = require("./auth/auth.module");
const subscription_module_1 = require("./subscription/subscription.module");
const currency_conversion_module_1 = require("./currency-conversion/currency-conversion.module");
const bill_payment_module_1 = require("./bill-payment/bill-payment.module");
const bill_payment_database_module_1 = require("./bill-payment/database/bill-payment-database.module");
const notification_module_1 = require("./notification/notification.module");
const database_module_1 = require("./database.module");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [auth_module_1.AuthModule, subscription_module_1.SubscriptionModule, currency_conversion_module_1.CurrencyConversionModule, bill_payment_module_1.BillPaymentModule, bill_payment_database_module_1.BillPaymentDatabaseModule, notification_module_1.NotificationModule, database_module_1.DatabaseModule],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map
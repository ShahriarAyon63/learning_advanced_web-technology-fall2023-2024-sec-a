"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const auth_module_1 = require("./auth/auth.module");
const subscription_module_1 = require("./subscription/subscription.module");
const currency_conversion_module_1 = require("./currency-conversion/currency-conversion.module");
const notification_module_1 = require("./notification/notification.module");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const user_entity_1 = require("./auth/entities/user.entity");
const bill_payment_entity_1 = require("./bill-payment/entities/bill-payment.entity");
const currency_conversion_entity_1 = require("./currency-conversion/entities/currency-conversion.entity");
const subscription_entity_1 = require("./subscription/entities/subscription.entity");
const notification_entity_1 = require("./notification/entities/notification.entity");
let DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule;
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                username: 'postgres',
                password: '1234',
                database: 'crab',
                entities: [
                    user_entity_1.User,
                    bill_payment_entity_1.BillPaymentEntity,
                    currency_conversion_entity_1.CurrencyConversionEntity,
                    subscription_entity_1.Subscription,
                    notification_entity_1.NotificationEntity,
                ],
                synchronize: true,
            }),
            auth_module_1.AuthModule,
            subscription_module_1.SubscriptionModule,
            currency_conversion_module_1.CurrencyConversionModule,
            notification_module_1.NotificationModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], DatabaseModule);
//# sourceMappingURL=database.module.js.map
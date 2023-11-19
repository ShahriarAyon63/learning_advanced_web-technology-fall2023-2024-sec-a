
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';
import { BillPaymentModule } from './bill-payment/bill-payment.module';
import { BillPaymentDatabaseModule } from './bill-payment/database/bill-payment-database.module';
import { NotificationModule } from './notification/notification.module';
import { DatabaseModule } from './database.module';

@Module({
  imports: [AuthModule, SubscriptionModule, CurrencyConversionModule, BillPaymentModule, BillPaymentDatabaseModule, NotificationModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

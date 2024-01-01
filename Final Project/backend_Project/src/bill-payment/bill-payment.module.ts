
import { Module } from '@nestjs/common';
import { BillPaymentDatabaseModule } from './database/bill-payment-database.module';
import { BillPaymentEntity } from './entities/bill-payment.entity';
import { BillPaymentController } from './bill-payment.controller';
import { BillPaymentService } from './bill-payment.service';

@Module({
  imports: [BillPaymentDatabaseModule],
  controllers: [BillPaymentController],
  providers: [BillPaymentService],
})
export class BillPaymentModule {}

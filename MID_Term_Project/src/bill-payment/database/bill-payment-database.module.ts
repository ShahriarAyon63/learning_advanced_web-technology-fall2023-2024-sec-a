
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillPaymentEntity } from '../entities/bill-payment.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([BillPaymentEntity]),
  ],
  exports: [TypeOrmModule],
})
export class BillPaymentDatabaseModule {}

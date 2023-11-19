
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillPaymentEntity } from './entities/bill-payment.entity';
import { BillPaymentDto } from './dto/bill-payment.dto';

@Injectable()
export class BillPaymentService {
  constructor(
    @InjectRepository(BillPaymentEntity)
    private readonly billPaymentRepository: Repository<BillPaymentEntity>,
  ) {}

  async payBill(billPaymentDto: BillPaymentDto): Promise<BillPaymentEntity> {
    const { amount, billerId, paymentMethod } = billPaymentDto;

    // Add your business logic for bill payment here

    const paymentRecord = this.billPaymentRepository.create({
      amount,
      billerId,
      paymentMethod,
    });

    return await this.billPaymentRepository.save(paymentRecord);
  }
}

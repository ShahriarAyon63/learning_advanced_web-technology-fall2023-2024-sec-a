
import { Controller, Post, Body } from '@nestjs/common';
import { BillPaymentService } from './bill-payment.service';
import { BillPaymentDto } from './dto/bill-payment.dto';

@Controller('bill-payment')
export class BillPaymentController {
  constructor(private readonly billPaymentService: BillPaymentService) {}

  @Post('pay')
  async payBill(@Body() billPaymentDto: BillPaymentDto) {
    return this.billPaymentService.payBill(billPaymentDto);
  }
}

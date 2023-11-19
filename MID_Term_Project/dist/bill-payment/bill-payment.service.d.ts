import { Repository } from 'typeorm';
import { BillPaymentEntity } from './entities/bill-payment.entity';
import { BillPaymentDto } from './dto/bill-payment.dto';
export declare class BillPaymentService {
    private readonly billPaymentRepository;
    constructor(billPaymentRepository: Repository<BillPaymentEntity>);
    payBill(billPaymentDto: BillPaymentDto): Promise<BillPaymentEntity>;
}

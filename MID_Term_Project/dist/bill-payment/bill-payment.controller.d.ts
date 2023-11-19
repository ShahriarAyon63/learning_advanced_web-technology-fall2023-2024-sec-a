import { BillPaymentService } from './bill-payment.service';
import { BillPaymentDto } from './dto/bill-payment.dto';
export declare class BillPaymentController {
    private readonly billPaymentService;
    constructor(billPaymentService: BillPaymentService);
    payBill(billPaymentDto: BillPaymentDto): Promise<import("./entities/bill-payment.entity").BillPaymentEntity>;
}

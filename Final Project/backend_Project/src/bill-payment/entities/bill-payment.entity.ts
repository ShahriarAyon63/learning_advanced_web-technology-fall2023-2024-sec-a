
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BillPaymentEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column()
  billerId: string;

  @Column()
  paymentMethod: string;

  
}


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class CurrencyConversionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  amount: number;

  @Column({ default: 0 })
  convertedAmount: number;
}


import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class NotificationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userId: number;

  @Column()
  message: string;

  @Column()
  notificationType: string;

  // Add other necessary fields
}

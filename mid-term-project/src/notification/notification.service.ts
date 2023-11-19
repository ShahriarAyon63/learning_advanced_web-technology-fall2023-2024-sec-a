
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { NotificationDto } from './dto/notification.dto';

@Injectable()
export class NotificationService {
  constructor(
    @InjectRepository(NotificationEntity)
    private readonly notificationRepository: Repository<NotificationEntity>,
  ) {}

  async sendNotification(notificationDto: NotificationDto): Promise<NotificationEntity> {
    const { userId, message, notificationType } = notificationDto;

    const notification = this.notificationRepository.create({
      userId,
      message,
      notificationType,
    });

    return await this.notificationRepository.save(notification);
  }

  async getNotifications(userId: number, notificationType?: string): Promise<NotificationEntity[]> {
    const query: any = { userId };
    if (notificationType) {
      query.notificationType = notificationType;
    }

    return await this.notificationRepository.find({ where: query });
  }
}

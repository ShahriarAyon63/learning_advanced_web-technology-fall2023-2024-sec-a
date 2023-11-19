import { Repository } from 'typeorm';
import { NotificationEntity } from './entities/notification.entity';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationService {
    private readonly notificationRepository;
    constructor(notificationRepository: Repository<NotificationEntity>);
    sendNotification(notificationDto: NotificationDto): Promise<NotificationEntity>;
    getNotifications(userId: number, notificationType?: string): Promise<NotificationEntity[]>;
}

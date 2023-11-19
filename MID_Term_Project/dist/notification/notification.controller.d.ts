import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';
export declare class NotificationController {
    private readonly notificationService;
    constructor(notificationService: NotificationService);
    sendNotification(notificationDto: NotificationDto): Promise<import("./entities/notification.entity").NotificationEntity>;
    getNotifications(userId: number, notificationType?: string): Promise<import("./entities/notification.entity").NotificationEntity[]>;
}

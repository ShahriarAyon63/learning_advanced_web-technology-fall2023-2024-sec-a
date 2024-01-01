
import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationDto } from './dto/notification.dto';

@Controller('notification')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Post('send')
  async sendNotification(@Body() notificationDto: NotificationDto) {
    return this.notificationService.sendNotification(notificationDto);
  }

  @Get(':userId')
  async getNotifications(
    @Param('userId') userId: number,
    @Query('notificationType') notificationType?: string,
  ) {
    return this.notificationService.getNotifications(userId, notificationType);
  }
}

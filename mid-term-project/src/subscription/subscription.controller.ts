
import { Controller, Get, Post, Body } from '@nestjs/common';
import { SubscriptionService } from './subscription.service';
import { SubscriptionDto } from './dto/subscription.dto';
import { Subscription } from './entities/subscription.entity';

@Controller('subscription')
export class SubscriptionController {
  constructor(private readonly subscriptionService: SubscriptionService) {}

  @Get()
  getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionService.getAllSubscriptions();
  }

  @Post()
  createSubscription(@Body() subscriptionDto: SubscriptionDto): Promise<Subscription> {
    return this.subscriptionService.createSubscription(subscriptionDto);
  }
}

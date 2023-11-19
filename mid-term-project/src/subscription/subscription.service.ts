
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionDto } from './dto/subscription.dto';

@Injectable()
export class SubscriptionService {
  constructor(
    @InjectRepository(Subscription)
    private readonly subscriptionRepository: Repository<Subscription>,
  ) {}

  async getAllSubscriptions(): Promise<Subscription[]> {
    return this.subscriptionRepository.find();
  }

  async createSubscription(subscriptionDto: SubscriptionDto): Promise<Subscription> {
    const newSubscription = this.subscriptionRepository.create(subscriptionDto);
    return this.subscriptionRepository.save(newSubscription);
  }
}

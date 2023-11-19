import { Repository } from 'typeorm';
import { Subscription } from './entities/subscription.entity';
import { SubscriptionDto } from './dto/subscription.dto';
export declare class SubscriptionService {
    private readonly subscriptionRepository;
    constructor(subscriptionRepository: Repository<Subscription>);
    getAllSubscriptions(): Promise<Subscription[]>;
    createSubscription(subscriptionDto: SubscriptionDto): Promise<Subscription>;
}

import { SubscriptionService } from './subscription.service';
import { SubscriptionDto } from './dto/subscription.dto';
import { Subscription } from './entities/subscription.entity';
export declare class SubscriptionController {
    private readonly subscriptionService;
    constructor(subscriptionService: SubscriptionService);
    getAllSubscriptions(): Promise<Subscription[]>;
    createSubscription(subscriptionDto: SubscriptionDto): Promise<Subscription>;
}

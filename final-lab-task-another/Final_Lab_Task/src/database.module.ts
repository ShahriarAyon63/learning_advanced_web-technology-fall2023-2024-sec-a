// database.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { SubscriptionModule } from './subscription/subscription.module';
import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';
import { NotificationModule } from './notification/notification.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './auth/entities/user.entity';
import { BillPaymentEntity } from './bill-payment/entities/bill-payment.entity';
import { CurrencyConversionEntity } from './currency-conversion/entities/currency-conversion.entity';
import { Subscription } from './subscription/entities/subscription.entity';
import { NotificationEntity } from './notification/entities/notification.entity';
import { BillPaymentModule } from './bill-payment/bill-payment.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '1234',
      database: 'crab',
      entities: [
        User, 
        BillPaymentEntity, 
        CurrencyConversionEntity,
        Subscription,
        NotificationEntity,

      ],
      synchronize: true,
    }),
    AuthModule,
    SubscriptionModule,
    CurrencyConversionModule,
    NotificationModule,
    BillPaymentModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class DatabaseModule {}












// import { Module } from '@nestjs/common';
// import { TypeOrmModule } from '@nestjs/typeorm';
// import { AuthModule } from './auth/auth.module';
// import { SubscriptionModule } from './subscription/subscription.module';
// import { CurrencyConversionModule } from './currency-conversion/currency-conversion.module';
// import { NotificationModule } from './notification/notification.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import { User } from './auth/entities/user.entity';


// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'postgres',
//       host: 'localhost',
//       username: 'postgres',
//       password: '1234',
//       database: 'crab',
//       entities: [
      
//       ],
//       // entities: ['../typeorm/entities/*.ts'],

//       synchronize: true,
//     }),
//     AuthModule,
//     SubscriptionModule,
//     CurrencyConversionModule,
//     NotificationModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// // export class AppModule {}
// export class DatabaseModule {}

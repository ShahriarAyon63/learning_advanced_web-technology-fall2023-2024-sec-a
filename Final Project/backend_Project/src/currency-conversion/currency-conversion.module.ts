
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CurrencyConversionEntity } from './entities/currency-conversion.entity';
import { CurrencyConversionController } from './currency-conversion.controller';
import { CurrencyConversionService } from './currency-conversion.service';

@Module({
  imports: [TypeOrmModule.forFeature([CurrencyConversionEntity])],
  controllers: [CurrencyConversionController],
  providers: [CurrencyConversionService],
})
export class CurrencyConversionModule {}

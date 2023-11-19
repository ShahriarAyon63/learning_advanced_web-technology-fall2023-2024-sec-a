
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CurrencyConversionEntity } from './entities/currency-conversion.entity';
import { CurrencyConversionDto } from './dto/currency-conversion.dto';

@Injectable()
export class CurrencyConversionService {
  constructor(
    @InjectRepository(CurrencyConversionEntity)
    private readonly currencyConversionRepository: Repository<CurrencyConversionEntity>,
  ) {}

  async convertCurrency(currencyConversionDto: CurrencyConversionDto): Promise<CurrencyConversionEntity> {
    const { amount } = currencyConversionDto;
    const convertedAmount = amount * 120; // Replace with the conversion logic

    const conversionRecord = this.currencyConversionRepository.create({
      amount,
      convertedAmount,
    });

    return await this.currencyConversionRepository.save(conversionRecord);
  }
}

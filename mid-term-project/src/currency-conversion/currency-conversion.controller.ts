
import { Controller, Post, Body } from '@nestjs/common';
import { CurrencyConversionService } from './currency-conversion.service';
import { CurrencyConversionDto } from './dto/currency-conversion.dto';

@Controller('currency-conversion')
export class CurrencyConversionController {
  constructor(private readonly currencyConversionService: CurrencyConversionService) {}

  @Post('convert')
  async convertCurrency(@Body() currencyConversionDto: CurrencyConversionDto) {
    return this.currencyConversionService.convertCurrency(currencyConversionDto);
  }
}

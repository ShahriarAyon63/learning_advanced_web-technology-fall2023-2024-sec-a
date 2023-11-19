import { CurrencyConversionService } from './currency-conversion.service';
import { CurrencyConversionDto } from './dto/currency-conversion.dto';
export declare class CurrencyConversionController {
    private readonly currencyConversionService;
    constructor(currencyConversionService: CurrencyConversionService);
    convertCurrency(currencyConversionDto: CurrencyConversionDto): Promise<import("./entities/currency-conversion.entity").CurrencyConversionEntity>;
}

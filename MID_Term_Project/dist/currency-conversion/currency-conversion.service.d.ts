import { Repository } from 'typeorm';
import { CurrencyConversionEntity } from './entities/currency-conversion.entity';
import { CurrencyConversionDto } from './dto/currency-conversion.dto';
export declare class CurrencyConversionService {
    private readonly currencyConversionRepository;
    constructor(currencyConversionRepository: Repository<CurrencyConversionEntity>);
    convertCurrency(currencyConversionDto: CurrencyConversionDto): Promise<CurrencyConversionEntity>;
}

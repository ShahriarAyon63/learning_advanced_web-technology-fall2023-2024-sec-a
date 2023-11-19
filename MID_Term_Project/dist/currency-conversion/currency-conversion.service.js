"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurrencyConversionService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const currency_conversion_entity_1 = require("./entities/currency-conversion.entity");
let CurrencyConversionService = class CurrencyConversionService {
    constructor(currencyConversionRepository) {
        this.currencyConversionRepository = currencyConversionRepository;
    }
    async convertCurrency(currencyConversionDto) {
        const { amount } = currencyConversionDto;
        const convertedAmount = amount * 120;
        const conversionRecord = this.currencyConversionRepository.create({
            amount,
            convertedAmount,
        });
        return await this.currencyConversionRepository.save(conversionRecord);
    }
};
exports.CurrencyConversionService = CurrencyConversionService;
exports.CurrencyConversionService = CurrencyConversionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(currency_conversion_entity_1.CurrencyConversionEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CurrencyConversionService);
//# sourceMappingURL=currency-conversion.service.js.map
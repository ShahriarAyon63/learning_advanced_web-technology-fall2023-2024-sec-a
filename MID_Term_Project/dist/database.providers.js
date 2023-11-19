"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.databaseProviders = void 0;
exports.databaseProviders = [
    {
        provide: 'DATABASE_CONNECTION',
        useFactory: async (connection) => connection,
        inject: ['DATABASE_CONNECTION'],
    },
];
//# sourceMappingURL=database.providers.js.map
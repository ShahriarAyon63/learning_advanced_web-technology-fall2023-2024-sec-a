
import { Connection } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (connection: Connection) => connection,
    inject: ['DATABASE_CONNECTION'],
  },
];

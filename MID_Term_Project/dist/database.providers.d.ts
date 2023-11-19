import { Connection } from 'typeorm';
export declare const databaseProviders: {
    provide: string;
    useFactory: (connection: Connection) => Promise<Connection>;
    inject: string[];
}[];

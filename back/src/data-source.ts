import "dotenv/config";
import "reflect-metadata";
import path from "path";
import { DataSource, DataSourceOptions } from "typeorm";

const settings = (): DataSourceOptions => {
    const entitiePath = path.join(__dirname, "entities/**.{ts,js}")
    const migrationPath = path.join(__dirname, "migrations/**.{ts,js}")

    if(process.env.NODE_ENV){
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiePath]
        }
    }

    if(!process.env.DATABASE_URL) throw new Error("Erro ao conectar ao db.")

    return {
        type: "postgres",
        url: process.env.DATABASE_URL,
        entities: [entitiePath],
        migrations: [migrationPath]
    }
}

export const AppDataSource = new DataSource(settings()) 
import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCollomnUser1700678672140 implements MigrationInterface {
    name = 'AddCollomnUser1700678672140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "waiter" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "users" ADD "kitchen" boolean NOT NULL DEFAULT false`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "kitchen"`);
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "waiter"`);
    }

}

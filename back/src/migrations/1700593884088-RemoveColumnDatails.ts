import { MigrationInterface, QueryRunner } from "typeorm";

export class RemoveColumnDatails1700593884088 implements MigrationInterface {
    name = 'RemoveColumnDatails1700593884088'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "details"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "details" character varying(150) NOT NULL`);
    }

}

import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRelecionTableWaiterOrder1700652199471 implements MigrationInterface {
    name = 'AlterTableRelecionTableWaiterOrder1700652199471'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" ADD "quanty" integer NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "quanty"`);
    }

}

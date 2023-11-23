import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRelecionFoodOrder1700658963260 implements MigrationInterface {
    name = 'AlterTableRelecionFoodOrder1700658963260'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_4419de6432abfb032798c17be69"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "ordersId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "foodsId" integer`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_00341373dc9b3a47daadcdc4db8" FOREIGN KEY ("foodsId") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_00341373dc9b3a47daadcdc4db8"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "foodsId"`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "ordersId" integer`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_4419de6432abfb032798c17be69" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

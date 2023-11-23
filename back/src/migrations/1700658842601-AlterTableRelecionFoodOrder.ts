import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterTableRelecionFoodOrder1700658842601 implements MigrationInterface {
    name = 'AlterTableRelecionFoodOrder1700658842601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "orders_foods_foods" ("ordersId" integer NOT NULL, "foodsId" integer NOT NULL, CONSTRAINT "PK_c15c42c7e66c3c82394080408c3" PRIMARY KEY ("ordersId", "foodsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ba51455df27d81faf090974876" ON "orders_foods_foods" ("ordersId") `);
        await queryRunner.query(`CREATE INDEX "IDX_aeea74a274711779515f9dc218" ON "orders_foods_foods" ("foodsId") `);
        await queryRunner.query(`ALTER TABLE "foods" ADD "ordersId" integer`);
        await queryRunner.query(`ALTER TABLE "foods" ADD CONSTRAINT "FK_4419de6432abfb032798c17be69" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "orders_foods_foods" ADD CONSTRAINT "FK_ba51455df27d81faf0909748764" FOREIGN KEY ("ordersId") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "orders_foods_foods" ADD CONSTRAINT "FK_aeea74a274711779515f9dc218f" FOREIGN KEY ("foodsId") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders_foods_foods" DROP CONSTRAINT "FK_aeea74a274711779515f9dc218f"`);
        await queryRunner.query(`ALTER TABLE "orders_foods_foods" DROP CONSTRAINT "FK_ba51455df27d81faf0909748764"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP CONSTRAINT "FK_4419de6432abfb032798c17be69"`);
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "ordersId"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_aeea74a274711779515f9dc218"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ba51455df27d81faf090974876"`);
        await queryRunner.query(`DROP TABLE "orders_foods_foods"`);
    }

}

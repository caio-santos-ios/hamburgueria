import { MigrationInterface, QueryRunner } from "typeorm";

export class AlterNameColomn1700659344825 implements MigrationInterface {
    name = 'AlterNameColomn1700659344825'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_00341373dc9b3a47daadcdc4db8"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "foodsId" TO "foodId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_0e3e56e088eafbd33f1bb4f0440" FOREIGN KEY ("foodId") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_0e3e56e088eafbd33f1bb4f0440"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "foodId" TO "foodsId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_00341373dc9b3a47daadcdc4db8" FOREIGN KEY ("foodsId") REFERENCES "foods"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

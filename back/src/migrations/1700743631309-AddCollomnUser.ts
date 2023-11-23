import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCollomnUser1700743631309 implements MigrationInterface {
    name = 'AddCollomnUser1700743631309'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_2912d5ae4c5a140b02c1f0c7611"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "waiterId" TO "userId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "orders" DROP CONSTRAINT "FK_151b79a83ba240b0cb31b2302d1"`);
        await queryRunner.query(`ALTER TABLE "orders" RENAME COLUMN "userId" TO "waiterId"`);
        await queryRunner.query(`ALTER TABLE "orders" ADD CONSTRAINT "FK_2912d5ae4c5a140b02c1f0c7611" FOREIGN KEY ("waiterId") REFERENCES "waiters"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}

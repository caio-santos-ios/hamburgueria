import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateTableFood1700592704450 implements MigrationInterface {
    name = 'CreateTableFood1700592704450'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "foods" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "price" numeric(10,2) NOT NULL, CONSTRAINT "UQ_c3cf46642750fce8fea692ad946" UNIQUE ("name"), CONSTRAINT "PK_0cc83421325632f61fa27a52b59" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "isDone" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "orders" ADD "valueTotal" numeric(10,2) NOT NULL`);
        await queryRunner.query(`ALTER TABLE "waiters" ADD CONSTRAINT "UQ_b9e8742714b3e0002c5d2916272" UNIQUE ("codeAcess")`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "waiters" DROP CONSTRAINT "UQ_b9e8742714b3e0002c5d2916272"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "valueTotal"`);
        await queryRunner.query(`ALTER TABLE "orders" DROP COLUMN "isDone"`);
        await queryRunner.query(`DROP TABLE "foods"`);
    }

}

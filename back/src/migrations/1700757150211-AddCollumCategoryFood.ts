import { MigrationInterface, QueryRunner } from "typeorm";

export class AddCollumCategoryFood1700757150211 implements MigrationInterface {
    name = 'AddCollumCategoryFood1700757150211'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TYPE "public"."foods_category_enum" AS ENUM('drink', 'snack', 'dessert', 'others')`);
        await queryRunner.query(`ALTER TABLE "foods" ADD "category" "public"."foods_category_enum" NOT NULL DEFAULT 'others'`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "foods" DROP COLUMN "category"`);
        await queryRunner.query(`DROP TYPE "public"."foods_category_enum"`);
    }

}

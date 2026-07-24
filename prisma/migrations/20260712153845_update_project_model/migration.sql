/*
  Warnings:

  - Added the required column `city` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `state` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `type` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "city" TEXT NOT NULL,
ADD COLUMN     "state" TEXT NOT NULL,
ADD COLUMN     "type" TEXT NOT NULL,
ADD COLUMN     "units" INTEGER,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

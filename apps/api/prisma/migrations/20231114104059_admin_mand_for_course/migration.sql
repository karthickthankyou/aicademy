/*
  Warnings:

  - Made the column `adminUid` on table `Course` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_adminUid_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "adminUid" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_adminUid_fkey" FOREIGN KEY ("adminUid") REFERENCES "Admin"("uid") ON DELETE RESTRICT ON UPDATE CASCADE;

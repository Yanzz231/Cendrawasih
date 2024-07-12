/*
  Warnings:

  - The primary key for the `comment_post` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id_comment` on the `comment_post` table. All the data in the column will be lost.
  - You are about to drop the column `time` on the `comment_post` table. All the data in the column will be lost.
  - You are about to drop the `comment_post_replay` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `username` to the `comment_post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment_post` DROP PRIMARY KEY,
    DROP COLUMN `id_comment`,
    DROP COLUMN `time`,
    ADD COLUMN `username` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id_post`);

-- DropTable
DROP TABLE `comment_post_replay`;

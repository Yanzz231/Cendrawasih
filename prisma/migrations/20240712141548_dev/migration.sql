/*
  Warnings:

  - The primary key for the `like_history` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id_username` on the `like_history` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `id_post` on the `like_history` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - Added the required column `time` to the `comment_post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `time` to the `comment_post_replay` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id_user` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `comment_post` ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `comment_post_replay` ADD COLUMN `time` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `like_history` DROP PRIMARY KEY,
    MODIFY `id_username` INTEGER NOT NULL,
    MODIFY `id_post` INTEGER NOT NULL,
    ADD PRIMARY KEY (`id_username`);

-- AlterTable
ALTER TABLE `post` ADD COLUMN `id_user` INTEGER NOT NULL;

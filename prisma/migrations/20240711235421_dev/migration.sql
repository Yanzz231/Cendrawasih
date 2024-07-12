/*
  Warnings:

  - A unique constraint covering the columns `[username,email]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `description` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `image` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `like` to the `post` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `post` ADD COLUMN `description` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NOT NULL,
    ADD COLUMN `like` INTEGER NOT NULL,
    ADD COLUMN `title` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `user_username_email_key` ON `user`(`username`, `email`);

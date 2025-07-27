-- CreateTable
CREATE TABLE "BannerState" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "shop" TEXT NOT NULL,
    "dismissed" BOOLEAN NOT NULL DEFAULT false
);

-- CreateIndex
CREATE UNIQUE INDEX "BannerState_shop_key" ON "BannerState"("shop");

CREATE TABLE "BannerState" (
    "id" SERIAL PRIMARY KEY,
    "shop" TEXT NOT NULL,
    "dismissed" BOOLEAN NOT NULL DEFAULT false
);

CREATE UNIQUE INDEX "BannerState_shop_key" ON "BannerState"("shop");

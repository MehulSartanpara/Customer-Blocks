import prisma from "../../db.server";

/**
 * Check if the banner is dismissed for a specific shop.
 */
export async function isBannerDismissed(shop) {
  const banner = await prisma.bannerState.findUnique({
    where: { shop },
  });

  return banner?.dismissed ?? false;
}

/**
 * Dismiss the banner for the given shop.
 */
export async function dismissBanner(shop) {
  await prisma.bannerState.upsert({
    where: { shop },
    update: { dismissed: true },
    create: { shop, dismissed: true },
  });
}

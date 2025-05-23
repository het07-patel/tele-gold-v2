import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Turn Your Rare Coins and Collectibles into Instant Cash";
const META_DESCRIPTION =
  "Sell your rare coins and collectibles with trusted experts. Get accurate appraisals, top market value, and a stress-free selling experience. Discover the hidden worth of your unique collection today!";
const META_KEYWORDS =
  "sell rare coins, coin buyers near me, collectible coins, antique coin buyers, rare coin appraisals, sell gold coins, vintage coin collection, silver coin buyers, cash for rare coins";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/rare-coins-collection`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function RareCoinsCollectionLayout({ children }) {
  return <div>{children}</div>;
}

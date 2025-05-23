import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Sell Your Gold, Silver, and Platinum with Confidence";
const META_DESCRIPTION =
  "Get the best value when you sell your gold, silver, or platinum to us. Trusted buyers with transparent evaluations and top-dollar payouts.";
const META_KEYWORDS =
  "sell gold, sell silver, sell platinum, cash for gold, sell precious metals, gold buyers, silver buyers, platinum buyers";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/gold-silver-platinum`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function GoldSilverPlatinumLayout({ children }) {
  return <div>{children}</div>;
}

import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Sell Your Estate Diamond Jewelry for the Best Value";
const META_DESCRIPTION =
  "Looking to sell estate diamond jewelry? We offer top prices, expert evaluations, and a smooth, transparent process. Turn your vintage diamond pieces into instant cash today!";
const META_KEYWORDS =
  "sell estate diamond jewelry, estate diamond jewelry buyers, vintage diamond jewelry, sell antique diamond jewelry, estate diamond appraisal, cash for estate diamonds, sell heirloom diamonds";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/estate-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function EstateJewelryLayout({ children }) {
  return <div>{children}</div>;
}

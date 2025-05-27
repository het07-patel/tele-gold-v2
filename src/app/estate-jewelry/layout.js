import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Buy or Sell Estate Diamond Jewelry for the Best Value";
const META_DESCRIPTION =
  "Looking to buy or sell estate or vintage diamond jewelry? We offer expert evaluations, competitive pricing, and a seamless process for unique and heirloom pieces.";
const META_KEYWORDS =
  "buy estate jewelry, sell estate jewelry, vintage diamond jewelry, antique diamond jewelry, estate jewelry buyers, heirloom diamonds, sell vintage jewelry, estate diamond appraisal";
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

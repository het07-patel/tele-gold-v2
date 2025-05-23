import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Get Instant Value for Your Diamond Jewelry";
const META_DESCRIPTION =
  "Selling diamond jewelry has never been easier! Receive professional evaluations and immediate cash offers for diamond rings, necklaces, and more. Sell today with confidence.";
const META_KEYWORDS =
  "diamond jewelry buyers, sell diamond jewelry, diamond appraisals, sell diamond rings, sell diamond necklaces";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/diamond-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function DiamondJewelryLayout({ children }) {
  return <div>{children}</div>;
}

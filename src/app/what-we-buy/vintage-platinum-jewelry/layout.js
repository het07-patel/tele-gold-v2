import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Sell Platinum Jewelry – Vintage, Diamond, and Estate Platinum Buyers";
const META_DESCRIPTION =
  "Sell your platinum jewelry, including vintage and diamond pieces, at top market value. We buy platinum rings, necklaces, estate jewelry, and more with expert appraisals and competitive offers.";
const META_KEYWORDS =
  "sell platinum jewelry, platinum jewelry buyers, sell vintage platinum, diamond platinum jewelry, estate platinum jewelry, sell platinum rings, platinum appraisals, sell platinum Cicero";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/vintage-platinum-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function VintagePlatinumJewelryLayout({ children }) {
  return <div>{children}</div>;
}

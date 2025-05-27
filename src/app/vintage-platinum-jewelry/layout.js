import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Buy or Sell Platinum Jewelry – Vintage, Diamond, and Estate Platinum Buyers";
const META_DESCRIPTION =
  "We buy and sell platinum jewelry including rings, vintage pieces, and estate collections. Get competitive offers and expert appraisals.";
const META_KEYWORDS =
  "buy platinum jewelry, sell platinum jewelry, platinum rings, vintage platinum, estate platinum, platinum jewelry dealers, platinum buyers, platinum jewelry resale";
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

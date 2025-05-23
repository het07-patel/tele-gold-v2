import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Timeless Vintage Platinum Jewelry";
const META_DESCRIPTION =
  "Discover the timeless beauty of vintage platinum jewelry. Explore elegant designs, unmatched craftsmanship, and heirloom-quality pieces that tell a unique story.";
const META_KEYWORDS =
  "vintage platinum jewelry, platinum rings, antique platinum jewelry, platinum necklaces, platinum bracelets, timeless jewelry, platinum earrings, heirloom jewelry";
const CANONICAL_URL = `${WebsiteUrl}/what-we-sell/vintage-platinum-jewelry`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function VintagePlatinumJewelryLayout({ children }) {
  return children;
}

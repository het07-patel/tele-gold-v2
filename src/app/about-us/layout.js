import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Timeless Jewelry, Unique Craftsmanship, and Unmatched Elegance";
const META_DESCRIPTION =
  "Our passion for fine jewelry inspires us to create timeless designs with exceptional craftsmanship, offering clients elegance, value, and a memorable experience.";
const META_KEYWORDS =
  "fine jewelry, estate jewelry, timeless designs, unique craftsmanship, luxury watches, rare coins, diamonds, premium jewelry, elegant accessories, handcrafted jewelry";
const CANONICAL_URL = `${WebsiteUrl}/about-us`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function AboutUsLayout({ children }) {
  return <div>{children}</div>;
}

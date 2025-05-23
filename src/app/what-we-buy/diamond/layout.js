import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Sell Your Diamonds for the Best Value | Trusted Diamond Buyers";
const META_DESCRIPTION =
  "Sell your diamonds with confidence! We offer top prices, transparent appraisals, and a hassle-free process. Trusted by the community for fair and competitive diamond buying.";
const META_KEYWORDS =
  "sell diamonds, diamond buyers, sell diamond jewelry, cash for diamonds, sell loose diamonds, diamond appraisal, best diamond buyers";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/diamond`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function DiamondLayout({ children }) {
  return <div>{children}</div>;
}

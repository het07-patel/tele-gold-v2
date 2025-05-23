import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE =
  "Sell Your Watches and Fine Timepieces – Get Instant Cash Today";
const META_DESCRIPTION =
  "Sell your luxury watches and fine timepieces with ease. We buy high-end brands like Rolex, Omega, Patek Philippe, and more. Get competitive prices, instant cash offers, and a hassle-free selling experience.";
const META_KEYWORDS =
  "sell watches, sell fine watches, sell luxury watches, sell Rolex, buy fine watches, sell Omega, instant cash for watches, sell timepieces, luxury watch buyer, fine watch buyer, watch resale, high-end watch selling";
const CANONICAL_URL = `${WebsiteUrl}/what-we-buy/watches`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function WatchesLayout({ children }) {
  return <div>{children}</div>;
}

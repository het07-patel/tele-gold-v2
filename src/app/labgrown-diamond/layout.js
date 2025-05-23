import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Discover the Beauty of Lab-Grown Diamonds";
const META_DESCRIPTION =
    "Explore stunning lab-grown diamonds that combine brilliance, sustainability, and affordability. Perfect for engagement rings, fine jewelry, and custom designs. Experience timeless beauty with ethically sourced diamonds crafted for you.";
const META_KEYWORDS =
    "lab-grown diamonds, sustainable diamonds, ethical diamonds, affordable diamonds, engagement rings, custom jewelry, fine jewelry, eco-friendly diamonds, brilliant diamonds, diamond alternatives";
const CANONICAL_URL = `${WebsiteUrl}/labgrown-diamond`;

export const metadata = generateMetadata({
    title: META_TITLE,
    description: META_DESCRIPTION,
    keywords: META_KEYWORDS,
    url: CANONICAL_URL,
});
export default function LabgrownDiamondLayout({ children }) {
    return <div className="bg-[#060504]">{children}</div>;
}

import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata } from "@/utils/metaConfig";

const META_TITLE = "Get in Touch with Us - Tele Gold Jewelrs";
const META_DESCRIPTION =
  "Need assistance or have questions? Contact us today! Our team is here to help with all your inquiries about selling jewelry, coins, watches, and more. Reach out and connect with us now.";
const META_KEYWORDS =
  "contact us, reach out, sell jewelry, sell coins, sell watches, customer support, jewelry buyers, coin dealers, fine watches, get in touch, contact information, support services";
const CANONICAL_URL = `${WebsiteUrl}/contact-us`;

export const metadata = generateMetadata({
  title: META_TITLE,
  description: META_DESCRIPTION,
  keywords: META_KEYWORDS,
  url: CANONICAL_URL,
});
export default function ContactUsLayout({ children }) {
  return <div>{children}</div>;
}

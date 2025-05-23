import logo from "@/assets/images/logo.webp";
import { CustomImage } from "./dynamiComponents";
import Link from "next/link";
import { facebookUrl, instagramUrl } from "@/utils/environments";
import { LuFacebook, LuInstagram } from "react-icons/lu";

const serviceLinks = [
  { name: "Home", url: "/" },
  { name: "About Us", url: "/about-us" },
  { name: "Lab Grown Diamonds ", url: "/labgrown-diamond" },
  { name: "Contact Us", url: "/contact-us" },
];

const whatWeBuyLinks = [
  {
    url: "/what-we-buy/gold-silver-platinum",
    name: "Gold, Silver, Platinum",
  },
  {
    url: "/what-we-buy/diamond",
    name: "Diamonds",
  },
  { url: "/what-we-buy/watches", name: "Watches / Fine Watches" },
  { url: "/what-we-buy/diamond-jewelry", name: "Diamond Jewelry" },
  { url: "/what-we-buy/estate-jewelry", name: "Estate Jewelry" },
  {
    url: "/what-we-buy/vintage-platinum-jewelry",
    name: "Vintage Platinum Jewelry",
  },
  {
    url: "/what-we-buy/rare-coins-collection",
    name: "Rare Coins & Collections",
  },
];

const whatWeSellLinks = [
  { url: "/what-we-sell/bracelets", name: "Bracelets" },
  { url: "/what-we-sell/rings", name: "Rings" },
  { url: "/what-we-sell/necklaces", name: "Necklaces" },
  { url: "/what-we-sell/earrings", name: "Earrings" },
  { url: "/what-we-sell/engagement-rings", name: "Engagement Rings" },
  { url: "/what-we-sell/chains", name: "Chains" },
  { url: "/what-we-sell/pendants", name: "Pendants" },
  { url: "/what-we-sell/watches", name: "Watches" },
  {
    url: "/what-we-sell/vintage-platinum-jewelry",
    title: "Vintage Platinum Jewelry",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-10 lg:py-16">
        <div className="flex flex-wrap justify-between gap-10 w-full">
          <div className="flex-1 min-w-[250px] space-y-4">
            <Link href={"/"} className="text-center block">
              <CustomImage
                srcAttr={logo}
                className="inline-block md:block w-32 md:w-36 2xl:w-auto"
              />
            </Link>
            <h3 className="text-3xl 2xl:text-5xl font-bold text-center md:text-start font-belleza">
              Jewelry that makes you feel as precious as you are.
            </h3>
          </div>

          {[
            { title: "Services", links: serviceLinks },
            { title: "What We Buy", links: whatWeBuyLinks },
            { title: "What We Sell", links: whatWeSellLinks },
          ].map((section, index) => (
            <div key={index} className="flex-1 min-w-[250px]">
              <h3 className="text-3xl font-belleza uppercase">
                {section.title}
              </h3>
              <div className="mt-3 space-y-1.5">
                {section.links.map((link, i) => (
                  <Link
                    key={i}
                    href={link.url}
                    className="text-base block 2xl:text-lg capitalize"
                  >
                    {link.name || link.title}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-[#D7D7D3] border-t py-6 text-sm">
        <div className="container flex flex-col md:flex-row justify-between md:items-center space-y-2.5 md:space-y-0">
          <p className="inline-block">
            @2025 Tele Gold Jewelres. All Rights Reserved
          </p>
          <div className="flex items-center gap-2">
            <span>Social :</span>
            <div className="flex gap-3">
              <Link
                target="_blank"
                href={instagramUrl}
                className="rounded-full flex items-center justify-center w-8 h-8 border border-gray-400"
              >
                <LuInstagram className="text-base" />
              </Link>
              <Link
                target="_blank"
                href={facebookUrl}
                className="rounded-full flex items-center justify-center w-8 h-8 border border-gray-400"
              >
                <LuFacebook className="text-base" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

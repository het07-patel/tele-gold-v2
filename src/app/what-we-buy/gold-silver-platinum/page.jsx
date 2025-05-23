import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  CustomImage,
  GoldSilverPlatinumScrollbar,
} from "@/components/dynamiComponents";
import goldSilver1 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-1.webp";
import goldSilver2 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-2.webp";
import goldSilver3 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-3.webp";
import goldSilver4 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-4.webp";
import goldSilver5 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-5.webp";
import goldSilver6 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-6.webp";
import goldSilver7 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-7.webp";
import goldSilver8 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-8.webp";
import goldSilver9 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-9.webp";
import goldSilver10 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-10.webp";
import goldSilver11 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-11.webp";
import goldSilver12 from "@/assets/images/what-we-buy/gold-silver-platinum/gold-silver-12.webp";
import starSvg from "@/assets/images/what-we-buy/gold-silver-platinum/star.svg";

import KeepInTouch from "@/components/KeepInTouch";

const animatedContent = [
  {
    img: goldSilver1,
    titleAttr: "",
    altAttr: "",
    description: [
      "When it comes to selling precious metals, trust is everything. At Tele Gold Jewelers, we pride ourselves on transparency, integrity, and providing fair value. Our expert appraisers assess your items with meticulous attention to detail.",
      "Whether it’s gold jewelry, silver coins, or platinum accessories, we guarantee competitive market-based offers that reflect their true worth. Every transaction is handled with professionalism, ensuring a smooth experience.",
      "With over 30 years of experience, we’ve built long-lasting relationships by putting customer satisfaction first. Your trust is our most valuable asset.",
    ],

    direction: "LTF",
  },
  {
    img: goldSilver2,
    titleAttr: "",
    altAttr: "",
    description: [
      "Selling your gold, silver, or platinum shouldn’t be complicated. At Tele Gold Jewelers, we simplify the process by offering accurate assessments backed by real-time market rates. ",
      "Our experienced team evaluates your items thoroughly, whether it’s vintage silverware, gold bracelets, or platinum rings. We explain every step of the process, so you feel confident in your decision.",
      "Transparency, expertise, and top-notch customer service are the pillars of our business. When you sell to us, you’re partnering with a trusted buyer committed to your satisfaction.",
    ],

    direction: "LTF",
  },
];

const items = [
  { title: "Convenience", image: goldSilver3, titleAttr: "", altAttr: "" },
  { title: "Fairness", image: goldSilver4, titleAttr: "", altAttr: "" },
  { title: "Risk-Free", image: goldSilver5, titleAttr: "", altAttr: "" },
];

const benefits = [
  {
    number: "1",
    title: "Transparent Appraisals",
    description:
      "We offer clear, professional evaluations, ensuring you understand the true value of your gold, silver, or platinum.",
    image: goldSilver6,
    titleAttr: "",
    altAttr: "",
  },
  {
    number: "2",
    title: "Fair and Competitive Offers",
    description:
      "Receive top market value with no hidden fees or confusing processes.",
    image: goldSilver7,
    titleAttr: "",
    altAttr: "",
  },
  {
    number: "3",
    title: "Quick and Hassle-Free Transactions",
    description:
      "Enjoy a seamless selling experience with fast appraisals and immediate payouts.",
    image: goldSilver8,
    titleAttr: "",
    altAttr: "",
  },
  {
    number: "4",
    title: "Trusted by the Community",
    description:
      "With years of experience and a reputation built on trust, we’ve become the go-to choice for those looking to sell their precious metals.",
    image: goldSilver9,
    titleAttr: "",
    altAttr: "",
  },
];

const serviceDetail = {
  svgIcon: starSvg,
  svgAltAttr: "",
  svgTitleAttr: "",
  bgImg: goldSilver12,
  bgAltAttr: "",
  bgTitleAttr: "",
  title: "Why Sell to Us?",
  description: [
    "Honest Pricing, Trusted Service",
    "We offer transparent appraisals, market-driven pricing, and a hassle-free process. With a reputation built on trust and customer care, we ensure you get the best value with every transaction.",
  ],
  marqueeTitle: "Gold: The Eternal Classic",
  service: [
    {
      img: goldSilver10,
      altAttr: "",
      titleAttr: "",
    },
    {
      img: goldSilver11,
      altAttr: "",
      titleAttr: "",
    },
    {
      img: goldSilver12,
      altAttr: "",
      titleAttr: "",
    },
  ],
};

export default function GoldSilverPlatinum() {
  return (
    <>
      <section>
        <Hero
          title="Guaranteed Fair Prices for Gold, Silver & Platinum"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Trusted Buyers of Gold, Silver, and Platinum" />
        </div>
        <div className="container pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36 bg-[#ECEBE7]">
        <GoldSilverPlatinumScrollbar serviceDetail={serviceDetail} />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <HeadingTitle sectionName="Fair Market Value for Your Precious Metals" />

        <div className="container pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[1]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 container">
        <div className=" mx-auto">
          <div className="mb-8 flex flex-col xl:flex-row justify-between">
            <h2 className="text-3xl xl:text-5xl 2xl:text-6xl 4xl:text-7xl font-belleza">
              Easy, Hassle-Free
              <span className="hidden xl:inline">
                <br />
              </span>
              Selling Experience
            </h2>

            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px] max-w-2xl">
              Experience a straightforward, transparent, and efficient selling
              process at Tele Gold Jewelers. Our experts ensure quick
              appraisals, fair offers, and seamless transactions, making it easy
              to turn your precious metals into cash without any stress or
              hidden fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
            {items.map((item, index) => (
              <div key={index} className="relative group">
                <CustomImage
                  srcAttr={item.image}
                  titleAttr={item.titleAttr}
                  altAttr={item.altAttr}
                  className="w-full  object-cover "
                />
                <div className="absolute bottom-5 left-0 w-full font-belleza bg-opacity-50 text-white text-2xl xl:text-4xl py-3 text-center">
                  {item.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 container">
        <HeadingTitle sectionName="Why Sell to Tele Gold Jewelers?" />

        <div className="mx-auto flex flex-col justify-center space-y-12 pt-4 md:pt-8 lg:pt-14 2xl:pt-20 px-4 md:px-8 lg:px-12">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="relative flex flex-col md:flex-row items-stretch gap-6 md:gap-12 mx-auto max-w-7xl w-full"
            >
              <span className="absolute justify-end md:static text-primary opacity-20 text-[120px] md:text-[140px] lg:text-[180px] font-belleza pointer-events-none">
                {item.number}
              </span>
              <div className="w-full md:w-[40%] lg:w-[45%]">
                <div className="h-[250px] w-full">
                  <CustomImage
                    srcAttr={item.image}
                    titleAttr={item.titleAttr}
                    altAttr={item.altAttr}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full md:w-[60%] flex flex-col justify-center">
                <h3 className="text-2xl sm:text-3xl xl:text-4xl font-belleza">
                  {item.title}
                </h3>
                <p className="mt-2 text-lg sm:text-lg md:text-xl">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}

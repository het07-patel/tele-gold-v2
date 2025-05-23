import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import ringVed from "@/assets/images/what-we-buy/diamond-jewelry/ringVed.gif";
import diamondJewelry1 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-1.webp";
import diamondJewelry2 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-2.webp";
import diamondJewelry3 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-3.webp";
import diamondJewelry4 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-4.webp";
import diamondJewelry5 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-5.webp";
import diamondJewelry6 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-6.webp";
import diamondJewelry7 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-7.webp";
import diamondJewelry8 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-8.webp";
import diamondJewelry9 from "@/assets/images/what-we-buy/diamond-jewelry/diamond-jewelry-9.webp";

import whiteCircle from "@/assets/images/what-we-buy/diamond-jewelry/whiteCircle.svg";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  CustomImage,
  DiamondJewelrySwipper,
  MarqueeText,
  TwoImagesAndCenterText,
} from "@/components/dynamiComponents";
import KeepInTouch from "@/components/KeepInTouch";

const animatedContent = [
  {
    img: diamondJewelry4,
    titleAttr: "",
    altAttr: "",
    description: [
      "Selling diamond jewelry can be a rewarding process, but it’s essential to be informed about the factors that influence its value. The 4Cs—carat, cut, clarity, and color—are critical aspects that buyers consider when evaluating a diamond’s worth. A well-maintained, certified diamond typically holds more value in the resale market, especially when it comes with documents like grading reports from trusted gemological labs.",
      "Another important consideration is the overall condition and craftsmanship of the jewelry. Diamonds set in vintage or designer pieces may carry additional value due to their unique design, era, or brand. Checking for any wear and tear, ensuring the metal and setting are intact, and polishing the piece before selling can also enhance its appeal.",
      " Lastly, keep an eye on current market trends. Diamond prices can fluctuate, and understanding whether it's a seller’s market can make a difference. Working with reputable buyers who offer transparent appraisals will help you get a fair and competitive offer. Being informed and strategic will ensure that you make the best decision when selling your diamond jewelry.",
    ],

    direction: "RTF",
  },
  {
    img: diamondJewelry7,
    titleAttr: "",
    altAttr: "",
    description: [
      "When selling your diamond jewelry, several key factors determine its value. The 4Cs – Carat weight, Color, Clarity, and Cut – play a significant role. Larger, well-cut diamonds with high clarity often attract better offers. The type of metal, like platinum or 18K gold, and the craftsmanship also influence its worth.",
      "In addition, unique or vintage designs and rare settings can further enhance a piece's desirability. Market trends, fluctuating gold and diamond prices, and authenticity certificates are also critical in appraising value. Understanding these aspects helps you secure the best deal when selling your diamond jewelry.",
    ],

    direction: "LTF",
  },
];

export const carouselImages = [
  {
    image: diamondJewelry1,
    title: "Engagement Rings",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry9,
    title: "Bracelets & Bangles",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry2,
    title: "Earrings",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry3,
    title: "Necklaces & Pendants",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
  {
    image: diamondJewelry8,
    title: "Watches",
    link: "/contact-us",
    altAttr: "",
    titleAttr: "",
  },
];

export default function VintagePlatinumJewelry() {
  return (
    <>
      <section>
        <Hero
          title="Sell Your Diamond Jewelry with Ease and Confidence"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>

      <section className="container text-primary pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="flex flex-col">
          <h2 className="text-4xl md:text-6xl 2xl:text-9xl leading-tight  font-belleza">
            The secret to
          </h2>

          <h2 className="text-4xl  md:text-5xl  2xl:text-9xl leading-tight flex items-center gap-3 font-belleza flex-wrap  md:gap-3">
            effortless{" "}
            <span className="inline-block transform rotate-[-6deg] px-4">
              <CustomImage
                srcAttr={ringVed}
                titleAttr=""
                altAttr=""
                className="w-[150px] h-[80px] md:w-[300px] md:h-[180px] object-cover"
              />
            </span>
            glamour.
          </h2>
        </div>
        <div className="md:translate-x-[60%] pt-4 ">
          <p className="md:w-[50%] lg:w-[45%] 2xl:w-[40%] text-xl 2xl:text-[22px]">
            Effortless glamour is about timeless elegance and subtle brilliance.
            It enhances your natural beauty, creating a balance between
            simplicity and luxury, so you can shine confidently and effortlessly
            in any moment.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="OUR DIAMOND JEWELRY" />
        </div>
        <div className="pt-4 md:pt-8 lg:pt-12 2xl:pt-16">
          <DiamondJewelrySwipper images={carouselImages} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Key Considerations When Selling Diamond Jewelry" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <TwoImagesAndCenterText
          title="Maximize Your Diamond Jewelry’s Value"
          description="Selling diamond jewelry requires preparation. Gather documents like certifications, assess market trends, and choose a reputable buyer. These steps help you secure the best possible value for your piece."
          leftImage={diamondJewelry5}
          rightImage={diamondJewelry6}
          svgImage={whiteCircle}
          leftTitleAttr=""
          rightAltAttr=""
          rightTitleAttr=""
          leftAltAttr=""
          svgTitleAttr=""
          svgAltAttr=""
          backgroundColor="bg-greyBg"
          textColor="text-primary"
        />
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <MarqueeText
          text={[
            "• because elegance never goes out of style",
            "• A little sparkle goes a long way.",
            "• Luxury you can wear",
            "• A diamond is forever, just like our love.",
            "• Wear your confidence like a diamond—unbreakable and radiant.",
          ]}
          speed={30}
          isAbsolute={false}
        />
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36 ">
        <div>
          <HeadingTitle sectionName="Key Factors That Affect Diamond Jewelry Value" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[1]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}

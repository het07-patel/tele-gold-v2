import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import watches1 from "@/assets/images/what-we-buy/watches/watches-1.webp";
import watches2 from "@/assets/images/what-we-buy/watches/watches-2.webp";
import watches3 from "@/assets/images/what-we-buy/watches/watches-3.webp";
import watches4 from "@/assets/images/what-we-buy/watches/watches-4.webp";
import watches5 from "@/assets/images/what-we-buy/watches/watches-5.webp";
import watches6 from "@/assets/images/what-we-buy/watches/watches-6.webp";
import watches7 from "@/assets/images/what-we-buy/watches/watches-7.webp";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedSection,
  CustomImage,
  MarqueeBrands,
  MarqueeText,
} from "@/components/dynamiComponents";
import KeepInTouch from "@/components/KeepInTouch";

const animatedContent = [
  {
    img: watches6,
    titleAttr: "",
    altAttr: "",
    description: [
      "If you own luxury or antique watches and are looking to sell them, you deserve a process that’s simple, transparent, and rewarding. Whether it’s a timeless vintage piece, a high-end luxury brand, or a rare collector’s item, your timepiece holds significant value. By choosing to sell your watch with us, you can unlock that value with ease while enjoying a hassle-free experience that prioritizes your satisfaction.",
      "Our experts understand the artistry, craftsmanship, and unique history behind fine watches. We evaluate every timepiece carefully, offering competitive prices that reflect its true worth. From iconic brands like Rolex and Patek Philippe to antique heirlooms, we’re dedicated to helping you get the best return for your watch. Trust us to turn your luxury or antique watch into instant cash, while ensuring a seamless, professional selling experience.",
    ],

    direction: "RTF",
  },
];

export default function Watches() {
  return (
    <>
      <section>
        <Hero
          title="Unlock Value for Your Luxury Watches and Fine Timepieces"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>

      <section className="relative flex items-center justify-center w-full  pt-20 md:pt-24 xl:pt-28 2xl:pt-40 3xl:pt-48">
        <div>
          <MarqueeText
            text=" Luxury on Your Wrist, Cash in Your Hand!"
            speed={30}
            MarqueeClassName="top-[40px] md:top-[55px] 2xl:top-[90px]  3xl:top-[130px] text-5xl md:text-7xl xl:text-9xl 3xl:text-[180px]"
          />
          <div className="relative z-10 flex justify-center items-center">
            <CustomImage
              srcAttr={watches1}
              altAttr=""
              titleAttr=""
              className="2xl:w-full lg:w-[90%]"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <HeadingTitle sectionName="Sell Your Luxury and Antique Watches with Confidence" />
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="flex flex-col items-center w-full pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <MarqueeBrands />
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle
            sectionName="Vintage and Antique Pocket Watches"
            description=" Selling your vintage or antique pocket watch has never been easier. We offer professional evaluations and instant payouts."
          />
        </div>
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6 items-start pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <div>
            <div>
              <CustomImage
                srcAttr={watches5}
                titleAttr=""
                altAttr=""
                className="w-full"
              />
            </div>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed pt-6">
              Our experts carefully assess your pocket watch based on its
              condition, rarity, and craftsmanship to offer you the best
              possible value. Whether it's a classic heirloom or a rare
              collector’s item, we ensure a transparent, fair process. Trust us
              to help you unlock the true worth of your timeless treasure.
            </p>
          </div>

          <div className="md:relative flex justify-center bottom-[-10%] lg:bottom-[0%] 2xl:bottom-[-10%]">
            <CustomImage
              srcAttr={watches4}
              titleAttr=""
              altAttr=""
              className="w-[100%] 2xl:!w-[75%] 2xl:h-[590px] object-cover"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="container mx-auto px-6 2xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 ">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xl font-belleza mb-6">
              We Buy and Sell Luxury and High-End Watches
            </h2>
            <div className="  inline-block">
              <CustomImage
                srcAttr={watches7}
                titleAttr=""
                altAttr=""
                className="w-[100%] lg:!h-[450px] 2xl:!h-[500px]"
              />
            </div>
          </div>

          <div>
            <div className="w-full border-t border-[#DFDEDB]"></div>

            <p className="mt-8 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
              Looking to buy or sell a luxury watch? We specialize in high-end
              timepieces, offering a seamless experience for watch enthusiasts,
              collectors, and sellers alike. Whether you’re parting with a
              premium brand like Rolex, Patek Philippe, or Omega, or seeking to
              purchase an iconic watch, we provide competitive offers and
              genuine authenticity.
            </p>

            <p className="mt-12 md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed text-black">
              When buying luxury watches, we carefully consider several key
              factors, including:
            </p>
            <ul className="mt-2 space-y-2 md:text-md lg:text-lg 2xl:text-[24px] text-black">
              <li>
                Brand & Model – Renowned names like Rolex, Cartier, and
                Breitling hold greater value.
              </li>
              <li>
                Condition – Scratches, wear, and maintenance history impact the
                watch’s value.
              </li>
              <li>
                Authenticity – Original parts, serial numbers, and documentation
                are verified.
              </li>
              <li>
                Age – Vintage, antique, and rare models can increase in value
                over time.
              </li>
              <li>
                Movement Type – Mechanical, automatic, and quartz movements are
                evaluated.
              </li>
              <li>
                Box & Papers – Watches with their original box, warranty, and
                papers are more desirable.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="container mx-auto px-6 2xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-5xl 2xl:text-6xlfont-belleza mb-4 lg:mb-8 2xl:mb-16">
              We’re Here to Help You Every Step of the Way
            </h2>
            <p className=" md:text-md lg:text-lg 2xl:text-[24px] leading-relaxed">
              Selling or buying a luxury watch can be overwhelming, but we’re
              here to make the process easy and stress-free. Our knowledgeable
              team is ready to guide you with expert advice, transparent
              evaluations, and fair offers.
            </p>
            <p className=" md:text-md lg:text-lg 2xl:text-[24px] pt-6">
              Whether you’re looking to sell a high-end timepiece or purchase a
              fine luxury watch, we’re committed to providing you with
              exceptional service. From answering your questions to evaluating
              your watch’s value, we ensure a smooth and trustworthy experience
              tailored to your needs."
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 items-end">
            <CustomImage
              srcAttr={watches2}
              titleAttr=""
              altAttr=""
              className="w-[90%]  lg:!h-[350px] 2xl:!h-auto object-cover"
            />
            <CustomImage
              srcAttr={watches3}
              titleAttr=""
              altAttr=""
              className="w-[100%]  lg:!h-[450px] 2xl:!h-auto  object-cover"
            />
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}

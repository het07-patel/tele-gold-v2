import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import estate1 from "@/assets/images/what-we-buy/estate-jewelry/estate-1.png";
import estate2 from "@/assets/images/what-we-buy/estate-jewelry/estate-2.webp";
import estate3 from "@/assets/images/what-we-buy/estate-jewelry/estate-3.webp";
import estate4 from "@/assets/images/what-we-buy/estate-jewelry/estate-4.webp";
import estateBackground from "@/assets/images/what-we-buy/estate-jewelry/estate-background.webp";
import estateSwiper1 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-1.webp";
import estateSwiper2 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-2.webp";
import estateSwiper3 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-3.webp";
import estateSwiper4 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-4.webp";
import estateSwiper5 from "@/assets/images/what-we-buy/estate-jewelry/estate-swiper-5.webp";
import {
  AnimatedSection,
  CustomImage,
  EstateJewelrySwiper,
} from "@/components/dynamiComponents";

import HeadingTitle from "@/components/HeadingTitle";
import KeepInTouch from "@/components/KeepInTouch";

const animatedContent = [
  {
    img: estate2,
    titleAttr: "",
    altAttr: "",
    description: [
      "The value of estate diamond jewelry is deeply tied to its age, origin, and historical significance. Older pieces from iconic eras such as the Victorian, Art Deco, or Edwardian periods often showcase distinctive design elements and exceptional craftsmanship that highlight the artistry of their time.",
      "In addition to its age and style, the provenance of estate jewelry plays a crucial role in determining its value. Details about its maker, previous ownership, and any unique hallmarks can enhance its authenticity and appeal. These factors help both collectors and sellers accurately assess its worth and significance.",
    ],

    direction: "LTF",
  },
];

const jewelryData = [
  {
    title: "Victorian Era Diamond Jewelry",
    img: estateSwiper1,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Art Deco Diamond Jewelry",
    img: estateSwiper2,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Edwardian Era Diamond Jewelry",
    img: estateSwiper3,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Retro Diamond Jewelry",
    img: estateSwiper4,
    titleAttr: "",
    altAttr: "",
  },
  {
    title: "Antique Diamond Brooches and Rings",
    img: estateSwiper5,
    titleAttr: "",
    altAttr: "",
  },
];

export default function EstateJewelry() {
  return (
    <>
      <section>
        <Hero
          title="Turn Your Estate Diamond Jewelry into Instant Value"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>

      <section className="relative w-full pt-12 md:pt-18 xl:pt-24 2xl:pt-48">
        <div className="absolute top-[5%] md:top-[8%] lg:top-[0%] xl:top-[6%] 2xl:top-[10%] inset-0 flex flex-col items-start px-10 4xl:px-20">
          <div className="w-2xl">
            <h1 className="text-xl xss:text-3xl md:text-5xl 4xl:text-7xl font-belleza uppercase text-primary leading-tight">
              ESTATE DIAMOND <br /> JEWELRY
            </h1>
          </div>

          <div className="max-w-2xl  mt-0 ml-[10%] 2xl:ml-[30%] hidden lg:block">
            <p className=" text-lg 2xl:text-[24px]">
              Estate diamond jewelry holds timeless charm and unique character,
              often featuring intricate designs and high-quality craftsmanship,
              making each piece a valuable treasure with a story to tell.
            </p>
          </div>
        </div>

        <div>
          <CustomImage
            titleAttr=""
            altAttr=""
            srcAttr={estate1}
            className="w-full object-cover"
          />
        </div>
        <div className="py-4 md:pt-6 px-2 md:px-6 lg:hidden">
          <p className=" text-primary">
            Estate Jewelry refers to previously owned fine jewelry, often
            vintage or antique, that carries history and craftsmanship. These
            pieces can range from antique Victorian and Art Deco designs to more
            modern, high-end luxury jewelry.
          </p>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div>
          <HeadingTitle sectionName="Age And Origin Of Estate Jewelry" />
        </div>
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <EstateJewelrySwiper
          backgroundImg={estateBackground}
          jewelryItems={jewelryData}
        />
      </section>

      <section className="container pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <div className="2xl:translate-y-[15%]">
          <p className="font-belleza text-3xl md:text-6xl lg:text-8xl xl:text-8xl 3xl:text-[180px] text-[#1513131A] uppercase lg:tracking-wider">
            Unique Jewelry
          </p>
        </div>
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6 items-start   ">
          <div className="md:relative flex  bottom-[-10%] lg:bottom-[0%] 2xl:bottom-[-10%]">
            <CustomImage
              srcAttr={estate3}
              titleAttr=""
              altAttr=""
              className="w-[100%] 2xl:!w-[68%] 3xl:h-[550px] object-cover "
            />
          </div>
          <div>
            <div>
              <CustomImage
                srcAttr={estate4}
                titleAttr=""
                altAttr=""
                className="w-full "
              />
            </div>
            <p className="mt-4 md:text-md lg:text-lg 2xl:text-[28px] leading-relaxed pt-6">
              Discover the timeless elegance of estate diamond jewelry, where
              history meets luxury. Whether you're buying, selling, or
              exploring, our expertise ensures that each piece is appreciated
              for its true value and beauty.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}

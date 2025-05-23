import vintagePlatinumJewelryHero from "@/assets/images/what-we-sell/vintage-platinum-jewelry/hero-banner.webp";
import Hero from "@/components/Hero";
import KeepInTouch from "@/components/KeepInTouch";
import HeadingTitle from "@/components/HeadingTitle";

import ourValues1 from "@/assets/images/what-we-sell/vintage-platinum-jewelry/ourvalue-1.webp";
import ourValues2 from "@/assets/images/what-we-sell/vintage-platinum-jewelry/ourvalue-2.webp";
import ourValues3 from "@/assets/images/what-we-sell/vintage-platinum-jewelry/ourvalue-3.webp";
import ourValues4 from "@/assets/images/what-we-sell/vintage-platinum-jewelry/ourvalue-4.webp";
import { CustomImage } from "@/components/dynamiComponents";

import ourStory from "@/assets/images/what-we-sell/vintage-platinum-jewelry/our-story.webp";
import iternalSstory from "@/assets/images/what-we-sell/vintage-platinum-jewelry/iternal-story.webp";
import specializesGolDiamonds from "@/assets/images/what-we-sell/vintage-platinum-jewelry/specializes-gold-diamonds.webp";

import aboutTeleGold from "@/assets/images/what-we-sell/vintage-platinum-jewelry/about-tele-gold.webp";
const values = [
  {
    image: ourValues1,
    altAttr: "",
    titleAttr: "",
    title: "Platinum Engagement Rings",
    description:
      "Timeless vintage platinum engagement rings crafted to symbolize eternal love and elegance.",
  },
  {
    image: ourValues2,
    altAttr: "",
    titleAttr: "",
    title: "Platinum Necklaces",
    description:
      "Discover vintage platinum necklaces that combine luxury, artistry, and timeless sophistication.",
  },
  {
    image: ourValues3,
    altAttr: "",
    titleAttr: "",
    title: "Platinum Bracelets",
    description:
      "Elegant vintage platinum bracelets designed to add a touch of refined charm to any occasion.",
  },
  {
    image: ourValues4,
    altAttr: "",
    titleAttr: "",
    title: "Platinum Earrings",
    description:
      "Stunning vintage platinum earrings that blend classic beauty with enduring style.",
  },
];
export default function VintagePlatinumJewelry() {
  return (
    <>
      <Hero
        title={"Elegant Vintage Platinum Jewelry for Timeless Style"}
        titleAttr=""
        altAttr=""
        imageSrc={vintagePlatinumJewelryHero}
        textAlignment="center"
      />
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <HeadingTitle
          sectionName="Why Choose Vintage Platinum Jewelry from Us"
          description="Discover authentic vintage platinum jewelry, meticulously curated for timeless elegance. Our commitment to quality, authenticity, and unmatched craftsmanship ensures you get exceptional pieces that carry history, charm, and enduring value."
        />
        <div className="hidden lg:block my-16 2xl:my-28">
          <div className="flex flex-wrap gap-6 justify-center ">
            {values.map((value, index) => (
              <div
                key={index}
                className={`card-container group 4xl:w-[357px] 4xl:h-[450px]  3xl:w-[300px] 3xl:h-[400px]  xl:w-[250px] xl:h-[350px] lg:w-[200px] lg:h-[300px] md:w-[300px] md:h-[450px] h-[450px] w-[350px] rounded-xl overflow-hidden ${
                  index % 2 === 0 ? "lg:rotate-12" : "lg:-rotate-12"
                }`}
              >
                <div className="card w-full h-full transition-all duration-1000   rounded-2xl  border-black border-2 ">
                  <div className="card-front">
                    <CustomImage
                      srcAttr={value.image}
                      altAttr={value.altAttr}
                      layout="fill"
                      titleAttr={value.titleAttr}
                      className="rounded-xl w-full h-full object-cover"
                    />
                    <div className="card-title absolute  bottom-0 left-0 3xl:pb-12 right-0 bg-transparent bg-opacity-50 p-8 text-white lg:text-lg xl:text-2xl font-bold text-center">
                      {value.title}
                    </div>
                  </div>
                  <div className="card-back   bg-[#2E2E2E]  text-white absolute w-full h-full flex  justify-between flex-col rounded-xl overflow-hidden">
                    <div>
                      <h3 className=" xl:pt-8 lg:pt-4 pt-4 px-4 lg:px-2 xl:px-2 3xl:px-6 4xl:px-8 3xl:text-3xl 2xl:text:2xl xl:text:xl lg:text-lg text-2xl font-bold md:mb-2 ">
                        {value.title}
                      </h3>
                    </div>
                    <div>
                      <p className="xl:text-sm px-2 lg:text-[15px] xl:px-2 3xl:px-6 4xl:px-8 pb-6 text: ">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden mt-8">
          <div className="grid gird-cols-1  md:grid-cols-2 gap-6 justify-center ">
            {values.map((value, index) => (
              <div
                className="relative w-full h-auto  rounded-xl flex justify-center overflow-hidden "
                key={index}
              >
                <CustomImage
                  srcAttr={value.image}
                  altAttr={value.altAttr}
                  titleAttr={value.titleAttr}
                  priority
                  className={`object-cover rounded-xl w-[100%]`}
                />
                <div className="absolute bottom-0 left-0 pb-12 right-0 bg-transparent bg-opacity-50 p-8 text-white text-center z-40">
                  <p className="font-calistoga text-3xl py-4 font-bold">
                    {value.title}
                  </p>
                  <p className="font-calistoga text-sm"> {value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-14 xl:py-24 2xl:py-36 bg-white">
        <div className="container space-y-10 lg:space-y-0 leading-relaxed">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-0 items-center">
            <CustomImage
              srcAttr={ourStory}
              titleAttr=""
              altAttr=""
              className="object-cover w-full lg:w-[80%] "
            />
            <div className="w-10/12">
              <h3 className="text-4xl lg:text-5xl font-belleza text-black">
                Timeless Elegance in Every Piece
              </h3>
              <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px]">
                Discover vintage platinum jewelry that transcends trends. Each
                piece reflects classic beauty, superior craftsmanship, and
                enduring charm, making it a perfect addition to your treasured
                collection.
              </p>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 place-items-center gap-10 lg:gap-16 ">
            <div>
              <h3 className="text-4xl lg:text-5xl font-belleza text-black">
                Unmatched Craftsmanship & Quality
              </h3>
              <p className="mt-4 md:text-md lg:text-lg 2xl:text-[24px]">
                Our vintage platinum jewelry showcases intricate designs and
                meticulous attention to detail, preserving the legacy of fine
                artistry and adding timeless sophistication to every look.
              </p>
            </div>
            <CustomImage
              srcAttr={iternalSstory}
              titleAttr=""
              altAttr=""
              className="object-cover lg:-mt-10"
            />
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36 container">
        <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-full gap-10 lg:gap-20 leading-relaxed">
          <div className="lg:w-[60%]">
            <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-belleza text-black">
              Timeless Elegance: Discover the Charm of Vintage Platinum Jewelry
            </h3>
            <p className="md:text-md lg:text-lg 2xl:text-[24px] mt-8">
              Immerse yourself in the timeless beauty of vintage platinum
              jewelry, where classic designs meet exceptional craftsmanship.
              Each piece in our collection carries a legacy of sophistication,
              offering unmatched elegance, durability, and luxury for those
              seeking something truly unique and enduring.
            </p>
          </div>
          <div className="lg:w-[40%]">
            <CustomImage
              titleAttr=""
              altAttr=""
              srcAttr={specializesGolDiamonds}
              className="w-full object-cover"
            />
          </div>
        </div>
      </section>
      <section className="container py-10 md:py-14 xl:py-24 2xl:py-36">
        <HeadingTitle
          headingClassName="text-black"
          sectionName="Platinum Legacy with Tele Gold"
        />
        <div className=" flex flex-col lg:flex-row justify-between items-center mt-10 gap-10">
          <div className="w-full lg:w-[30%]">
            <CustomImage
              titleAttr=""
              altAttr=""
              srcAttr={aboutTeleGold}
              className="w-full lg:h-screen object-cover "
            />
          </div>
          <div className="flex flex-col lg:w-[70%] gap-6">
            <div className="flex flex-col-reverse lg:flex-row w-full gap-10">
              <div className="lg:w-[70%] md:text-md lg:text-lg 2xl:text-[24px] space-y-3">
                <p>
                  At Tele Gold Jewelers, we honor the timeless allure of
                  platinum jewelry. Our carefully curated collection reflects
                  decades of passion and expertise, ensuring each piece embodies
                  both vintage charm and modern elegance.
                </p>
              </div>
              <CustomImage
                titleAttr=""
                altAttr=""
                srcAttr={ourStory}
                className="w-full lg:w-[30%] object-cover"
              />
            </div>
            <div className="flex flex-col lg:flex-row w-full gap-10">
              <CustomImage
                titleAttr=""
                altAttr=""
                srcAttr={ourStory}
                className="w-full lg:w-[30%] object-cover"
              />
              <div className="lg:w-[70%] md:text-md lg:text-lg 2xl:text-[24px] space-y-3">
                <p>
                  When you choose Tele Gold, you’re not just buying
                  jewelry—you’re investing in heirloom-quality craftsmanship and
                  a legacy of trust. Let our platinum collection be your next
                  timeless treasure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <KeepInTouch />
    </>
  );
}

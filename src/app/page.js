import silverLeafPendant from "@/assets/images/home/silver-leaf-pendant.webp"
import chain from "@/assets/images/home/chain.webp"
import classic from "@/assets/images/home/classic.webp"
import cuban from "@/assets/images/home/cuban.webp"
import butterflyNecklace from "@/assets/images/home/butterfly-necklace.webp"
import diamondChainPendant from "@/assets/images/home/diamond-chain-pendant.webp"
import doubleLoopNecklace from "@/assets/images/home/double-loop-necklace.webp"
import { AnimatedCircleText, CustomImage, ScrollImageSection } from "@/components/dynamiComponents"
import { LinkButton } from "@/components/button"
import shopByShape from "@/assets/images/home/shop-by-shape.webp"
import round from "@/assets/images/home/round.webp"
import emerald from "@/assets/images/home/emerald.webp"
import cushion from "@/assets/images/home/cushion.webp"
import princess from "@/assets/images/home/princess.webp"
import purity from "@/assets/images/icons/purity.svg";
import rightArrow from "@/assets/images/icons/right-arrow.svg"
import oval from "@/assets/images/home/oval.webp"
import marquise from "@/assets/images/home/marquise.webp"
import shopTheLookBg from "@/assets/images/home/shop-the-look-bg.webp"
import pendentCollection from "@/assets/images/home/pendent-collection.webp"
import jewelryBoxDiamondRing from "@/assets/images/home/jewelry-box-diamond-ring.webp"
import necklaceCloseup from "@/assets/images/home/necklace-closeup.webp"
import handWithRing from "@/assets/images/home/hand-with-ring.webp"
import diamondNecklaceWoman from "@/assets/images/home/diamond-necklace-woman.webp"
import engagementRing from "@/assets/images/home/engagement-rings.webp"
import HeadingTitle from "@/components/HeadingTitle"
import Hero from "@/components/Hero"
import Marquee from "@/components/Marquee"

const diamondShapes = [{
  title: "Round",
  shapeImg: round,
  altAttr: "",
  titleAttr: ""
}, {
  title: "Emerald",
  shapeImg: emerald,
  altAttr: "",
  titleAttr: ""
}, {
  title: "Cushion",
  shapeImg: cushion,
  altAttr: "",
  titleAttr: ""
}, {
  title: "Princess",
  shapeImg: princess,
  altAttr: "",
  titleAttr: ""
}, {
  title: "Oval",
  shapeImg: oval,
  altAttr: "",
  titleAttr: ""
},
{
  title: "Marquise",
  shapeImg: marquise,
  altAttr: "",
  titleAttr: ""
},]


const collectionCategory = [{
  title: "Classic",
  image: classic,
  altAttr: "",
  titleAttr: ""
},
{
  title: "Cuban",
  image: cuban,
  altAttr: "",
  titleAttr: ""
},
{
  title: "Chain",
  image: chain,
  altAttr: "",
  titleAttr: ""
}]
export default function Home() {
  return (
    <>
      <Hero videoSrc={"/videos/homeHero.mp4"} title={"Discover the Allure of Rare & Unique Estate Jewelry"} description={"Discover an exceptional collection of estate jewelry, dazzling diamonds, rare coins, and luxury watches. Experience elegance, value, and timeless craftsmanship with us."} isHomePage={true} />
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 place-items-center">
          <div className="leading-relaxed text-black">
            <h3 className="text-4xl md:text-5xl  lg:text-6xl 2xl:text-[80px] font-belleza">Welcome to TeleGold Jewelry Store
            </h3>
            <div className=" lg:w-[90%] 2xl:w-[80%]">
              <p className="md:text-md lg:text-lg lg:text-start 2xl:text-[24px] my-10 lg:my-20">Explore unique estate jewelry, rare coins, dazzling diamonds, and luxury watches that reflect timeless beauty and craftsmanship.</p>
            </div>
            <LinkButton
              href="#"
              className="!w-fit !py-5 lg:!py-6 lg:!px-8 !rounded-lg !bg-black text-white hover:!bg-white hover:!text-black hover:border-basegrey"
              arrow={true}
            >
              Learn More
            </LinkButton>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
            <div className="grid grid-rows-2 gap-6 md:gap-16 place-items-center ">
              <div><CustomImage altAttr="" titleAttr="" srcAttr={silverLeafPendant} className="rounded-lg" />
              </div>
              <div><CustomImage altAttr="" titleAttr="" srcAttr={diamondChainPendant} className="rounded-lg" /></div>
            </div>
            <div className="grid grid-rows-2 gap-6 place-items-center ">
              <div><CustomImage altAttr="" titleAttr="" srcAttr={butterflyNecklace} className="rounded-lg" /></div>
              <div><CustomImage altAttr="" titleAttr="" srcAttr={doubleLoopNecklace} className="rounded-lg" /></div>
            </div>
          </div>
        </div>
      </section>
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <div className="text-center">
          <CustomImage srcAttr={shopByShape} className="inline-block w-64 2xl:w-80" altAttr="" titleAttr="" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 my-10 gap-5 lg:gap-10">
          {diamondShapes.map((shape, index) => {
            return (
              <div key={index} className="bg-white px-4 py-4 2xl:py-6 text-center rounded-lg">
                <CustomImage altAttr={shape.altAttr} titleAttr={shape.titleAttr} className="inline-block" srcAttr={shape.shapeImg} />
                <h3 className=" font-belleza italic text-xl">
                  {shape.title}
                </h3>
              </div>
            );
          })}
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <HeadingTitle sectionName="SHOP BY CATEGORY" description="Find rare estate jewelry, luxury watches, fine diamonds, and collectible coins, carefully curated for elegance, value, and timeless style." />

        <ScrollImageSection />
      </section >
      <section className="container lg:max-w-none pt-10 md:pt-14 xl:pt-24 2xl:pt-36 text-center ">
        <div className="flex flex-col items-center justify-center w-full lg:relative 2xl:h-[70vh]">
          <div className="lg:absolute lg:inset-0 flex  flex-col md:flex-row justify-between gap-6 lg:gap-0">
            <CustomImage srcAttr={jewelryBoxDiamondRing} altAttr="" titleAttr="" className="w-screen lg:w-48 lg:h-48 2xl:w-60 2xl:h-60" />
            <CustomImage srcAttr={necklaceCloseup} altAttr="" titleAttr="" className="w-screen lg:w-48 lg:h-48 2xl:w-60 2xl:h-60" />
          </div>
          <div className="my-6 lg:my-0 lg:w-1/2 z-40 text-primary">
            <h5 className="text-lg font-semibold">ABOUT US</h5>
            <h2 className="font-belleza text-2xl lg:text-5xl my-4 uppercase">Our unwavering passion for jewelry drives us to pioneer and deliver exceptional experiences and lasting value to our clients.</h2>
            <p className="md:text-md lg:text-lg  2xl:text-[24px]">Fueled by our love for fine jewelry, we aim to create a remarkable experience for our clients. By blending timeless craftsmanship with innovation, we deliver exceptional value and curate pieces that capture elegance, beauty, and individuality.</p>
            <div className="flex justify-center">  <LinkButton
              href="/about-us"
              roundedArrow={true}
              className="uppercase font-belleza w-fit mt-4 lg:mt-10 4xl:!h-[3rem]  !bg-transparent hover:!bg-black hover:!text-white  !border-[#383838] "
            >
              KNOW MORE
            </LinkButton></div>
          </div>
          <div className="2xl:px-10 lg:absolute lg:container lg:inset-x-0 lg:bottom-0 flex flex-col md:flex-row justify-between items-center  w-full">
            <CustomImage srcAttr={handWithRing} altAttr="" titleAttr="" className="w-full md:w-1/2 lg:w-56 lg:h-56 2xl:w-60 2xl:h-60" />
            <CustomImage srcAttr={diamondNecklaceWoman} altAttr="" titleAttr="" className="w-full md:w-1/2 lg:w-60 lg:h-60 2xl:w-72 2xl:h-72" />
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <div className="relative">
          <Marquee variant="engagement-rings" />
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <CustomImage srcAttr={engagementRing} altAttr="" titleAttr="" className="w-[80%] lg:w-1/2" />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center">
          <h3 className="text-2xl lg:text-3xl font-belleza">Engagement Rings</h3>
          <LinkButton
            href="/what-we-sell/rings"
            roundedArrow={true}
            className="uppercase font-belleza w-fit lg:mt-10 4xl:!h-[3rem]  !bg-transparent hover:!bg-black hover:!text-white  !border-[#383838] "
          >
            DISCOVER
          </LinkButton></div>
      </section>
      <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
        <div className="w-full flex flex-col lg:flex-row justify-between gap-5">
          <div className="lg:w-[60%]">
            <div className="flex flex-col justify-between h-full">
              <h3 className="text-3xl md:text-5xl lg:text-6xl 2xl:text-7xl font-belleza lg:w-[90%] text-black">Embrace the Beauty of Minimalist Elegance</h3>
              <div>
                <p className="lg:w-[60%] md:text-md lg:text-lg lg:text-start 2xl:text-[24px] py-4 lg:py-0">
                  Step into the world of minimalist fashion, where clean lines, subtle designs, and timeless elegance create a refined, effortless style that speaks volumes without saying too much.
                </p>
                <div className="grid grid-cols-3 mt-6 gap-3 lg:gap-5">
                  {collectionCategory.map((category, index) => {
                    return (<div key={index} className="relative">
                      <CustomImage srcAttr={category.image} altAttr={category.altAttr} className="rounded-xl " titleAttr={category.titleAttr} />
                      <h4 className="absolute bottom-4 left-4 text-white font-bold z-10 md:text-md lg:text-lg lg:text-start 2xl:text-[24px]">{category.title}</h4>
                    </div>);
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] relative">
            <CustomImage srcAttr={pendentCollection} className="rounded-xl" altAttr="" titleAttr="" />
            <h4 className="absolute bottom-4 text-2xl left-4 text-white font-bold z-10">Pendent</h4>
            <LinkButton collectionArrow={true} href="/what-we-sell/pendants" className="absolute left-5 top-10 rounded-full !bg-transparent !text-white !font-normal capitalize !border-[1px]" >View all collection </LinkButton>
          </div>
        </div>
      </section>
      <section className="pt-10 md:pt-14 xl:pt-24 2xl:pt-36 relative ">
        <CustomImage srcAttr={shopTheLookBg} altAttr="" titleAttr="" />

        <div className="absolute bottom-[10%] left-[10%]   text-primary">
          <div className="flex items-center gap-6">
            <h3 className="text-6xl font-belleza">Shop the look</h3>
            <AnimatedCircleText
              text="Shop Now • Shop Now • Shop Now • Shop Now • "
              arrowImage={rightArrow}
              purityImage={purity}
            />
          </div>
        </div>
      </section>

    </>
  );
}

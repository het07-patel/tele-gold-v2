"use client";
import Hero from "@/components/Hero";
import heroCoin from "@/assets/images/hero-coins.webp";
import HeadingTitle from "@/components/HeadingTitle";
import {
  AnimatedCircleText,
  AnimatedSection,
  CustomImage,
  Timeline,
  VideoSection,
} from "@/components/dynamiComponents";
import aboutUsThumbnail from "@/assets/images/about-us/about-us-thumbnail.webp";
import aboutUs1 from "@/assets/images/about-us/about-us-1.webp";
import aboutUs2 from "@/assets/images/about-us/about-us-2.webp";
import aboutUs3 from "@/assets/images/about-us/about-us-3.webp";
import aboutUs4 from "@/assets/images/about-us/about-us-4.webp";
import KeepInTouch from "@/components/KeepInTouch";
import rightArrowGrey from "@/assets/images/icons/right-arrow-grey.svg";
import purity from "@/assets/images/icons/grey-purity.svg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const animatedContent = [
  {
    img: aboutUs1,
    altAttr: " ",
    titleAttr: "",
    description: [
      "At the heart of our business is a commitment to delivering an exceptional experience rooted in trust, transparency, and professionalism. Whether you’re buying, selling, or seeking an appraisal, we ensure fair pricing, clear communication, and personalized service every step of the way. Our goal is to build lasting relationships by offering real value, expert advice, and a seamless process that meets your unique needs.",
    ],

    direction: "LTF",
  },
];

const timelineItems = [
  {
    no: 1,
    title: "Trusted Experience",
    description:
      "With over 30 years in business and 35+ years of combined expertise, we bring deep knowledge and professionalism to every transaction.",
  },
  {
    no: 2,
    title: "Honesty & Transparency",
    description:
      "We handle every appraisal and sale with integrity, ensuring fair prices and clear communication throughout the process.",
  },
  {
    no: 3,
    title: "Exceptional Service",
    description:
      "Our personalized, customer-focused approach guarantees a seamless and rewarding experience.",
  },
  {
    no: 4,
    title: "Maximum Value",
    description:
      "We strive to provide the best value, helping you get the most for your jewelry, coins, and collectibles.",
  },
];

export default function AboutUs() {
  return (
    <>
      <section>
        <Hero
          title="Commitment of Quality, Transparency, and Service"
          imageSrc={heroCoin}
          textAlignment="center"
          titleAttr=""
          altAttr=""
        />
      </section>

      <section className="relative mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <div className="flex items-start justify-center">
          <HeadingTitle
            sectionName="A Legacy of Excellence in Jewelry & Collectibles"
            description="With over 30 years of industry experience and 35+ years of combined jewelry and coin expertise, we specialize in buying and selling diamonds, gold, silver, coins, paper currency, and fine estate items. Built on a foundation of honesty, transparency, and exceptional service, we are dedicated to providing every client with expert guidance, fair appraisals, and a seamless, rewarding experience that ensures the best value for their precious items."
          />
        </div>
        <div className="2xl:pt-20 lg:pt-14 md:pt-8 pt-4">
          <VideoSection
            src="/video/coinVideo.mp4"
            videoClassName="w-full h-[85vh]"
            thumbnail={aboutUsThumbnail}
            titleAttr=""
            altAttr=""
          />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <HeadingTitle sectionName="Our Promise: Honesty, Value, and Exceptional Service" />
        <div className="container  pt-4 md:pt-8 lg:pt-14 2xl:pt-20 ">
          <AnimatedSection {...animatedContent[0]} />
        </div>
      </section>

      <section className="mt-10 md:mt-14 xl:mt-16 2xl:mt-36">
        <div className="lg:hidden flex justify-center text-center md:pt-8 pt-4 px-2">
          <h2 className="text-3xl md:text-5xl font-belleza  leading-normal">
            Why Choose Tele Gold Jewelers
          </h2>
        </div>
        <Timeline items={timelineItems} />
      </section>

      <section className="bg-[#FAFAF8] pt-10 md:pt-14 xl:pt-16 2xl:pt-36 pb-20 md:pb-28 xl:pb-32 2xl:pb-56">
        <div className={` relative `}>
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="absolute xl:block hidden top-[-55%] 2xl:top-[-50%] left-[6%] ">
              <CustomImage
                srcAttr={aboutUs4}
                altAttr=""
                titleAttr=""
                className="2xl:w-full w-[70%]  h-full"
              />
            </div>
            <div className="relative lg:bottom-[-30%] flex justify-center">
              <CustomImage
                srcAttr={aboutUs2}
                altAttr="Left Image"
                className="w-[20%] lg:h-auto lg:w-[30%]"
              />
            </div>

            <div
              className={`text-center justify-center flex flex-col lg:w-[130%] lg:translate-x-[-20%] `}
            >
              <h2 className="text-4xl lg:text-5xl font-belleza mb-4 uppercase">
                Our Mission
              </h2>
              <p className="text-md md:text-lg lg:text-lg 2xl:text-[24px] leading-relaxed">
                Our mission is to create a trustworthy and seamless experience
                for every client. Whether you’re selling gold, diamonds, coins,
                or estate jewelry, we are dedicated to offering honest
                appraisals, fair prices, and personalized guidance. By combining
                our deep industry knowledge with a customer-first approach, we
                aim to build enduring connections and ensure that every
                transaction reflects our commitment to integrity,
                professionalism, and maximum value.
              </p>
            </div>

            <div className="relative flex justify-center lg:justify-end">
              <CustomImage
                srcAttr={aboutUs3}
                altAttr=" "
                titleAttr=""
                className="w-full lg:w-[80%]"
              />
            </div>
            <div className="hidden lg:block absolute lg:bottom-[-56%] xl:bottom-[-51%] 2xl:bottom-[-20%] left-[65%] lg:left-[56%] text-primary">
              <div className="flex items-center gap-6">
                <AnimatedCircleText
                  text="Shop Now • Shop Now • Shop Now • Shop Now • "
                  textColor="black"
                  arrowImage={rightArrowGrey}
                  purityImage={purity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pt-10 md:pt-14 xl:pt-16 2xl:pt-36">
        <KeepInTouch />
      </section>
    </>
  );
}

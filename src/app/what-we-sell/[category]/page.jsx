"use client";
import NotFound from "@/app/not-found";
import CategoryFeatureSection from "@/components/categoryFeatureSection";
import {
  AlternatingFeatureBlock,
  HorizontalScrollCarousel,
} from "@/components/dynamiComponents";
import Hero from "@/components/Hero";
import HighlightSection from "@/components/highlightSection";
import JewelryCarousel from "@/components/jewelryCarousel";
import KeepInTouch from "@/components/KeepInTouch";
import PromoBanner from "@/components/promoBanner";
import { subCategoryContent } from "@/utils/whatwesell-content";
import { useParams } from "next/navigation";
import React from "react";

export default function WhatWeBuyCategory() {
  const { category } = useParams();
  const categoryData = subCategoryContent.find(
    (item) => item.url === `/${category}`
  );
  if (!categoryData) {
    return <NotFound />;
  }

  return (
    <>
      <Hero
        title={categoryData.heroSection.heroTitle}
        imageSrc={categoryData.heroSection.heroImage}
        titleAttr={categoryData.heroSection.titleAttr}
        altAttr={categoryData.heroSection.altAttr}
        textAlignment="center"
      />

      {categoryData.categoryFeature ? (
        <CategoryFeatureSection {...categoryData.categoryFeature} />
      ) : null}

      {categoryData.highlightSection ? (
        <HighlightSection {...categoryData.highlightSection} />
      ) : null}

      {categoryData.promoBanner ? (
        <PromoBanner {...categoryData.promoBanner} />
      ) : null}

      {categoryData.jewelryCarousel ? (
        <JewelryCarousel {...categoryData.jewelryCarousel} />
      ) : null}

      {categoryData.alternatingFeature ? (
        <section className="container pt-10 md:pt-14 xl:pt-24 2xl:pt-36">
          <h3 className="text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl mb-6 md:mb-16 2xl:mb-24 text-center uppercase font-belleza text-black">
            {categoryData.alternatingFeature.title ||
              "Why Choose Tele Gold Jewelers?"}
          </h3>
          <div className="space-y-8 lg:space-y-24">
            {categoryData.alternatingFeature.feature.map((feature, i) => {
              return <AlternatingFeatureBlock key={i} {...feature} />;
            })}
          </div>
        </section>
      ) : null}

      <HorizontalScrollCarousel />

      <KeepInTouch />
    </>
  );
}

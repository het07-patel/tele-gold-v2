import { WebsiteUrl } from "@/utils/environments";
import { generateMetadata as customGenerateMetadata } from "@/utils/metaConfig";
import { subCategoryContent } from "@/utils/whatwesell-content";

// Server-side metadata generation
export async function generateMetadata({ params }) {
  const { category } = (await params) || {};
  const categoryData = subCategoryContent.find(
    (item) => item.url === `/${category}`
  );
  return customGenerateMetadata({
    title: categoryData?.metaTitle,
    description: categoryData?.metaDescription,
    keywords: categoryData?.metaKeywords,
    url: `${WebsiteUrl}${categoryData?.url}`,
  });
}

// Layout component (Server Component by default)
export default function WhatWeSellCategoryLayout({ children }) {
  return <div>{children}</div>;
}

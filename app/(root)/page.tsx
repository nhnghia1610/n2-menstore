import Collections from "@/components/Collections";
import BenefitSection from "@/components/layout/BenefitSection";
import ProductList from "@/components/ProductList";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Collections />
      <BenefitSection />
      <ProductList />
    </>
  );
}

export const dynamic = "force-dynamic";


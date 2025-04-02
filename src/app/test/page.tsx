"use client";

import Button from "@/components/common/Button";
import FeatureHero from "@/components/common/FeatureHero";

export default function page() {
  return (
    <main className="w-screen">
      <h1 className="text-xl font-bold mb-4">🧪 테스트 페이지</h1>
      <FeatureHero
        imageSrc="/FeatureImage.svg"
        alt="Feature Image"
        className=" h-[690px]"
      >
        <Button
          buttonType="button"
          onClick={() => console.log("clicked")}
          className="pl-[15px] pr-[15px] pt-[11px] pb-[11px]  w-[114px] h-[44px] "
        >
          더 알아보기
        </Button>
      </FeatureHero>
    </main>
  );
}

"use client";

import Button from "../common/Button";
import FeatureHero from "../common/FeatureHero";

export default function Main() {
  return (
    <main className="w-full mx-auto">
      <FeatureHero
        imageSrc="/FeatureImage.svg"
        alt="Feature Image"
        className="h-[690px]"
      >
        <Button
          buttonType="button"
          onClick={() => console.log("clicked!")}
          className="pl-[15px] pr-[15px] pt-[11px] pb-[11px]  w-[114px] h-[44px] mt-[50px]"
        >
          더 알아보기
        </Button>
      </FeatureHero>
    </main>
  );
}

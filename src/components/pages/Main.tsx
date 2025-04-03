"use client";

import FeatureHero from "../common/FeatureHero";

export default function Main() {
  return (
    <main className="w-screen">
      <FeatureHero
        imageSrc="/FeatureImage.svg"
        alt="Feature Image"
        className="h-[690px]"
      />
    </main>
  );
}

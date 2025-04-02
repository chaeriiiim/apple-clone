"use client";

type FeatureHeroProps = {
  imageSrc: string;
  alt?: string;
  className?: string;
};

export default function FeatureHero({
  imageSrc,
  alt,
  className = "",
}: FeatureHeroProps) {
  return (
    <div className={`w-screen ${className}`}>
      <img src={imageSrc} alt={alt} className="w-full h-auto object-cover" />
    </div>
  );
}

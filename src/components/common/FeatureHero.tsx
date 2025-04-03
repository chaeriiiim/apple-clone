"use client";

type FeatureHeroProps = {
  imageSrc: string;
  alt?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function FeatureHero({
  imageSrc,
  alt,
  className = "",
  children,
}: FeatureHeroProps) {
  return (
    <div className={`relative w-[100%] h-[690px] ${className}`}>
      <img src={imageSrc} alt={alt} className="w-full h-auto object-cover" />
      {children && (
        <div className="absolute top-[400px] left-[50%] -translate-x-1/2 z-10">
          {children}
        </div>
      )}
    </div>
  );
}

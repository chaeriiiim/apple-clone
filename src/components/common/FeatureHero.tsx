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
    <div className={`w-screen ${className}`}>
      <img src={imageSrc} alt={alt} className="w-full h-auto object-cover" />
      {children && (
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      )}
    </div>
  );
}

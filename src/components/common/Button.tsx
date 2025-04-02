"use client";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
  buttonType?: "button" | "submit" | "reset";
};

export default function Button({
  children,
  className = "",
  onClick,
  buttonType = "button",
}: ButtonProps) {
  return (
    <button
      type={buttonType}
      onClick={onClick}
      className={`bg-[#0071e3] text-white rounded-[30px] hover:brightness-110 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
}

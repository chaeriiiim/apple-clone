"use client";

type MainBoxProps = {
  children: React.ReactNode;
  className?: string;
};

export default function MainBox({ children, className = "" }: MainBoxProps) {
  return <div className={`${className}`}>{children}</div>;
}

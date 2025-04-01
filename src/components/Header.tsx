"use client";

import Image from "next/image";

const navItems = [
  "스토어",
  "Mac",
  "iPad",
  "iPhone",
  "Watch",
  "Vision",
  "AirPods",
  "TV 및 홈",
  "엔터테인먼트",
  "액세서리",
  "고객지원",
];

export default function Header() {
  return (
    <header className="text-sm">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-11">
        <nav className="flex items-center justify-center gap-8 w-full">
          <a href="#">
            <Image
              src="/apple_logo.png"
              alt="apple logo"
              width={30}
              height={30}
              className="h-auto w-6"
            />
          </a>

          {navItems.map((item, index) => (
            <a key={index} href="#" className="hover:opacity-80">
              {item}
            </a>
          ))}

          <a href="#">
            <Image
              src="/search.svg"
              alt="search icon"
              width={20}
              height={20}
              className="h-auto w-6"
            />
          </a>

          <a href="#">
            <Image src="/bag.svg" alt="bag icon" width={22} height={22} />
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Magnetic from "../ui/Magnetic/index";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-screen overflow-hidden items-center justify-center bg-zinc-50 font-sans ">
        <div className="flex flex-col gap-20">
            <Magnetic>
                <p className="text-black">Text</p>
            </Magnetic>
            <Magnetic>
                <Link href="/" className="text-black">Link</Link>
            </Magnetic>
            <Magnetic>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="currentColor" fill="none" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21L10.5484 13.4516M21 3L13.4516 10.5484M13.4516 10.5484L8 3H3L10.5484 13.4516M13.4516 10.5484L21 21H16L10.5484 13.4516" />
                </svg>
            </Magnetic>
        </div>
    </div>
  );
}

import Image from "next/image";
import Link from "next/link";
import type { Lounge } from "../types";

export function LoungeHeader({ lounge }: { lounge: Lounge }) {
  return (
    <header className="relative isolate flex h-[260px] items-center justify-center overflow-hidden bg-neutral-800 text-white sm:h-[320px]">
      <Image
        src={lounge.thumbnailImage}
        alt=""
        fill
        unoptimized
        preload
        className="-z-20 object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-black/30" />
      <Link
        href="/"
        className="absolute top-6 left-5 rounded px-2 py-1 text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-4 sm:left-10"
      >
        HOME
      </Link>
      <h1 className="px-5 text-center text-xl font-medium sm:text-2xl">
        {lounge.name}&apos;s LOUNGE
      </h1>
    </header>
  );
}

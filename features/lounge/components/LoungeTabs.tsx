"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";
import type { Lounge } from "../types";

const tabPaths: Record<string, string> = {
  STORY: "story",
  CONTENT: "content",
  COMMUNITY: "community",
};

export function LoungeTabs({
  handle,
  tabs,
}: {
  handle: string;
  tabs: Lounge["tabs"];
}) {
  const segment = useSelectedLayoutSegment();

  return (
    <nav aria-label="라운지 메뉴" className="flex border-b border-neutral-200">
      {tabs.map((tab) => {
        const path = tabPaths[tab.type];
        if (!path) return null;
        const active = segment === path;

        return (
          <Link
            key={tab.type}
            href={`/lounge/${encodeURIComponent(handle)}/${path}`}
            aria-current={active ? "page" : undefined}
            className={`flex-1 border-b-2 px-2 py-5 text-center text-sm font-semibold focus-visible:outline-2 focus-visible:outline-offset-[-4px] sm:text-lg ${
              active
                ? "border-neutral-900 text-neutral-900"
                : "border-transparent text-neutral-500 hover:text-neutral-900"
            }`}
          >
            {tab.name}
          </Link>
        );
      })}
    </nav>
  );
}

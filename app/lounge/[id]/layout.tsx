import { notFound } from "next/navigation";
import { getLounge } from "@/features/lounge/api";
import { LoungeHeader } from "@/features/lounge/components/LoungeHeader";
import { LoungeTabs } from "@/features/lounge/components/LoungeTabs";
import { isApiError } from "@/lib/http/client";

export default async function LoungeLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const lounge = await getLounge(id).catch((error: unknown) => {
    if (isApiError(error) && error.response?.status === 404) notFound();
    throw error;
  });

  return (
    <div className="min-h-svh bg-white text-neutral-900">
      <LoungeHeader lounge={lounge} />
      <div className="mx-auto max-w-[1280px] px-5 sm:px-10">
        <LoungeTabs handle={lounge.handle} tabs={lounge.tabs} />
        <main className="py-10">{children}</main>
      </div>
    </div>
  );
}

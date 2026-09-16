import { redirect } from "next/navigation";

export default async function LoungePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  redirect(`/lounge/${encodeURIComponent(id)}/story`);
}

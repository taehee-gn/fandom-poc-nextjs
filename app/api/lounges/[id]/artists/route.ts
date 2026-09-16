import { artists, isMockLounge } from "@/features/lounge/mocks";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!isMockLounge(id)) {
      return Response.json({ message: "라운지를 찾을 수 없습니다." }, { status: 404 });
    }

    return Response.json(artists, { status: 200 });
  } catch (error) {
    console.error("Failed to fetch artists:", error);

    return Response.json(
      { message: "서버 오류가 발생했습니다." },
      { status: 500 },
    );
  }
}

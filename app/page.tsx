import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-svh bg-white font-[Arial,'Apple_SD_Gothic_Neo','Noto_Sans_KR',sans-serif] text-neutral-900">
      <section
        className="mx-auto max-w-[1080px] px-5 pt-6 min-[601px]:px-8 min-[601px]:pt-10"
        aria-labelledby="my-lounge-title"
      >
        <header className="relative flex min-h-[68px] items-center justify-center">
          <h1
            id="my-lounge-title"
            className="m-0 text-lg leading-[26px] font-bold"
          >
            My Lounge
          </h1>
        </header>

        <Link
          href="/lounge"
          className="flex min-h-[83px] w-full cursor-pointer items-center justify-center gap-1.5 rounded border-0 bg-transparent p-4 text-sm leading-[22px] text-[#999] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4d7cff]"
        >
          <span className="relative block size-3.5 shrink-0" aria-hidden="true">
            <span className="absolute top-1/2 left-0 h-[1.5px] w-full -translate-y-1/2 bg-current" />
            <span className="absolute top-0 left-1/2 h-full w-[1.5px] -translate-x-1/2 bg-current" />
          </span>
          <span>내 라운지 찾기</span>
        </Link>
      </section>
    </main>
  );
}

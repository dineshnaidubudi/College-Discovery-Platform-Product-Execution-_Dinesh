import Link from "next/link";

export function AppHeader() {
  return (
    <header className="border-b border-[#DDE1E6] bg-white">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="rounded-lg focus:outline-[#2563EB]">
          <p className="text-sm font-semibold text-[#2563EB]">College Finder</p>
          <p className="text-lg font-bold text-[#1F2933]">College Discovery Platform</p>
        </Link>
        <nav className="flex items-center gap-1 text-sm font-medium text-[#52606D]">
          <Link className="rounded-lg px-3 py-2 hover:bg-[#F1F3F5]" href="/">
            Search
          </Link>
          <Link className="rounded-lg px-3 py-2 hover:bg-[#F1F3F5]" href="/compare">
            Compare
          </Link>
          <Link className="rounded-lg px-3 py-2 hover:bg-[#F1F3F5]" href="/predictor">
            Predictor
          </Link>
        </nav>
      </div>
    </header>
  );
}

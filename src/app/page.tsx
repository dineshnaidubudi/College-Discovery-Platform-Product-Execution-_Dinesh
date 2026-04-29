import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { CollegeCard } from "@/components/CollegeCard";
import { courses, filterColleges, locations } from "@/lib/colleges";

type SearchParams = Promise<{
  q?: string;
  location?: string;
  course?: string;
  maxFee?: string;
}>;

export default async function Home({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const results = filterColleges({
    query: params.q,
    location: params.location,
    course: params.course,
    maxFee: params.maxFee,
  });

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2933]">
      <AppHeader />

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-8 sm:px-6 lg:grid-cols-[260px_1fr] lg:px-8">
        <aside className="rounded-lg border border-[#DDE1E6] bg-white p-4 shadow-sm">
          <h2 className="text-sm font-bold text-[#1F2933]">Filters</h2>
          <form action="/" className="mt-4 space-y-4">
            <label className="block">
              <span className="text-xs font-semibold uppercase text-[#52606D]">Search</span>
              <input
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.q}
                name="q"
                placeholder="Search colleges"
              />
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase text-[#52606D]">Location</span>
              <select
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.location}
                name="location"
              >
                <option value="">Any location</option>
                {locations.map((location) => (
                  <option key={location}>{location}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase text-[#52606D]">Course</span>
              <select
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.course}
                name="course"
              >
                <option value="">Any course</option>
                {courses.map((course) => (
                  <option key={course}>{course}</option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="text-xs font-semibold uppercase text-[#52606D]">Max fees</span>
              <input
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.maxFee}
                min="0"
                name="maxFee"
                placeholder="150000"
                type="number"
              />
            </label>

            <div className="flex gap-2">
              <button className="h-10 flex-1 rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8]">
                Apply
              </button>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[#DDE1E6] px-4 text-sm font-semibold hover:bg-[#F1F3F5]"
                href="/"
              >
                Reset
              </Link>
            </div>
          </form>
        </aside>

        <div className="space-y-6">
          <section className="rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-bold">Find colleges that match your goals</h1>
                <p className="mt-1 text-sm text-[#52606D]">
                  Search, filter, compare, and predict options from college data.
                </p>
              </div>
              <a
                className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
                href="#results"
              >
                Start search
              </a>
            </div>
          </section>

          <section className="grid gap-4 md:grid-cols-3">
            <Stat label="Colleges" value={`${results.length} shown`} />
            <Stat label="Courses" value={`${courses.length} options`} />
            <Stat label="Decision tools" value="Compare and predictor" />
          </section>

          <section className="space-y-4" id="results">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold">College results</h2>
              <p className="text-sm text-[#52606D]">{results.length} results</p>
            </div>

            {results.length > 0 ? (
              <div className="grid gap-4">
                {results.map((college) => (
                  <CollegeCard college={college} key={college.id} />
                ))}
              </div>
            ) : (
              <div className="rounded-lg border border-[#DDE1E6] bg-white p-6 text-sm text-[#52606D]">
                No colleges match your filters. Try changing the fee range or course.
              </div>
            )}
          </section>
        </div>
      </section>
    </main>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-lg border border-[#DDE1E6] bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase text-[#52606D]">{label}</p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </article>
  );
}

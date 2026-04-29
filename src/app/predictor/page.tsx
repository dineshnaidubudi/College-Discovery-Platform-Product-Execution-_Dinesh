import { AppHeader } from "@/components/AppHeader";
import { CollegeCard } from "@/components/CollegeCard";
import { courses, locations, predictColleges } from "@/lib/colleges";

type SearchParams = Promise<{
  exam?: string;
  rank?: string;
  course?: string;
  location?: string;
}>;

export default async function PredictorPage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const hasInput = Boolean(params.rank);
  const results = hasInput ? predictColleges(params) : [];

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2933]">
      <AppHeader />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-bold">College predictor</h1>
          <p className="mt-1 text-sm text-[#52606D]">Enter exam details to find colleges that fit your rank range.</p>

          <form action="/predictor" className="mt-5 grid gap-4 md:grid-cols-4">
            <label>
              <span className="text-xs font-semibold uppercase text-[#52606D]">Exam</span>
              <select
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.exam || "JEE"}
                name="exam"
              >
                <option>JEE</option>
                <option>CAT</option>
              </select>
            </label>
            <label>
              <span className="text-xs font-semibold uppercase text-[#52606D]">Rank</span>
              <input
                className="mt-2 h-10 w-full rounded-lg border border-[#DDE1E6] bg-white px-3 text-sm"
                defaultValue={params.rank}
                min="1"
                name="rank"
                placeholder="12000"
                required
                type="number"
              />
            </label>
            <label>
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
            <label>
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
            <button className="h-10 rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8] md:col-span-4 md:w-fit">
              Predict colleges
            </button>
          </form>
        </div>

        <section className="mt-6 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">Suggested colleges</h2>
            {hasInput ? <p className="text-sm text-[#52606D]">{results.length} matches</p> : null}
          </div>

          {!hasInput ? (
            <div className="rounded-lg border border-[#DDE1E6] bg-white p-6 text-sm text-[#52606D]">
              Enter a rank to see recommendations.
            </div>
          ) : results.length > 0 ? (
            <div className="grid gap-4">
              {results.map((college) => (
                <CollegeCard college={college} key={college.id} />
              ))}
            </div>
          ) : (
            <div className="rounded-lg border border-[#DDE1E6] bg-white p-6 text-sm text-[#52606D]">
              No colleges match this rank and preference combination.
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import { AppHeader } from "@/components/AppHeader";
import { findCollege, formatCurrency } from "@/lib/colleges";

type Params = Promise<{ slug: string }>;

export default async function CollegeDetailPage({ params }: { params: Params }) {
  const { slug } = await params;
  const college = findCollege(slug);

  if (!college) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2933]">
      <AppHeader />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <Link className="text-sm font-semibold text-[#2563EB] hover:text-[#1D4ED8]" href="/">
          Back to search
        </Link>

        <div className="mt-4 rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <h1 className="text-3xl font-bold">{college.name}</h1>
              <p className="mt-2 text-sm text-[#52606D]">
                {college.city}, {college.state}
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-[#52606D]">{college.description}</p>
            </div>
            <Link
              className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
              href={`/compare?ids=${college.id}`}
            >
              Compare college
            </Link>
          </div>
        </div>

        <section className="mt-6 grid gap-4 md:grid-cols-4">
          <Metric label="Annual fees" value={formatCurrency(college.annualFee)} />
          <Metric label="Rating" value={college.rating.toFixed(1)} />
          <Metric label="Placement" value={`${college.placementPercentage}%`} />
          <Metric label="Avg package" value={`${college.averagePackage} LPA`} />
        </section>

        <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_360px]">
          <div className="rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Courses</h2>
            <div className="mt-4 space-y-3">
              {college.courses.map((course) => (
                <div className="rounded-lg border border-[#DDE1E6] p-4" key={course}>
                  <p className="font-semibold">{course}</p>
                  <p className="mt-1 text-sm text-[#52606D]">Duration varies by program and specialization.</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
            <h2 className="text-xl font-bold">Reviews</h2>
            <div className="mt-4 space-y-4">
              {college.reviews.map((review) => (
                <article className="border-b border-[#DDE1E6] pb-4 last:border-0 last:pb-0" key={review.author}>
                  <div className="flex items-center justify-between">
                    <p className="font-semibold">{review.author}</p>
                    <span className="rounded-full bg-[#FFF4D6] px-2 py-1 text-xs font-bold text-[#92400E]">
                      {review.rating.toFixed(1)}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-[#52606D]">{review.comment}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </section>
    </main>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <article className="rounded-lg border border-[#DDE1E6] bg-white p-4 shadow-sm">
      <p className="text-xs font-semibold uppercase text-[#52606D]">{label}</p>
      <p className="mt-2 text-lg font-bold">{value}</p>
    </article>
  );
}

import Link from "next/link";
import { College, formatCurrency } from "@/lib/colleges";

export function CollegeCard({ college }: { college: College }) {
  return (
    <article className="rounded-lg border border-[#DDE1E6] bg-white p-4 shadow-sm transition hover:border-[#C8CED6] hover:shadow-md">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Link className="text-lg font-bold text-[#1F2933] hover:text-[#2563EB]" href={`/colleges/${college.slug}`}>
            {college.name}
          </Link>
          <p className="mt-1 text-sm text-[#52606D]">
            {college.city}, {college.state}
          </p>
        </div>
        <span className="w-fit rounded-full bg-[#FFF4D6] px-2.5 py-1 text-xs font-bold text-[#92400E]">
          {college.rating.toFixed(1)} rating
        </span>
      </div>

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <Metric label="Annual fees" value={formatCurrency(college.annualFee)} />
        <Metric label="Placement" value={`${college.placementPercentage}%`} />
        <Metric label="Avg package" value={`${college.averagePackage} LPA`} />
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {college.courses.slice(0, 3).map((course) => (
          <span className="rounded-full bg-[#E8F0FF] px-2.5 py-1 text-xs font-semibold text-[#1D4ED8]" key={course}>
            {course}
          </span>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2 sm:flex-row">
        <Link
          className="inline-flex h-10 items-center justify-center rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8]"
          href={`/colleges/${college.slug}`}
        >
          View details
        </Link>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-lg border border-[#DDE1E6] bg-white px-4 text-sm font-semibold text-[#1F2933] hover:bg-[#F1F3F5]"
          href={`/compare?ids=${college.id}`}
        >
          Add to compare
        </Link>
      </div>
    </article>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase text-[#52606D]">{label}</p>
      <p className="mt-1 text-sm font-bold text-[#1F2933]">{value}</p>
    </div>
  );
}

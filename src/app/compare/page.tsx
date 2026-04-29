import Link from "next/link";
import { AppHeader } from "@/components/AppHeader";
import { colleges, formatCurrency } from "@/lib/colleges";

type SearchParams = Promise<{ ids?: string | string[] }>;

export default async function ComparePage({ searchParams }: { searchParams: SearchParams }) {
  const params = await searchParams;
  const selectedIds = new Set(Array.isArray(params.ids) ? params.ids : params.ids ? [params.ids] : []);
  const selected = colleges.filter((college) => selectedIds.has(college.id)).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F7F8FA] text-[#1F2933]">
      <AppHeader />
      <section className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
          <h1 className="text-2xl font-bold">Compare colleges</h1>
          <p className="mt-1 text-sm text-[#52606D]">Select 2 to 3 colleges and compare decision metrics.</p>

          <form action="/compare" className="mt-5 grid gap-3 md:grid-cols-2">
            {colleges.map((college) => (
              <label className="flex items-start gap-3 rounded-lg border border-[#DDE1E6] p-3" key={college.id}>
                <input
                  className="mt-1 size-4"
                  defaultChecked={selectedIds.has(college.id)}
                  name="ids"
                  type="checkbox"
                  value={college.id}
                />
                <span>
                  <span className="block text-sm font-semibold">{college.name}</span>
                  <span className="block text-xs text-[#52606D]">
                    {college.city}, {college.state}
                  </span>
                </span>
              </label>
            ))}
            <div className="flex gap-2 md:col-span-2">
              <button className="h-10 rounded-lg bg-[#2563EB] px-4 text-sm font-semibold text-white hover:bg-[#1D4ED8]">
                Compare selected
              </button>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-lg border border-[#DDE1E6] px-4 text-sm font-semibold hover:bg-[#F1F3F5]"
                href="/compare"
              >
                Clear
              </Link>
            </div>
          </form>
        </div>

        <section className="mt-6 rounded-lg border border-[#DDE1E6] bg-white p-5 shadow-sm">
          {selected.length < 2 ? (
            <p className="text-sm text-[#52606D]">Select at least two colleges to compare.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] border-collapse text-left text-sm">
                <thead>
                  <tr className="bg-[#F1F3F5] text-[#52606D]">
                    <th className="border border-[#DDE1E6] p-3">Metric</th>
                    {selected.map((college) => (
                      <th className="border border-[#DDE1E6] p-3" key={college.id}>
                        {college.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <Row label="Fees" values={selected.map((college) => formatCurrency(college.annualFee))} />
                  <Row label="Placement" values={selected.map((college) => `${college.placementPercentage}%`)} />
                  <Row label="Rating" values={selected.map((college) => college.rating.toFixed(1))} />
                  <Row label="Location" values={selected.map((college) => college.city)} />
                  <Row label="Average package" values={selected.map((college) => `${college.averagePackage} LPA`)} />
                </tbody>
              </table>
            </div>
          )}
        </section>
      </section>
    </main>
  );
}

function Row({ label, values }: { label: string; values: string[] }) {
  return (
    <tr>
      <th className="border border-[#DDE1E6] p-3 font-semibold text-[#52606D]">{label}</th>
      {values.map((value, index) => (
        <td className="border border-[#DDE1E6] p-3 font-medium" key={`${label}-${value}-${index}`}>
          {value}
        </td>
      ))}
    </tr>
  );
}

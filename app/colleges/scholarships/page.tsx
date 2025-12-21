import { Suspense } from "react"
import ScholarshipHero from "@/components/college/scholarships/scholarship-hero"
import ScholarshipFilters from "@/components/college/scholarships/scholarship-filter"
import ScholarshipGrid from "@/components/college/scholarships/scholarship-grid"


export const metadata = {
  title: "Scholarships in Nepal & Beyond",
  description: "Find and apply for scholarships in Nepal and around the world",
}

export default function ScholarshipsPage() {
  return (
    <div className="min-h-screen">
      <ScholarshipHero />

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Filters Sidebar */}
          <aside className="w-full lg:w-80 shrink-0">
            <Suspense fallback={<div>Loading filters...</div>}>
              <ScholarshipFilters />
            </Suspense>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <Suspense fallback={<div>Loading scholarships...</div>}>
              <ScholarshipGrid />
            </Suspense>
          </main>
        </div>
      </div>
    </div>
  )
}

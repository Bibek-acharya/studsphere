import { Search, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ScholarshipHero() {
  return (
    <section
      className="relative py-20 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/background.png)" }}
    >
      <div className="container mx-auto max-w-5xl text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border-2 border-blue-600 bg-white px-4 py-2 mb-8">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-600">
            <Zap className="h-4 w-4 text-white fill-white" />
          </div>
          <span className="text-sm font-medium text-gray-700">Your way to success</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 text-balance">
          Unlock Your Future <br />
          Scholarships in Nepal & Beyond
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto text-balance">
          Stop searching blindly. Update your profile and let our algorithm match you with the opportunities you
          deserve.
        </p>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg p-2 flex items-center gap-2">
          <Search className="h-5 w-5 text-gray-400 ml-4" />
          <Input
            type="text"
            placeholder="Search scholarship name,college or keywords..."
            className="flex-1 border-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-base"
          />
          <Button size="lg" className="rounded-xl bg-blue-600 hover:bg-blue-700 px-8">
            Search
          </Button>
        </div>

        {/* Recent Visits */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-white">
          <span className="font-medium">Your recent visit :</span>
          <a href="#" className="hover:underline">
            BIT Colleges
          </a>
          <a href="#" className="hover:underline">
            college Predictor
          </a>
          <a href="#" className="hover:underline">
            Scholarship
          </a>
        </div>
      </div>
    </section>
  )
}

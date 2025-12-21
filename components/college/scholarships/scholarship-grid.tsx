import ScholarshipCard from "./scholarship-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Mock data - replace with actual API call
const scholarships = [
  {
    id: 1,
    type: "Merit-Based",
    discount: "100% off",
    title: "TU Merit Scholarship",
    university: "Tribhuvan University",
    level: "Bachelors",
    field: "Engineering",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Exam Fee"],
    status: "high-competition",
    deadline: "Oct 15,2024",
  },
  {
    id: 2,
    type: "Merit-Based",
    discount: "100% off",
    title: "TU Merit Scholarship",
    university: "Tribhuvan University",
    level: "Bachelors",
    field: "Engineering",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Exam Fee"],
    status: "available",
    deadline: "Oct 15,2024",
  },
  {
    id: 3,
    type: "Merit-Based",
    discount: "100% off",
    title: "TU Merit Scholarship",
    university: "Tribhuvan University",
    level: "Bachelors",
    field: "Engineering",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Exam Fee"],
    status: "limited",
    statusText: "CLOSING SOON",
    deadline: "Oct 15,2024",
  },
  {
    id: 4,
    type: "Merit-Based",
    discount: "100% off",
    title: "TU Merit Scholarship",
    university: "Tribhuvan University",
    level: "Bachelors",
    field: "Engineering",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Exam Fee"],
    status: "available",
    deadline: "Oct 15,2024",
  },
  {
    id: 5,
    type: "Need-Based",
    discount: "75% off",
    title: "KU Financial Aid Scholarship",
    university: "Kathmandu University",
    level: "Bachelors",
    field: "Management",
    covers: "Partial Tuition",
    location: "Dhulikhel",
    benefits: ["Tuition Fee", "Books"],
    status: "available",
    deadline: "Nov 20,2024",
  },
  {
    id: 6,
    type: "Merit-Based",
    discount: "50% off",
    title: "Pokhara University Excellence Award",
    university: "Pokhara University",
    level: "Masters",
    field: "IT / Computer Science",
    covers: "Partial Tuition",
    location: "Pokhara",
    benefits: ["Exam Fee"],
    status: "high-competition",
    deadline: "Dec 1,2024",
  },
  {
    id: 7,
    type: "Merit-Based",
    discount: "100% off",
    title: "IOE Full Bright Scholarship",
    university: "Institute of Engineering",
    level: "Bachelors",
    field: "Engineering",
    covers: "Full Tuition",
    location: "Lalitpur",
    benefits: ["Exam Fee", "Living Allowance"],
    status: "limited",
    statusText: "CLOSING SOON",
    deadline: "Oct 25,2024",
  },
  {
    id: 8,
    type: "Talent-Based",
    discount: "100% off",
    title: "Sports Excellence Scholarship",
    university: "Tribhuvan University",
    level: "Bachelors",
    field: "Sports Science",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Equipment"],
    status: "available",
    deadline: "Nov 15,2024",
  },
  {
    id: 9,
    type: "Merit-Based",
    discount: "100% off",
    title: "MBBS Merit Scholarship",
    university: "Kathmandu Medical College",
    level: "Bachelors",
    field: "Medicine & Health",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Lab Fee"],
    status: "high-competition",
    deadline: "Sep 30,2024",
  },
  {
    id: 10,
    type: "Need-Based",
    discount: "60% off",
    title: "Purbanchal University Grant",
    university: "Purbanchal University",
    level: "Bachelors",
    field: "Management / Business",
    covers: "Partial Tuition",
    location: "Biratnagar",
    benefits: ["Tuition Fee"],
    status: "available",
    deadline: "Dec 10,2024",
  },
  {
    id: 11,
    type: "Merit-Based",
    discount: "100% off",
    title: "Research Innovation Scholarship",
    university: "Nepal Academy of Science",
    level: "Masters",
    field: "Research",
    covers: "Full Tuition",
    location: "Kathmandu",
    benefits: ["Exam Fee", "Research Grant"],
    status: "available",
    deadline: "Jan 5,2025",
  },
  {
    id: 12,
    type: "Merit-Based",
    discount: "80% off",
    title: "Engineering Merit Award",
    university: "Pulchowk Campus",
    level: "Bachelors",
    field: "Engineering",
    covers: "Partial Tuition",
    location: "Lalitpur",
    benefits: ["Exam Fee"],
    status: "limited",
    statusText: "LIMITED SEATS",
    deadline: "Oct 30,2024",
  },
]

export default function ScholarshipGrid() {
  return (
    <div>
      {/* Results Header */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-medium text-gray-900">Showing 100 results for Scholarship</h2>
        </div>

        {/* Active Filters */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-sm text-gray-600">Active :</span>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm">
            Bachelor
            <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
          </div>
          <div className="flex items-center gap-2 bg-gray-100 rounded-full px-3 py-1 text-sm">
            Bachelor
            <button className="ml-1 text-gray-500 hover:text-gray-700">×</button>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Clear All</button>
        </div>
      </div>

      {/* Scholarship Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {scholarships.map((scholarship) => (
          <ScholarshipCard key={scholarship.id} scholarship={scholarship} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center gap-2">
        <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button variant="default" size="icon" className="h-10 w-10 bg-blue-600 hover:bg-blue-700">
          1
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
          2
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
          3
        </Button>
        <Button variant="outline" size="icon" className="h-10 w-10 bg-transparent">
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

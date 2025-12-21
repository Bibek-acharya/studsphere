import { Heart, FileText, Clock, Flame, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

interface ScholarshipCardProps {
  scholarship: {
    id: number
    type: string
    discount: string
    title: string
    university: string
    level: string
    field: string
    covers: string
    location: string
    benefits: string[]
    status: "high-competition" | "available" | "limited"
    statusText?: string
    deadline: string
  }
}

export default function ScholarshipCard({ scholarship }: ScholarshipCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <CardContent className="p-6">
        {/* Header with type, discount and favorite */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              {scholarship.type}
            </span>
            <span className="text-sm font-medium text-green-700 bg-green-50 px-3 py-1 rounded-full">
              {scholarship.discount}
            </span>
          </div>
          <button className="text-gray-400 hover:text-red-500 transition-colors">
            <Heart className="h-5 w-5" />
          </button>
        </div>

        {/* Title and University */}
        <div className="flex items-start gap-4 mb-4">
          <div className="w-12 h-12 bg-gray-100 rounded-lg shrink-0" />
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-1">{scholarship.title}</h3>
            <p className="text-sm text-gray-600">{scholarship.university}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">Level</p>
            <p className="text-sm font-medium text-gray-900">{scholarship.level}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">Field</p>
            <p className="text-sm font-medium text-gray-900">{scholarship.field}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500 mb-1">COVERS</p>
            <p className="text-sm font-medium text-gray-900">{scholarship.covers}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500 mb-1">LOCATION</p>
            <p className="text-sm font-medium text-gray-900">{scholarship.location}</p>
          </div>
        </div>

        {/* Benefits */}
        <div className="mb-4">
          <p className="text-xs text-gray-500 mb-2">BENEFITS</p>
          <div className="flex gap-3">
            {scholarship.benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                <FileText className="h-4 w-4" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Status and Deadline */}
        <div className="flex items-center justify-between mb-4">
          {scholarship.status === "high-competition" && (
            <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
              <Flame className="h-4 w-4" />
              <span className="text-sm font-medium">High Competition</span>
            </div>
          )}
          {scholarship.status === "available" && (
            <div className="flex items-center gap-2 text-green-600 bg-green-50 px-3 py-1 rounded-full">
              <div className="h-2 w-2 bg-green-600 rounded-full" />
              <span className="text-sm font-medium">Available Now</span>
            </div>
          )}
          {scholarship.status === "limited" && (
            <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-1 rounded-full">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Limited seats</span>
            </div>
          )}
          <div className="flex items-center gap-2 text-gray-600 text-sm">
            <Clock className="h-4 w-4" />
            <span>{scholarship.deadline}</span>
          </div>
        </div>

        {/* Status Text for limited */}
        {scholarship.statusText && (
          <div className="bg-red-50 text-red-600 text-center py-2 mb-4 rounded-lg font-semibold text-sm">
            {scholarship.statusText}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 h-11 border-gray-300 hover:bg-gray-50 bg-transparent">
            Details
          </Button>
          <Button
            className={`flex-1 h-11 ${
              scholarship.status === "available" ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-900 hover:bg-gray-800"
            }`}
          >
            Apply Now
            <span className="ml-2">→</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}

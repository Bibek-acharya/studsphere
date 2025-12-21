"use client"

import type React from "react"

import { useState } from "react"
import { Filter, RotateCcw, Check, Zap, AlertCircle, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

export default function ScholarshipFilters() {
  const [openSections, setOpenSections] = useState<string[]>([
    "category",
    "level",
    "field",
    "type",
    "amount",
    "benefits",
    "availability",
    "deadline",
    "provider",
    "mode",
  ])

  const toggleSection = (section: string) => {
    setOpenSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="h-5 w-5 text-blue-600" />
          <h2 className="text-xl font-bold text-gray-900">Filters</h2>
        </div>
        <Button variant="ghost" size="sm" className="text-gray-600 hover:text-gray-900">
          <RotateCcw className="h-4 w-4 mr-2" />
          Reset
        </Button>
      </div>

      {/* Quick Filters */}
      <div className="mb-6">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">QUICK FILTERS</h3>
        <div className="flex flex-wrap gap-2">
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100"
          >
            <Check className="h-3 w-3 mr-1" />
            Verified
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100"
          >
            <Zap className="h-3 w-3 mr-1" />
            New
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="rounded-full border-red-200 bg-red-50 text-red-700 hover:bg-red-100"
          >
            <AlertCircle className="h-3 w-3 mr-1" />
            Closing
          </Button>
        </div>
      </div>

      <div className="space-y-4 pr-2">
        {/* Scholarship Category */}
        <FilterSection
          title="Scholarship Category"
          isOpen={openSections.includes("category")}
          onToggle={() => toggleSection("category")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="merit" label="Merit-based" />
            <FilterCheckbox id="need" label="Need-based" />
            <FilterCheckbox id="talent" label="Talent-based (sports, arts, leadership)" />
            <FilterCheckbox id="quota" label="Reserved/Quota" />
            <FilterCheckbox id="research" label="Research/Innovation" />
          </div>
        </FilterSection>

        {/* Academic Level */}
        <FilterSection
          title="Academic Level"
          isOpen={openSections.includes("level")}
          onToggle={() => toggleSection("level")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="higher-secondary" label="+ 2(Higher secondary)" />
            <FilterCheckbox id="bachelor" label="Bachelor (Undergraduate)" />
            <FilterCheckbox id="master" label="Master (Postgraduate)" />
          </div>
        </FilterSection>

        {/* Field of Study */}
        <FilterSection
          title="Field of study"
          isOpen={openSections.includes("field")}
          onToggle={() => toggleSection("field")}
        >
          <Input type="text" placeholder="Filter Fields..." className="mb-3 h-9" />
          <div className="space-y-3">
            <FilterCheckbox id="engineering" label="Engineering" />
            <FilterCheckbox id="it" label="IT / Computer Science" />
            <FilterCheckbox id="management" label="Management / Business" />
            <FilterCheckbox id="medicine" label="Medicine & Health" />
          </div>
        </FilterSection>

        {/* Scholarship Type */}
        <FilterSection
          title="Scholarship Type"
          isOpen={openSections.includes("type")}
          onToggle={() => toggleSection("type")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="admission" label="Admission Scholarship" />
            <FilterCheckbox id="entrance" label="Entrance Exam Scholarship" />
            <FilterCheckbox id="regular" label="Regular/Annual Scholarship" />
            <FilterCheckbox id="competition" label="Competition/Contest Scholarship" />
          </div>
        </FilterSection>

        {/* Scholarship Amount */}
        <FilterSection
          title="Scholarship Amount"
          isOpen={openSections.includes("amount")}
          onToggle={() => toggleSection("amount")}
        >
          <div className="space-y-3 mb-4">
            <FilterCheckbox id="full" label="Full Scholarship" />
            <FilterCheckbox id="partial" label="Partial Scholarship[" />
            <FilterCheckbox id="percentage" label="Percentage-based (25%, 50%, 75%, etc.)" />
          </div>
          <div className="space-y-3">
            <Label className="text-sm font-medium">Fixed Amount Range (NPR):</Label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="min" className="text-xs text-gray-600">
                  MINI ( 1000)
                </Label>
                <Input id="min" type="number" placeholder="Min" className="h-9" />
              </div>
              <div>
                <Label htmlFor="max" className="text-xs text-gray-600">
                  MAX ( 1000)
                </Label>
                <Input id="max" type="number" placeholder="Max" className="h-9" />
              </div>
            </div>
          </div>
        </FilterSection>

        {/* Scholarship Benefits */}
        <FilterSection
          title="Scholarship Benefits"
          isOpen={openSections.includes("benefits")}
          onToggle={() => toggleSection("benefits")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="available" label="Available" />
            <FilterCheckbox id="limited" label="Limited Seats" />
            <FilterCheckbox id="high-comp" label="High Competition" />
            <FilterCheckbox id="easy" label="Low Competition / Easy to Get" />
          </div>
        </FilterSection>

        {/* Location */}
        <FilterSection
          title="Location"
          isOpen={openSections.includes("location")}
          onToggle={() => toggleSection("location")}
        >
          <select className="w-full h-9 rounded-md border border-input bg-background px-3 py-1 text-sm">
            <option>All Provinces</option>
          </select>
          <div className="mt-3">
            <FilterCheckbox id="national" label="National Wide" />
          </div>
        </FilterSection>

        {/* Scholarship Availability */}
        <FilterSection
          title="Scholarship Availability"
          isOpen={openSections.includes("availability")}
          onToggle={() => toggleSection("availability")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="avail-now" label="Available" />
            <FilterCheckbox id="limited-seats" label="Limited Seats" />
            <FilterCheckbox id="high-competition" label="High Competition" />
            <FilterCheckbox id="low-competition" label="Low Competition / Easy to Get" />
          </div>
        </FilterSection>

        {/* Deadline */}
        <FilterSection
          title="Deadline"
          isOpen={openSections.includes("deadline")}
          onToggle={() => toggleSection("deadline")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="open" label="Open" />
            <FilterCheckbox id="closing" label="Closing Soon" />
            <FilterCheckbox id="closed" label="Closed" />
          </div>
        </FilterSection>

        {/* Provider Type */}
        <FilterSection
          title="Provider Type"
          isOpen={openSections.includes("provider")}
          onToggle={() => toggleSection("provider")}
        >
          <Input type="text" placeholder="Filter Fields..." className="mb-3 h-9" />
          <div className="space-y-3">
            <FilterCheckbox id="college" label="College/University" />
            <FilterCheckbox id="government" label="Government" />
            <FilterCheckbox id="ngo" label="NGO/INGO" />
            <FilterCheckbox id="corporate" label="Corporate/Company CSR" />
            <FilterCheckbox id="private" label="Private Organization/Foundation" />
          </div>
        </FilterSection>

        {/* Application Mode */}
        <FilterSection
          title="Application Mode"
          isOpen={openSections.includes("mode")}
          onToggle={() => toggleSection("mode")}
        >
          <div className="space-y-3">
            <FilterCheckbox id="online" label="Online Form" />
            <FilterCheckbox id="offline" label="Offline Form" />
            <FilterCheckbox id="email" label="Email Submission" />
            <FilterCheckbox id="through" label="Through College" />
          </div>
        </FilterSection>
      </div>

      {/* Find Scholarship Button */}
      <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 h-12 text-base font-semibold">
        Find Scholarship
      </Button>
    </div>
  )
}

function FilterSection({
  title,
  isOpen,
  onToggle,
  children,
}: {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}) {
  return (
    <Collapsible open={isOpen} onOpenChange={onToggle}>
      <CollapsibleTrigger className="flex w-full items-center justify-between py-3 border-b border-gray-200">
        <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
        <ChevronDown className={`h-4 w-4 text-gray-600 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </CollapsibleTrigger>
      <CollapsibleContent className="pt-3 pb-2">{children}</CollapsibleContent>
    </Collapsible>
  )
}

function FilterCheckbox({ id, label }: { id: string; label: string }) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <Label
        htmlFor={id}
        className="text-sm text-gray-700 cursor-pointer leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {label}
      </Label>
    </div>
  )
}

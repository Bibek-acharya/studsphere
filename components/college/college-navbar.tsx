"use client"

import { Menu, X, Bell, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"

const CollegeNavbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isExploreOpen, setIsExploreOpen] = useState(false)
  const pathname = usePathname()
  const isInstitutionsPage = pathname?.startsWith('/institutions')

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo - Responsive sizing - Only show when scrolled */}
          <div className={`shrink-0 transition-all duration-300 ease-in-out overflow-hidden ${
            isScrolled ? "w-[180px] opacity-100" : "w-0 opacity-0"
          }`}>
            <Link href="/" className="flex items-center gap-2 h-full whitespace-nowrap">
              <Image
                src="/logo.svg"
                alt="Studsphere"
                width={180}
                height={50}
                className="h-10 sm:h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden md:flex items-center gap-6 lg:gap-8 transition-all duration-300 ${
            isScrolled ? "flex-1 justify-center" : "flex-1 justify-start"
          }`}>
            {/* Explore dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                onBlur={() => setTimeout(() => setIsExploreOpen(false), 200)}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1"
              >
                Explore tools and Academics
                <ChevronDown className="w-4 h-4" />
              </button>
              {isExploreOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-2">
                  <Link
                    href="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    onClick={() => setIsExploreOpen(false)}
                  >
                    Studsphere for Students
                  </Link>
                </div>
              )}
            </div>

            <Link href="/colleges/scholarships" className="text-blue-600 hover:text-blue-700 font-medium text-sm">
              Scholarship
            </Link>
            <Link href="/colleges/resources" className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              Study Resources
            </Link>
            <div className="relative">
              <button className="text-gray-700 hover:text-gray-900 font-medium text-sm flex items-center gap-1">
                More
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Actions - Responsive */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4 shrink-0">
            {/* Notification Bell */}
            <button className="relative p-2 hover:bg-gray-100 rounded-lg">
              <Bell className="w-5 h-5 text-gray-700" />
              <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
            </button>

            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-green-500">
              <Image
                src="/images/avatar-placeholder.jpg"
                alt="Profile"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Institutions Zone Button */}
            {isInstitutionsPage ? (
              <>
                <Link
                  href="/institutions#product"
                  className="text-gray-700 font-medium text-sm hover:text-gray-900"
                >
                  Product
                </Link>
                <Link
                  href="/institutions/pricing"
                  className="text-blue-600 font-medium text-sm hover:text-blue-700 px-4 py-2 border border-blue-600 rounded-lg"
                >
                  Price
                </Link>
              </>
            ) : (
              <Link
                href="/institutions"
                className="text-gray-700 font-medium text-sm hover:text-gray-900 flex items-center gap-1"
              >
                Institutions Zone
                <span>›</span>
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Improved responsive layout */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 border-t border-gray-200 pt-4">
            <div className="space-y-2">
              <p className="text-gray-500 text-sm font-medium">Explore</p>
              <Link
                href="/"
                className="block text-gray-700 hover:text-gray-900 font-medium text-sm pl-2"
              >
                Studsphere for Students
              </Link>
            </div>
            
            <Link href="/colleges/scholarships" className="block text-blue-600 hover:text-blue-700 font-medium">
              Scholarship
            </Link>
            <Link href="/colleges/resources" className="block text-gray-700 hover:text-gray-900 font-medium">
              Study Resources
            </Link>
            
            <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
              <button className="relative p-2 hover:bg-gray-100 rounded-lg">
                <Bell className="w-5 h-5 text-gray-700" />
                <span className="absolute top-1 right-1 w-2.5 h-2.5 bg-red-500 rounded-full border-2 border-white"></span>
              </button>
              <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-green-500">
                <Image
                  src="/images/avatar-placeholder.jpg"
                  alt="Profile"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {isInstitutionsPage ? (
              <div className="flex gap-2 pt-2">
                <Link
                  href="/institutions#product"
                  className="block text-gray-700 hover:text-gray-900 font-medium"
                >
                  Product
                </Link>
                <Link
                  href="/institutions/pricing"
                  className="block text-blue-600 hover:text-blue-700 font-medium px-4 py-2 border border-blue-600 rounded-lg"
                >
                  Price
                </Link>
              </div>
            ) : (
              <Link href="/institutions" className="block text-gray-700 hover:text-gray-900 font-medium">
                Institutions Zone ›
              </Link>
            )}
          </div>
        )}
      </div>
    </nav>
  )
}

export default CollegeNavbar

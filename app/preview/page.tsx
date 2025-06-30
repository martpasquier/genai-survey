"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, Download } from "lucide-react"
import Link from "next/link"

const reportSlides = [
  {
    id: 1,
    title: "Executive Summary",
    description: "Key findings from 500+ finance professionals on GenAI adoption",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    title: "Current State of AI Adoption",
    description: "Where organizations stand today in their AI journey",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Top Use Cases & Applications",
    description: "Most popular GenAI applications in finance departments",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    title: "Implementation Challenges",
    description: "Common barriers and how leading organizations overcome them",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 5,
    title: "Future Investment Plans",
    description: "Budget allocations and strategic priorities for 2024-2025",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function PreviewPage() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % reportSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + reportSlides.length) % reportSlides.length)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Report Preview</h1>
          <p className="text-lg text-gray-600">Get a sneak peek at our comprehensive GenAI Finance Report</p>
        </div>

        <Card className="mb-8">
          <CardContent className="p-0">
            <div className="relative">
              {/* Main slide display */}
              <div className="aspect-video bg-gradient-to-br from-blue-100 to-indigo-100 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                <img
                  src={reportSlides[currentSlide].image || "/placeholder.svg"}
                  alt={reportSlides[currentSlide].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <div className="text-center text-white">
                    <h2 className="text-3xl font-bold mb-2">{reportSlides[currentSlide].title}</h2>
                    <p className="text-lg opacity-90">{reportSlides[currentSlide].description}</p>
                  </div>
                </div>
              </div>

              {/* Navigation arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Slide counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {reportSlides.length}
              </div>
            </div>

            {/* Slide info */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{reportSlides[currentSlide].title}</h3>
              <p className="text-gray-600 mb-4">{reportSlides[currentSlide].description}</p>

              {/* Thumbnail navigation */}
              <div className="flex space-x-2 overflow-x-auto pb-2">
                {reportSlides.map((slide, index) => (
                  <button
                    key={slide.id}
                    onClick={() => setCurrentSlide(index)}
                    className={`flex-shrink-0 w-20 h-12 rounded border-2 transition-colors ${
                      index === currentSlide
                        ? "border-indigo-500 bg-indigo-50"
                        : "border-gray-200 bg-gray-100 hover:border-gray-300"
                    }`}
                  >
                    <img
                      src={slide.image || "/placeholder.svg"}
                      alt={slide.title}
                      className="w-full h-full object-cover rounded"
                    />
                  </button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-indigo-50 rounded-lg p-8 mb-6">
            <h2 className="text-2xl font-bold text-indigo-900 mb-4">Want to See the Full Report?</h2>
            <p className="text-indigo-700 mb-6">
              Complete our 5-minute survey to get instant access to all 45 pages of insights, data visualizations, and
              actionable recommendations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/survey">
                <Button size="lg" className="px-8">
                  Complete Survey for Full Access
                </Button>
              </Link>
              <Link href="/download">
                <Button variant="outline" size="lg" className="px-8 bg-transparent">
                  <Download className="mr-2 h-4 w-4" />
                  Download Now
                </Button>
              </Link>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            Join 500+ finance professionals who have already contributed to this research
          </p>
        </div>
      </div>
    </div>
  )
}

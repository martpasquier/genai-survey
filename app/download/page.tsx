"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Lock, FileText, ArrowRight } from "lucide-react"
import { useSurveyStore } from "@/lib/store"

export default function DownloadPage() {
  const { isCompleted } = useSurveyStore()

  if (!isCompleted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
        <Card className="max-w-md w-full">
          <CardHeader className="text-center">
            <Lock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <CardTitle className="text-2xl">Access Restricted</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              To access the GenAI Finance Report, please complete our industry survey first.
            </p>
            <Link href="/survey">
              <Button className="w-full">
                Complete Survey <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <p className="text-sm text-gray-500 mt-4">Takes only 5 minutes • Join 500+ finance professionals</p>
          </CardContent>
        </Card>
      </div>
    )
  }

  const handleDownload = () => {
    // Mock download - in real app this would trigger actual PDF download
    const link = document.createElement("a")
    link.href = "/placeholder.pdf"
    link.download = "GenAI-Finance-Report-2024.pdf"
    link.click()
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Download Your Report</h1>
          <p className="text-lg text-gray-600">
            Thank you for completing the survey. Your exclusive access to the GenAI Finance Report is ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Download Card */}
          <Card>
            <CardHeader>
              <FileText className="h-12 w-12 text-indigo-600 mb-4" />
              <CardTitle className="text-xl">GenAI Finance Report 2024</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center">
                    <div className="h-3 w-3 bg-green-500 rounded-full mr-3"></div>
                    <span className="text-green-800 font-medium">Access Granted</span>
                  </div>
                </div>

                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• 45-page comprehensive industry analysis</li>
                  <li>• Insights from 500+ finance professionals</li>
                  <li>• Benchmark data and peer comparisons</li>
                  <li>• Implementation roadmaps and best practices</li>
                  <li>• Executive summary and key findings</li>
                </ul>

                <Button onClick={handleDownload} className="w-full" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download PDF Report
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Additional Resources */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl">Additional Resources</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href="/preview">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Preview Report Slides
                </Button>
              </Link>

              <Link href="/quiz">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Take AI Maturity Scorecard
                </Button>
              </Link>

              <Link href="/share">
                <Button variant="outline" className="w-full justify-start bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Share with Colleagues
                </Button>
              </Link>

              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-2">Stay Updated</h3>
                <p className="text-sm text-blue-800 mb-3">Get notified about future reports and industry insights.</p>
                <Button variant="outline" size="sm" className="w-full bg-transparent">
                  Subscribe to Updates
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

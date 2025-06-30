"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Download, Share2, BarChart3 } from "lucide-react"
import { useSurveyStore } from "@/lib/store"

export default function ThankYouPage() {
  const { surveyData } = useSurveyStore()

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
      <Card className="max-w-2xl w-full">
        <CardContent className="p-8 text-center">
          <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-6" />

          <h1 className="text-3xl font-bold text-gray-900 mb-4">Thank You for Your Participation!</h1>

          <p className="text-lg text-gray-600 mb-8">
            Your insights are valuable to the finance community. We've received your responses from{" "}
            <strong>{surveyData.organization}</strong> and will include them in our comprehensive industry report.
          </p>

          <div className="bg-blue-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-blue-900 mb-3">What's Next?</h2>
            <ul className="text-left text-blue-800 space-y-2">
              <li>• Your responses are now part of our industry benchmark</li>
              <li>• You'll receive the full report within 24 hours via email</li>
              <li>• Compare your AI maturity with industry peers</li>
              <li>• Get actionable insights for your GenAI strategy</li>
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <Link href="/download">
              <Button className="w-full h-16 flex flex-col items-center justify-center">
                <Download className="h-6 w-6 mb-1" />
                <span>Download Report</span>
              </Button>
            </Link>

            <Link href="/quiz">
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
              >
                <BarChart3 className="h-6 w-6 mb-1" />
                <span>Take Scorecard</span>
              </Button>
            </Link>

            <Link href="/share">
              <Button
                variant="outline"
                className="w-full h-16 flex flex-col items-center justify-center bg-transparent"
              >
                <Share2 className="h-6 w-6 mb-1" />
                <span>Share Survey</span>
              </Button>
            </Link>
          </div>

          <div className="text-sm text-gray-500">
            <p>Questions? Contact us at research@tenity.com</p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

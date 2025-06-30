import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Users, TrendingUp, FileText } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-indigo-600"></div>
              <span className="text-xl font-bold text-gray-900">Tenity Pulse</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/admin" className="text-gray-600 hover:text-gray-900">
                Admin
              </Link>
              <Link href="/quiz" className="text-gray-600 hover:text-gray-900">
                Scorecard
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            The State of GenAI in Finance
            <span className="block text-indigo-600">2024 Industry Report</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Join 500+ finance professionals sharing insights on AI adoption, challenges, and opportunities. Get
            exclusive access to our comprehensive industry benchmark report.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/survey">
              <Button size="lg" className="text-lg px-8 py-4">
                Start Survey <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/preview">
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 bg-transparent">
                Preview Report
              </Button>
            </Link>
          </div>

          {/* Report Visual Mockup */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-2xl p-8 border">
              <div className="aspect-video bg-gradient-to-br from-indigo-100 to-blue-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <FileText className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2">GenAI Finance Report 2024</h3>
                  <p className="text-gray-600">Comprehensive insights from industry leaders</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Participate in Our Survey?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <BarChart3 className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Industry Benchmarks</h3>
                <p className="text-gray-600">
                  Compare your AI adoption against 500+ finance professionals and see where you stand.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Peer Insights</h3>
                <p className="text-gray-600">Learn from real challenges and solutions shared by your industry peers.</p>
              </CardContent>
            </Card>
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <TrendingUp className="h-12 w-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">Future Trends</h3>
                <p className="text-gray-600">Get exclusive insights on emerging AI trends and investment priorities.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Benchmark Your AI Journey?</h2>
          <p className="text-xl text-indigo-100 mb-8">Takes only 5 minutes. Get instant access to the full report.</p>
          <Link href="/survey">
            <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
              Start Survey Now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Tenity. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

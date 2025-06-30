"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Share2, Copy, Mail, MessageCircle, CheckCircle } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

export default function SharePage() {
  const [copied, setCopied] = useState(false)
  const { toast } = useToast()

  const surveyUrl = "https://tenity-pulse.vercel.app/survey"
  const shareText =
    "Help benchmark the state of GenAI in finance! Join 500+ professionals sharing insights on AI adoption. Takes 5 minutes, get exclusive industry report. #GenAI #Finance #AI"

  const handleCopyLink = () => {
    navigator.clipboard.writeText(surveyUrl)
    setCopied(true)
    toast({
      title: "Link copied!",
      description: "Survey link has been copied to your clipboard.",
    })
    setTimeout(() => setCopied(false), 2000)
  }

  const handleLinkedInShare = () => {
    const linkedInUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(surveyUrl)}&text=${encodeURIComponent(shareText)}`
    window.open(linkedInUrl, "_blank")
  }

  const handleEmailShare = () => {
    const subject = "GenAI Finance Survey - Industry Benchmark"
    const body = `Hi,

I wanted to share this important industry survey about GenAI adoption in finance.

${shareText}

Survey link: ${surveyUrl}

It only takes 5 minutes and you'll get access to a comprehensive industry report with insights from 500+ finance professionals.

Best regards`

    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoUrl
  }

  const handleWhatsAppShare = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(`${shareText}\n\n${surveyUrl}`)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Share the Survey</h1>
          <p className="text-lg text-gray-600">
            Help us reach more finance professionals and build a comprehensive industry benchmark
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Share Banner Preview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Share2 className="mr-2 h-5 w-5" />
                Share Banner
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6 rounded-lg mb-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold mb-2">GenAI Finance Survey 2024</h2>
                    <p className="text-indigo-100 mb-4">Help benchmark the state of GenAI in finance</p>
                    <div className="flex items-center space-x-4 text-sm">
                      <span>• 5 minutes</span>
                      <span>• 500+ participants</span>
                      <span>• Free report</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="bg-white/20 rounded-lg p-3">
                      <Share2 className="h-8 w-8" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 border rounded-lg">
                  <span className="text-sm font-medium">Survey Link</span>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={handleCopyLink}
                    className="flex items-center space-x-2 bg-transparent"
                  >
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span>{copied ? "Copied!" : "Copy"}</span>
                  </Button>
                </div>
                <Input value={surveyUrl} readOnly className="text-sm" />
              </div>
            </CardContent>
          </Card>

          {/* Share Options */}
          <Card>
            <CardHeader>
              <CardTitle>Share Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={handleLinkedInShare} className="w-full justify-start bg-blue-600 hover:bg-blue-700">
                <div className="w-5 h-5 bg-white rounded mr-3 flex items-center justify-center">
                  <span className="text-blue-600 font-bold text-xs">in</span>
                </div>
                Share on LinkedIn
              </Button>

              <Button onClick={handleEmailShare} variant="outline" className="w-full justify-start bg-transparent">
                <Mail className="mr-3 h-4 w-4" />
                Share via Email
              </Button>

              <Button onClick={handleWhatsAppShare} variant="outline" className="w-full justify-start bg-transparent">
                <MessageCircle className="mr-3 h-4 w-4" />
                Share on WhatsApp
              </Button>

              <div className="pt-4 border-t">
                <h3 className="font-semibold mb-3">Custom Message</h3>
                <Textarea value={shareText} readOnly className="mb-3" rows={4} />
                <p className="text-xs text-gray-500">Feel free to customize this message when sharing</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-2">500+</div>
                <p className="text-gray-600">Finance professionals already participating</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">23</div>
                <p className="text-gray-600">Countries represented</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">87%</div>
                <p className="text-gray-600">Survey completion rate</p>
              </div>
            </div>
            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Every share helps us build a more comprehensive industry benchmark. Thank you for spreading the word!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

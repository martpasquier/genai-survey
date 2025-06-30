"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useSurveyStore } from "@/lib/store"
import { Trophy, Target, Rocket, Lightbulb } from "lucide-react"

const quizQuestions = [
  {
    id: 1,
    question: "How would you describe your organization's AI strategy?",
    options: [
      { value: "exploring", label: "We're just starting to explore AI possibilities", points: 1 },
      { value: "planning", label: "We have a clear AI strategy and roadmap", points: 2 },
      { value: "implementing", label: "We're actively implementing AI solutions", points: 3 },
      { value: "scaling", label: "We're scaling AI across multiple departments", points: 4 },
    ],
  },
  {
    id: 2,
    question: "What best describes your team's AI expertise?",
    options: [
      { value: "beginner", label: "Limited AI knowledge, learning the basics", points: 1 },
      { value: "intermediate", label: "Some team members have AI experience", points: 2 },
      { value: "advanced", label: "Strong AI capabilities across the team", points: 3 },
      { value: "expert", label: "We're recognized as AI leaders in our industry", points: 4 },
    ],
  },
  {
    id: 3,
    question: "How do you measure AI success in your organization?",
    options: [
      { value: "no-metrics", label: "We don't have specific AI metrics yet", points: 1 },
      { value: "basic-metrics", label: "We track basic usage and adoption metrics", points: 2 },
      { value: "roi-metrics", label: "We measure ROI and business impact", points: 3 },
      { value: "advanced-metrics", label: "We have comprehensive AI performance dashboards", points: 4 },
    ],
  },
]

const resultTypes = {
  explorer: {
    title: "AI Explorer",
    icon: Lightbulb,
    description: "You're at the beginning of your AI journey with great potential ahead.",
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    borderColor: "border-blue-200",
  },
  adopter: {
    title: "AI Adopter",
    icon: Target,
    description: "You're making solid progress with strategic AI implementation.",
    color: "text-green-600",
    bgColor: "bg-green-50",
    borderColor: "border-green-200",
  },
  leader: {
    title: "AI Leader",
    icon: Rocket,
    description: "You're ahead of the curve with mature AI capabilities.",
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    borderColor: "border-purple-200",
  },
  pioneer: {
    title: "AI Pioneer",
    icon: Trophy,
    description: "You're setting the standard for AI excellence in finance.",
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
  },
}

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResult, setShowResult] = useState(false)
  const [result, setResult] = useState<keyof typeof resultTypes>("explorer")
  const { setSurveyData } = useSurveyStore()

  const handleAnswer = (questionId: number, value: string) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }))
  }

  const handleNext = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1)
    } else {
      calculateResult()
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => prev - 1)
    }
  }

  const calculateResult = () => {
    let totalPoints = 0

    quizQuestions.forEach((question) => {
      const answer = answers[question.id]
      if (answer) {
        const option = question.options.find((opt) => opt.value === answer)
        if (option) {
          totalPoints += option.points
        }
      }
    })

    let resultType: keyof typeof resultTypes
    if (totalPoints <= 4) {
      resultType = "explorer"
    } else if (totalPoints <= 7) {
      resultType = "adopter"
    } else if (totalPoints <= 10) {
      resultType = "leader"
    } else {
      resultType = "pioneer"
    }

    setResult(resultType)
    setSurveyData({ quizAnswers: answers, quizResult: resultType })
    setShowResult(true)
  }

  if (showResult) {
    const resultData = resultTypes[result]
    const IconComponent = resultData.icon

    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4 max-w-2xl">
          <Card className={`border-2 ${resultData.borderColor} ${resultData.bgColor}`}>
            <CardHeader className="text-center">
              <IconComponent className={`h-16 w-16 ${resultData.color} mx-auto mb-4`} />
              <CardTitle className={`text-3xl ${resultData.color}`}>{resultData.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-lg text-gray-700 mb-8">{resultData.description}</p>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold mb-3">Your AI Maturity Level</h3>
                  <div className="text-2xl font-bold text-indigo-600 mb-2">
                    {result === "explorer" && "25%"}
                    {result === "adopter" && "50%"}
                    {result === "leader" && "75%"}
                    {result === "pioneer" && "95%"}
                  </div>
                  <Progress
                    value={result === "explorer" ? 25 : result === "adopter" ? 50 : result === "leader" ? 75 : 95}
                    className="mb-2"
                  />
                  <p className="text-sm text-gray-600">Compared to industry peers</p>
                </div>

                <div className="bg-white rounded-lg p-6 border">
                  <h3 className="font-semibold mb-3">Next Steps</h3>
                  <ul className="text-sm text-left space-y-2">
                    {result === "explorer" && (
                      <>
                        <li>• Define your AI strategy</li>
                        <li>• Identify pilot use cases</li>
                        <li>• Build team capabilities</li>
                      </>
                    )}
                    {result === "adopter" && (
                      <>
                        <li>• Scale successful pilots</li>
                        <li>• Establish governance</li>
                        <li>• Measure business impact</li>
                      </>
                    )}
                    {result === "leader" && (
                      <>
                        <li>• Optimize existing solutions</li>
                        <li>• Explore advanced use cases</li>
                        <li>• Share best practices</li>
                      </>
                    )}
                    {result === "pioneer" && (
                      <>
                        <li>• Lead industry innovation</li>
                        <li>• Mentor other organizations</li>
                        <li>• Contribute to research</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => window.location.reload()}>Retake Assessment</Button>
                <Button variant="outline" onClick={() => window.history.back()}>
                  Back to Survey
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const currentQ = quizQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-2xl">AI Maturity Scorecard</CardTitle>
              <span className="text-sm text-gray-500">
                Question {currentQuestion + 1} of {quizQuestions.length}
              </span>
            </div>
            <Progress value={progress} className="mb-4" />
          </CardHeader>
          <CardContent>
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-6">{currentQ.question}</h2>
              <RadioGroup
                value={answers[currentQ.id] || ""}
                onValueChange={(value) => handleAnswer(currentQ.id, value)}
              >
                {currentQ.options.map((option) => (
                  <div key={option.value} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                    <RadioGroupItem value={option.value} id={option.value} />
                    <Label htmlFor={option.value} className="flex-1 cursor-pointer">
                      {option.label}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!answers[currentQ.id]}>
                {currentQuestion === quizQuestions.length - 1 ? "Get Results" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

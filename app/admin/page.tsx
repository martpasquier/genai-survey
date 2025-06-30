"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { Users, TrendingUp, FileText, Globe } from "lucide-react"

// Mock data for the dashboard
const responseData = [
  { month: "Jan", responses: 45 },
  { month: "Feb", responses: 78 },
  { month: "Mar", responses: 123 },
  { month: "Apr", responses: 156 },
  { month: "May", responses: 234 },
  { month: "Jun", responses: 312 },
]

const useCaseData = [
  { name: "Automated Reporting", value: 35, color: "#3B82F6" },
  { name: "Financial Forecasting", value: 28, color: "#10B981" },
  { name: "Risk Assessment", value: 22, color: "#F59E0B" },
  { name: "Customer Service", value: 15, color: "#EF4444" },
]

const adoptionData = [
  { stage: "Not Started", percentage: 15 },
  { stage: "Exploring", percentage: 35 },
  { stage: "Pilot Projects", percentage: 28 },
  { stage: "Production", percentage: 18 },
  { stage: "Scaled", percentage: 4 },
]

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Survey Analytics Dashboard</h1>
          <p className="text-gray-600">Real-time insights from the GenAI Finance Survey</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Responses</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87.3%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Report Downloads</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">892</div>
              <p className="text-xs text-muted-foreground">71.5% of completions</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Countries</CardTitle>
              <Globe className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Across 5 continents</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Response Trend */}
          <Card>
            <CardHeader>
              <CardTitle>Response Trend</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={responseData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="responses" fill="#3B82F6" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          {/* Top Use Cases */}
          <Card>
            <CardHeader>
              <CardTitle>Top GenAI Use Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={useCaseData}
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value}%`}
                  >
                    {useCaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        {/* AI Adoption Stages */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>GenAI Adoption Stages</CardTitle>
            <p className="text-sm text-gray-600">Distribution of organizations across different AI maturity levels</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {adoptionData.map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium">{stage.stage}</span>
                      <span className="text-sm text-gray-500">{stage.percentage}%</span>
                    </div>
                    <Progress value={stage.percentage} className="h-2" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Regional Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>Top Participating Countries</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { country: "United States", responses: 342, flag: "🇺🇸" },
                  { country: "United Kingdom", responses: 198, flag: "🇬🇧" },
                  { country: "Germany", responses: 156, flag: "🇩🇪" },
                  { country: "Switzerland", responses: 134, flag: "🇨🇭" },
                  { country: "France", responses: 98, flag: "🇫🇷" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-lg">{item.flag}</span>
                      <span className="font-medium">{item.country}</span>
                    </div>
                    <span className="text-sm text-gray-500">{item.responses} responses</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Response Quality Metrics</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Average completion time</span>
                  <span className="font-medium">4.2 minutes</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Questions answered fully</span>
                  <span className="font-medium">94.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Survey satisfaction</span>
                  <span className="font-medium">4.6/5.0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Report download rate</span>
                  <span className="font-medium">71.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Social shares</span>
                  <span className="font-medium">156</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

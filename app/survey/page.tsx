"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { useSurveyStore } from "@/lib/store"
import { useRouter } from "next/navigation"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useToast } from "@/hooks/use-toast"

const TOTAL_STEPS = 4

export default function SurveyPage() {
  const { surveyData, currentStep, setSurveyData, setCurrentStep, setCompleted } = useSurveyStore()
  const [formData, setFormData] = useState(surveyData)
  const router = useRouter()
  const { toast } = useToast()

  const handleNext = () => {
    if (validateCurrentStep()) {
      setSurveyData(formData)
      if (currentStep < TOTAL_STEPS - 1) {
        setCurrentStep(currentStep + 1)
      } else {
        handleSubmit()
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1)
    }
  }

  const validateCurrentStep = () => {
    switch (currentStep) {
      case 0:
        return formData.role && formData.organization && formData.country
      case 1:
        return formData.currentGenAIUsage
      case 2:
        return formData.primaryUseCase && formData.biggestChallenge
      case 3:
        return formData.futureInvestment
      default:
        return true
    }
  }

  const handleSubmit = () => {
    fetch('https://sheetdb.io/api/v1/tveuh3gbm36fi', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: formData })
    })
    .then(response => response.json())
    .then(data => {
      console.log('SheetDB Success:', data);
      // You can keep your toast and redirect here
    })
    .catch((error) => {
      console.error('SheetDB Error:', error);
      // Optionally show an error message to the user
    });
    setSurveyData(formData)
    setCompleted(true)
    toast({
      title: "Survey Submitted!",
      description: "Thank you for your participation. Redirecting to thank you page...",
    })
    setTimeout(() => {
      router.push("/thank-you")
    }, 1500)
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-6">
            <div>
              <Label htmlFor="role">Your Role</Label>
              <Select value={formData.role || ""} onValueChange={(value) => setFormData({ ...formData, role: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select your role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="c-suite">C-Suite</SelectItem>
                  <SelectItem value="innovation-manager">Innovation Manager / Director</SelectItem>
                  <SelectItem value="business-unit-head">Business unit head</SelectItem>
                  <SelectItem value="functional-head">Other functional head (marketing, finance, ops...)</SelectItem>
                  <SelectItem value="external-consultant">External consultant</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="organization">Organization</Label>
              <Input
                id="organization"
                value={formData.organization || ""}
                onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                placeholder="Your company name"
              />
            </div>
            <div>
              <Label htmlFor="country">Country</Label>
              <Select
                value={formData.country || ""}
                onValueChange={(value) => setFormData({ ...formData, country: value })}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select your country" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="AF">Afghanistan</SelectItem>
                  <SelectItem value="AL">Albania</SelectItem>
                  <SelectItem value="DZ">Algeria</SelectItem>
                  <SelectItem value="AS">American Samoa</SelectItem>
                  <SelectItem value="AD">Andorra</SelectItem>
                  <SelectItem value="AO">Angola</SelectItem>
                  <SelectItem value="AG">Antigua and Barbuda</SelectItem>
                  <SelectItem value="AR">Argentina</SelectItem>
                  <SelectItem value="AM">Armenia</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="AT">Austria</SelectItem>
                  <SelectItem value="AZ">Azerbaijan</SelectItem>
                  <SelectItem value="BS">Bahamas</SelectItem>
                  <SelectItem value="BH">Bahrain</SelectItem>
                  <SelectItem value="BD">Bangladesh</SelectItem>
                  <SelectItem value="BB">Barbados</SelectItem>
                  <SelectItem value="BY">Belarus</SelectItem>
                  <SelectItem value="BE">Belgium</SelectItem>
                  <SelectItem value="BZ">Belize</SelectItem>
                  <SelectItem value="BJ">Benin</SelectItem>
                  <SelectItem value="BT">Bhutan</SelectItem>
                  <SelectItem value="BO">Bolivia</SelectItem>
                  <SelectItem value="BA">Bosnia and Herzegovina</SelectItem>
                  <SelectItem value="BW">Botswana</SelectItem>
                  <SelectItem value="BR">Brazil</SelectItem>
                  <SelectItem value="BN">Brunei</SelectItem>
                  <SelectItem value="BG">Bulgaria</SelectItem>
                  <SelectItem value="BF">Burkina Faso</SelectItem>
                  <SelectItem value="BI">Burundi</SelectItem>
                  <SelectItem value="CV">Cabo Verde</SelectItem>
                  <SelectItem value="KH">Cambodia</SelectItem>
                  <SelectItem value="CM">Cameroon</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="CF">Central African Republic</SelectItem>
                  <SelectItem value="TD">Chad</SelectItem>
                  <SelectItem value="CL">Chile</SelectItem>
                  <SelectItem value="CN">China</SelectItem>
                  <SelectItem value="CO">Colombia</SelectItem>
                  <SelectItem value="KM">Comoros</SelectItem>
                  <SelectItem value="CG">Congo</SelectItem>
                  <SelectItem value="CD">Congo (DRC)</SelectItem>
                  <SelectItem value="CR">Costa Rica</SelectItem>
                  <SelectItem value="CI">Côte d'Ivoire</SelectItem>
                  <SelectItem value="HR">Croatia</SelectItem>
                  <SelectItem value="CU">Cuba</SelectItem>
                  <SelectItem value="CY">Cyprus</SelectItem>
                  <SelectItem value="CZ">Czechia</SelectItem>
                  <SelectItem value="DK">Denmark</SelectItem>
                  <SelectItem value="DJ">Djibouti</SelectItem>
                  <SelectItem value="DM">Dominica</SelectItem>
                  <SelectItem value="DO">Dominican Republic</SelectItem>
                  <SelectItem value="EC">Ecuador</SelectItem>
                  <SelectItem value="EG">Egypt</SelectItem>
                  <SelectItem value="SV">El Salvador</SelectItem>
                  <SelectItem value="GQ">Equatorial Guinea</SelectItem>
                  <SelectItem value="ER">Eritrea</SelectItem>
                  <SelectItem value="EE">Estonia</SelectItem>
                  <SelectItem value="SZ">Eswatini</SelectItem>
                  <SelectItem value="ET">Ethiopia</SelectItem>
                  <SelectItem value="FJ">Fiji</SelectItem>
                  <SelectItem value="FI">Finland</SelectItem>
                  <SelectItem value="FR">France</SelectItem>
                  <SelectItem value="GA">Gabon</SelectItem>
                  <SelectItem value="GM">Gambia</SelectItem>
                  <SelectItem value="GE">Georgia</SelectItem>
                  <SelectItem value="DE">Germany</SelectItem>
                  <SelectItem value="GH">Ghana</SelectItem>
                  <SelectItem value="GR">Greece</SelectItem>
                  <SelectItem value="GD">Grenada</SelectItem>
                  <SelectItem value="GT">Guatemala</SelectItem>
                  <SelectItem value="GN">Guinea</SelectItem>
                  <SelectItem value="GW">Guinea-Bissau</SelectItem>
                  <SelectItem value="GY">Guyana</SelectItem>
                  <SelectItem value="HT">Haiti</SelectItem>
                  <SelectItem value="HN">Honduras</SelectItem>
                  <SelectItem value="HU">Hungary</SelectItem>
                  <SelectItem value="IS">Iceland</SelectItem>
                  <SelectItem value="IN">India</SelectItem>
                  <SelectItem value="ID">Indonesia</SelectItem>
                  <SelectItem value="IR">Iran</SelectItem>
                  <SelectItem value="IQ">Iraq</SelectItem>
                  <SelectItem value="IE">Ireland</SelectItem>
                  <SelectItem value="IL">Israel</SelectItem>
                  <SelectItem value="IT">Italy</SelectItem>
                  <SelectItem value="JM">Jamaica</SelectItem>
                  <SelectItem value="JP">Japan</SelectItem>
                  <SelectItem value="JO">Jordan</SelectItem>
                  <SelectItem value="KZ">Kazakhstan</SelectItem>
                  <SelectItem value="KE">Kenya</SelectItem>
                  <SelectItem value="KI">Kiribati</SelectItem>
                  <SelectItem value="KW">Kuwait</SelectItem>
                  <SelectItem value="KG">Kyrgyzstan</SelectItem>
                  <SelectItem value="LA">Laos</SelectItem>
                  <SelectItem value="LV">Latvia</SelectItem>
                  <SelectItem value="LB">Lebanon</SelectItem>
                  <SelectItem value="LS">Lesotho</SelectItem>
                  <SelectItem value="LR">Liberia</SelectItem>
                  <SelectItem value="LY">Libya</SelectItem>
                  <SelectItem value="LI">Liechtenstein</SelectItem>
                  <SelectItem value="LT">Lithuania</SelectItem>
                  <SelectItem value="LU">Luxembourg</SelectItem>
                  <SelectItem value="MG">Madagascar</SelectItem>
                  <SelectItem value="MW">Malawi</SelectItem>
                  <SelectItem value="MY">Malaysia</SelectItem>
                  <SelectItem value="MV">Maldives</SelectItem>
                  <SelectItem value="ML">Mali</SelectItem>
                  <SelectItem value="MT">Malta</SelectItem>
                  <SelectItem value="MH">Marshall Islands</SelectItem>
                  <SelectItem value="MR">Mauritania</SelectItem>
                  <SelectItem value="MU">Mauritius</SelectItem>
                  <SelectItem value="MX">Mexico</SelectItem>
                  <SelectItem value="FM">Micronesia</SelectItem>
                  <SelectItem value="MD">Moldova</SelectItem>
                  <SelectItem value="MC">Monaco</SelectItem>
                  <SelectItem value="MN">Mongolia</SelectItem>
                  <SelectItem value="ME">Montenegro</SelectItem>
                  <SelectItem value="MA">Morocco</SelectItem>
                  <SelectItem value="MZ">Mozambique</SelectItem>
                  <SelectItem value="MM">Myanmar</SelectItem>
                  <SelectItem value="NA">Namibia</SelectItem>
                  <SelectItem value="NR">Nauru</SelectItem>
                  <SelectItem value="NP">Nepal</SelectItem>
                  <SelectItem value="NL">Netherlands</SelectItem>
                  <SelectItem value="NZ">New Zealand</SelectItem>
                  <SelectItem value="NI">Nicaragua</SelectItem>
                  <SelectItem value="NE">Niger</SelectItem>
                  <SelectItem value="NG">Nigeria</SelectItem>
                  <SelectItem value="KP">North Korea</SelectItem>
                  <SelectItem value="MK">North Macedonia</SelectItem>
                  <SelectItem value="NO">Norway</SelectItem>
                  <SelectItem value="OM">Oman</SelectItem>
                  <SelectItem value="PK">Pakistan</SelectItem>
                  <SelectItem value="PW">Palau</SelectItem>
                  <SelectItem value="PS">Palestine</SelectItem>
                  <SelectItem value="PA">Panama</SelectItem>
                  <SelectItem value="PG">Papua New Guinea</SelectItem>
                  <SelectItem value="PY">Paraguay</SelectItem>
                  <SelectItem value="PE">Peru</SelectItem>
                  <SelectItem value="PH">Philippines</SelectItem>
                  <SelectItem value="PL">Poland</SelectItem>
                  <SelectItem value="PT">Portugal</SelectItem>
                  <SelectItem value="QA">Qatar</SelectItem>
                  <SelectItem value="RO">Romania</SelectItem>
                  <SelectItem value="RU">Russia</SelectItem>
                  <SelectItem value="RW">Rwanda</SelectItem>
                  <SelectItem value="KN">Saint Kitts and Nevis</SelectItem>
                  <SelectItem value="LC">Saint Lucia</SelectItem>
                  <SelectItem value="VC">Saint Vincent and the Grenadines</SelectItem>
                  <SelectItem value="WS">Samoa</SelectItem>
                  <SelectItem value="SM">San Marino</SelectItem>
                  <SelectItem value="ST">Sao Tome and Principe</SelectItem>
                  <SelectItem value="SA">Saudi Arabia</SelectItem>
                  <SelectItem value="SN">Senegal</SelectItem>
                  <SelectItem value="RS">Serbia</SelectItem>
                  <SelectItem value="SC">Seychelles</SelectItem>
                  <SelectItem value="SL">Sierra Leone</SelectItem>
                  <SelectItem value="SG">Singapore</SelectItem>
                  <SelectItem value="SK">Slovakia</SelectItem>
                  <SelectItem value="SI">Slovenia</SelectItem>
                  <SelectItem value="SB">Solomon Islands</SelectItem>
                  <SelectItem value="SO">Somalia</SelectItem>
                  <SelectItem value="ZA">South Africa</SelectItem>
                  <SelectItem value="KR">South Korea</SelectItem>
                  <SelectItem value="SS">South Sudan</SelectItem>
                  <SelectItem value="ES">Spain</SelectItem>
                  <SelectItem value="LK">Sri Lanka</SelectItem>
                  <SelectItem value="SD">Sudan</SelectItem>
                  <SelectItem value="SR">Suriname</SelectItem>
                  <SelectItem value="SE">Sweden</SelectItem>
                  <SelectItem value="CH">Switzerland</SelectItem>
                  <SelectItem value="SY">Syria</SelectItem>
                  <SelectItem value="TW">Taiwan</SelectItem>
                  <SelectItem value="TJ">Tajikistan</SelectItem>
                  <SelectItem value="TZ">Tanzania</SelectItem>
                  <SelectItem value="TH">Thailand</SelectItem>
                  <SelectItem value="TL">Timor-Leste</SelectItem>
                  <SelectItem value="TG">Togo</SelectItem>
                  <SelectItem value="TO">Tonga</SelectItem>
                  <SelectItem value="TT">Trinidad and Tobago</SelectItem>
                  <SelectItem value="TN">Tunisia</SelectItem>
                  <SelectItem value="TR">Turkey</SelectItem>
                  <SelectItem value="TM">Turkmenistan</SelectItem>
                  <SelectItem value="TV">Tuvalu</SelectItem>
                  <SelectItem value="UG">Uganda</SelectItem>
                  <SelectItem value="UA">Ukraine</SelectItem>
                  <SelectItem value="AE">United Arab Emirates</SelectItem>
                  <SelectItem value="GB">United Kingdom</SelectItem>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="UY">Uruguay</SelectItem>
                  <SelectItem value="UZ">Uzbekistan</SelectItem>
                  <SelectItem value="VU">Vanuatu</SelectItem>
                  <SelectItem value="VA">Vatican City</SelectItem>
                  <SelectItem value="VE">Venezuela</SelectItem>
                  <SelectItem value="VN">Vietnam</SelectItem>
                  <SelectItem value="YE">Yemen</SelectItem>
                  <SelectItem value="ZM">Zambia</SelectItem>
                  <SelectItem value="ZW">Zimbabwe</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        )
      case 1:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">
                How would you describe your organization's current GenAI usage?
              </Label>
              <RadioGroup
                value={formData.currentGenAIUsage || ""}
                onValueChange={(value) => setFormData({ ...formData, currentGenAIUsage: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="not-started" id="not-started" />
                  <Label htmlFor="not-started">Haven't started exploring GenAI yet</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="exploring" id="exploring" />
                  <Label htmlFor="exploring">Currently exploring and experimenting</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="pilot" id="pilot" />
                  <Label htmlFor="pilot">Running pilot projects</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="production" id="production" />
                  <Label htmlFor="production">Have GenAI solutions in production</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="scaled" id="scaled" />
                  <Label htmlFor="scaled">Scaled GenAI across multiple use cases</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )
      case 2:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">What is your primary GenAI use case?</Label>
              <RadioGroup
                value={formData.primaryUseCase || ""}
                onValueChange={(value) => setFormData({ ...formData, primaryUseCase: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="reporting" id="reporting" />
                  <Label htmlFor="reporting">Automated reporting and analysis</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="forecasting" id="forecasting" />
                  <Label htmlFor="forecasting">Financial forecasting and planning</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="risk" id="risk" />
                  <Label htmlFor="risk">Risk assessment and compliance</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="customer" id="customer" />
                  <Label htmlFor="customer">Customer service and support</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="other-use" id="other-use" />
                  <Label htmlFor="other-use">Other</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label className="text-base font-medium">What is your biggest challenge with GenAI adoption?</Label>
              <RadioGroup
                value={formData.biggestChallenge || ""}
                onValueChange={(value) => setFormData({ ...formData, biggestChallenge: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="data-quality" id="data-quality" />
                  <Label htmlFor="data-quality">Data quality and availability</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="skills" id="skills" />
                  <Label htmlFor="skills">Lack of technical skills/expertise</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="compliance" id="compliance" />
                  <Label htmlFor="compliance">Regulatory and compliance concerns</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="budget" id="budget" />
                  <Label htmlFor="budget">Budget constraints</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="integration" id="integration" />
                  <Label htmlFor="integration">Integration with existing systems</Label>
                </div>
              </RadioGroup>
            </div>
          </div>
        )
      case 3:
        return (
          <div className="space-y-6">
            <div>
              <Label className="text-base font-medium">
                How do you plan to invest in GenAI over the next 12 months?
              </Label>
              <RadioGroup
                value={formData.futureInvestment || ""}
                onValueChange={(value) => setFormData({ ...formData, futureInvestment: value })}
                className="mt-3"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="no-plans" id="no-plans" />
                  <Label htmlFor="no-plans">No immediate plans</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="small-budget" id="small-budget" />
                  <Label htmlFor="small-budget">Small budget ({"<"}$50k)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium-budget" id="medium-budget" />
                  <Label htmlFor="medium-budget">Medium budget ($50k-$250k)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="large-budget" id="large-budget" />
                  <Label htmlFor="large-budget">Large budget ($250k+)</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="strategic" id="strategic" />
                  <Label htmlFor="strategic">Strategic initiative with significant investment</Label>
                </div>
              </RadioGroup>
            </div>

            {/* Summary */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg">
              <h3 className="font-semibold mb-3">Survey Summary</h3>
              <div className="space-y-2 text-sm">
                <p>
                  <strong>Role:</strong> {formData.role}
                </p>
                <p>
                  <strong>Organization:</strong> {formData.organization}
                </p>
                <p>
                  <strong>Country:</strong> {formData.country}
                </p>
                <p>
                  <strong>Current Usage:</strong> {formData.currentGenAIUsage}
                </p>
                <p>
                  <strong>Primary Use Case:</strong> {formData.primaryUseCase}
                </p>
                <p>
                  <strong>Biggest Challenge:</strong> {formData.biggestChallenge}
                </p>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  const stepTitles = ["About You", "Current GenAI Usage", "Use Cases & Challenges", "Future Investment"]

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <CardTitle className="text-2xl">GenAI Adoption Survey</CardTitle>
              <span className="text-sm text-gray-500">
                Step {currentStep + 1} of {TOTAL_STEPS}
              </span>
            </div>
            <Progress value={((currentStep + 1) / TOTAL_STEPS) * 100} className="mb-4" />
            <h2 className="text-xl font-semibold">{stepTitles[currentStep]}</h2>
          </CardHeader>
          <CardContent>
            {renderStep()}

            <div className="flex justify-between mt-8">
              <Button variant="outline" onClick={handlePrevious} disabled={currentStep === 0}>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <Button onClick={handleNext} disabled={!validateCurrentStep()}>
                {currentStep === TOTAL_STEPS - 1 ? "Submit Survey" : "Next"}
                {currentStep !== TOTAL_STEPS - 1 && <ArrowRight className="ml-2 h-4 w-4" />}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

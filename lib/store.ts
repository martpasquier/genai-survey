import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SurveyData {
  // Metadata
  role: string
  organization: string
  country: string
  // Survey answers
  currentGenAIUsage: string
  primaryUseCase: string
  biggestChallenge: string
  futureInvestment: string
  // Quiz answers
  quizAnswers: Record<string, string>
  quizResult: string
}

interface SurveyStore {
  surveyData: Partial<SurveyData>
  isCompleted: boolean
  currentStep: number
  setSurveyData: (data: Partial<SurveyData>) => void
  setCompleted: (completed: boolean) => void
  setCurrentStep: (step: number) => void
  resetSurvey: () => void
}

export const useSurveyStore = create<SurveyStore>()(
  persist(
    (set) => ({
      surveyData: {},
      isCompleted: false,
      currentStep: 0,
      setSurveyData: (data) =>
        set((state) => ({
          surveyData: { ...state.surveyData, ...data },
        })),
      setCompleted: (completed) => set({ isCompleted: completed }),
      setCurrentStep: (step) => set({ currentStep: step }),
      resetSurvey: () => set({ surveyData: {}, isCompleted: false, currentStep: 0 }),
    }),
    {
      name: "genai-survey-storage",
    },
  ),
)

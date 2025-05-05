import { Card, CardContent, CardHeader } from "@/components/ui/card"

// Mock data for health tips
const healthTips = [
  {
    id: 1,
    title: "Managing Seasonal Allergies",
    content:
      "Stay ahead of seasonal allergies by starting medications before symptoms appear. Keep windows closed during high pollen days and shower after outdoor activities.",
    icon: "Leaf",
  },
  {
    id: 2,
    title: "Proper Medication Storage",
    content:
      "Store medications in a cool, dry place away from direct sunlight. Bathroom medicine cabinets are often too humid for proper storage.",
    icon: "Package",
  },
  {
    id: 3,
    title: "Staying Hydrated",
    content:
      "Proper hydration is essential for medication effectiveness. Aim to drink at least 8 glasses of water daily, especially when taking certain medications.",
    icon: "Droplets",
  },
]

export default function HealthTips() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {healthTips.map((tip) => (
        <Card key={tip.id} className="border-emerald-100 hover:shadow-md transition-shadow">
          <CardHeader className="pb-2">
            <div className="flex items-center gap-3">
              {tip.icon === "Leaf" && (
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                </div>
              )}
              {tip.icon === "Package" && (
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                    />
                  </svg>
                </div>
              )}
              {tip.icon === "Droplets" && (
                <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-emerald-600"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              )}
              <h3 className="text-lg font-semibold text-gray-800">{tip.title}</h3>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{tip.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

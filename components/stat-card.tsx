import { type LucideIcon } from 'lucide-react'

interface StatCardProps {
  icon: LucideIcon
  value: string
  label: string
  iconColor?: string
}

export function StatCard({ icon: Icon, value, label, iconColor = "text-primary" }: StatCardProps) {
  return (
    <div className="bg-[#1a1f1d] p-6 rounded-lg text-center">
      <Icon className={`w-8 h-8 mx-auto mb-3 ${iconColor}`} />
      <div className="text-2xl font-bold mb-1">{value}</div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  )
}


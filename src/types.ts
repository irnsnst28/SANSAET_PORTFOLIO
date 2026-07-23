export type ProjectCategory = 'Web' | 'Video' | 'Mobile' | 'UI Design'

export interface Project {
  id: number
  category: ProjectCategory
  title: string
  subtitle: string
  blurb: string
  features: string[]
  tech: string[]
  mark: string
  color: string
}

export interface Service {
  number: string
  title: string
  description: string
}

export interface ExperienceItem {
  dates: string
  role: string
  organization: string
  description: string
}

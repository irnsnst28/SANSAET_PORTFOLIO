import type { ExperienceItem, Project, Service } from '../types'

export const navigation = ['home', 'about', 'services', 'work', 'skills', 'experience', 'contact'] as const

export const projects: Project[] = [
  { id: 1, category: 'Web', title: 'ResearchFlow', subtitle: 'Research Proposal Management System', blurb: 'A university workflow platform that streamlines proposal submission, review, approvals, notifications, document control, and administrative reporting.', features: ['Role-based access', 'Multi-stage approval workflow', 'Dashboard analytics', 'Email notifications', 'Document management', 'Audit trail'], tech: ['PHP', 'Symfony', 'MySQL', 'JavaScript'], mark: 'RF', color: '#ff6b3d' },
  { id: 2, category: 'Mobile', title: 'MentalEase', subtitle: 'AI Mental Health Platform', blurb: 'A full-stack web and mobile platform for AI-supported emotional care, stress assessments, appointments, and secure patient records.', features: ['AI chatbot', 'DASS-21 assessment', 'Mood tracking', 'Patient portal', 'Appointment scheduling', 'Admin dashboard'], tech: ['Laravel', 'React Native', 'FastAPI', 'Supabase', 'OpenAI'], mark: 'ME', color: '#70e1b3' },
  { id: 3, category: 'Mobile', title: 'VisionTrack', subtitle: 'Object Detection System', blurb: 'An AI-powered mobile application using YOLO computer vision for real-time object detection with cloud processing and mobile integration.', features: ['Camera detection', 'AI inference', 'Image upload', 'Cloud processing', 'Detection history'], tech: ['Python', 'YOLO', 'FastAPI', 'Mobile'], mark: 'VT', color: '#8bb7ff' },
  { id: 4, category: 'Web', title: 'Haven', subtitle: 'Boarding House Management System', blurb: 'A property management system for landlords to organize tenants, payments, due dates, reminders, reports, and day-to-day operations.', features: ['Tenant management', 'Payment tracking', 'SMS reminders', 'Reports', 'Analytics dashboard'], tech: ['PHP', 'MySQL', 'Bootstrap', 'JavaScript'], mark: 'HV', color: '#ffd166' },
  { id: 5, category: 'UI Design', title: 'Creator Desk', subtitle: 'Freelancer Dashboard', blurb: 'A focused productivity workspace helping freelancers organize clients, invoices, tasks, deadlines, and active projects.', features: ['Client workspace', 'Invoice tracking', 'Task planning', 'Project overview'], tech: ['Figma', 'React', 'TypeScript'], mark: 'CD', color: '#d4a5ff' },
  { id: 6, category: 'Video', title: 'Frame Story', subtitle: 'Video Editing Showcase', blurb: 'A collection of promotional films, advertisements, social media edits, motion graphics, and cinematic color work.', features: ['Promotional edits', 'Motion graphics', 'Social content', 'Color grading'], tech: ['Premiere Pro', 'After Effects', 'DaVinci Resolve'], mark: 'FS', color: '#ff91a4' },
]

export const services: Service[] = [
  { number: '01', title: 'Web Development', description: 'Modern responsive websites engineered with accessible interfaces and scalable architecture.' },
  { number: '02', title: 'Full Stack Development', description: 'Frontend, backend, database design, authentication, REST APIs, and production deployment.' },
  { number: '03', title: 'UI / UX Design', description: 'Clean, intentional interfaces focused on usability, accessibility, and clear user journeys.' },
  { number: '04', title: 'Video Editing', description: 'Promotional videos, motion graphics, social media content, color work, and branding visuals.' },
]

export const skillGroups: Record<string, string[]> = {
  Frontend: ['HTML / CSS', 'JavaScript', 'TypeScript', 'React', 'React Native', 'Bootstrap', 'Tailwind'],
  Backend: ['PHP', 'Symfony', 'Laravel', 'FastAPI', 'REST API', 'Node.js'],
  Database: ['MySQL', 'Supabase', 'Firebase'],
  'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma', 'Render', 'Expo'],
  Networking: ['TCP/IP', 'Routing', 'Switching', 'Troubleshooting', 'Cisco'],
  Creative: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'],
}

export const experience: ExperienceItem[] = [
  { dates: '2025 — 2026', role: 'Junior System Developer Intern', organization: 'FEU Institute of Technology', description: 'Developed institutional web applications using PHP, Symfony, MySQL, JavaScript, and REST APIs. Contributed to frontend interfaces, backend services, database structures, testing, debugging, and technical documentation while collaborating with stakeholders.' },
  { dates: '2024 — NOW', role: 'Freelance Developer & Video Editor', organization: 'Independent', description: 'Designing and delivering websites, business systems, brand content, and social-first video edits for clients and collaborators.' },
  { dates: '2022 — NOW', role: 'Creative Practice', organization: 'Video, motion & design', description: 'Building expertise in editing rhythm, motion graphics, color, and visual storytelling through continuous project work.' },
]

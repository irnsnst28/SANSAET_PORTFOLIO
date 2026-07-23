import emailjs from '@emailjs/browser'
import { useState, type FormEvent } from 'react'
import { Arrow } from '../components/Arrow'
import { Reveal } from '../components/Reveal'

type FormState = 'idle' | 'loading' | 'success' | 'error'

export function Contact() {
  const [state, setState] = useState<FormState>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setState('loading'); setStatusMessage('')
    const form = event.currentTarget
    const values = Object.fromEntries(new FormData(form))
    const existing = JSON.parse(localStorage.getItem('portfolio-inquiries') || '[]') as unknown[]
    localStorage.setItem('portfolio-inquiries', JSON.stringify([...existing, { ...values, createdAt: new Date().toISOString() }]))

    try {
      const service = import.meta.env.VITE_EMAILJS_SERVICE_ID
      const template = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
      const key = import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      if (!service || !template || !key) throw new Error('Email service is not configured yet.')
      await emailjs.sendForm(service, template, form, { publicKey: key })
      form.reset(); setState('success'); setStatusMessage('Thanks — your message is on its way. I’ll reply within 1–2 business days.')
    } catch (error) {
      setState('error')
      setStatusMessage(error instanceof Error && error.message === 'Email service is not configured yet.' ? 'Your inquiry was saved locally. Add EmailJS keys in Vercel to enable direct email delivery.' : 'Something went wrong. Please email me directly instead.')
    }
  }

  return (
    <section className="contact" id="contact">
      <Reveal><div className="contact-intro"><span className="section-kicker">06 / Contact</span><h2>Let’s build something <em>meaningful together.</em></h2><p>Whether you need a web application, business system, portfolio website, or creative video content, I’d love to hear about your project.</p><a href="mailto:aaronsansaet@gmail.com">aaronsansaet@gmail.com <Arrow /></a></div></Reveal>
      <Reveal><form onSubmit={submit}><div className="field-row"><label>Your name<input name="name" required minLength={2} autoComplete="name" placeholder="Jane Smith" /></label><label>Email address<input name="email" type="email" required autoComplete="email" placeholder="jane@company.com" /></label></div><div className="field-row"><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Web development</option><option>Full stack development</option><option>UI / UX design</option><option>Video editing</option><option>Something else</option></select></label><label>Estimated budget<select name="budget" defaultValue=""><option value="">Not sure yet</option><option>Under $500</option><option>$500 — $1,500</option><option>$1,500 — $5,000</option><option>$5,000+</option></select></label></div><label>Tell me about the project<textarea name="message" required minLength={15} rows={5} placeholder="A little context, your timeline, and what success looks like…" /></label><button className="button light submit" disabled={state === 'loading'}>{state === 'loading' ? 'Sending…' : 'Send inquiry'} <Arrow /></button>{statusMessage && <p className={`form-message ${state}`} role="status">{statusMessage}</p>}</form></Reveal>
    </section>
  )
}

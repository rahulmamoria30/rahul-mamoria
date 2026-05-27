"use client"

import { Mail, MapPin, Send, X } from "lucide-react"
import { SectionTitle } from "@/components/ui/section-title"
import { useState } from "react"
import { sendContactForm, type ContactFormData } from "@/api/contact"
import { socailLinksWithInstagram } from "@/constants/sidebar"
import { AppLink } from "@/components/ui/link"
import { FormItem } from "@/components/ui/form-item"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus({ type: null, message: "" })

    try {
      await sendContactForm(formData)
      setStatus({
        type: "success",
        message: "Message sent successfully!",
      })
      setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error ? error.message : "Failed to send message",
      })
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setFormData({ name: "", email: "", phone: "", message: "" })
    setStatus({ type: null, message: "" })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div id="contact" className="pb-24 space-y-8 scroll-mt-24">
      <SectionTitle icon={Mail} title="Contact" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Contact Information */}
        <div className="rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 p-6 sm:p-8">
          <div className="space-y-6">
            {/* Profile Section */}
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-foreground">
                Let&apos;s Connect
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Feel free to reach out for collaborations or just a friendly
                hello
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/60 border border-border/50 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Email
                  </h4>
                  <AppLink
                    href="mailto:rahulmamoria@gmail.com"
                    className="text-sm font-medium text-foreground/90 hover:text-primary transition-colors duration-200"
                  >
                    rahulmamoria07@gmail.com
                  </AppLink>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-card/60 border border-border/50 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <h4 className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60">
                    Location
                  </h4>
                  <span className="text-sm font-medium text-foreground/90">
                    Hyderabad, India
                  </span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2">
              <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground/60 mb-3">
                Follow me
              </p>
              <div className="flex gap-2">
                <TooltipProvider>
                  {socailLinksWithInstagram.map((link) => (
                    <Tooltip key={link.label}>
                      <TooltipTrigger asChild>
                        <AppLink
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center h-9 w-9 rounded-lg bg-card/60 border border-border/50 text-muted-foreground hover:border-primary/30 hover:text-foreground transition-all duration-200"
                        >
                          <link.icon className="w-4 h-4" />
                        </AppLink>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="text-xs font-medium">{link.label}</p>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-xl bg-card/40 backdrop-blur-sm border border-border/50 p-6">
          <h3 className="text-base font-semibold text-foreground/90 mb-5">
            Send Message
          </h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <FormItem label="Name" id="name">
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </FormItem>

            <FormItem label="Email" id="email">
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your email"
              />
            </FormItem>

            <FormItem label="Message" id="message">
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Your message"
              />
            </FormItem>

            {status.message && (
              <div
                className={`p-3 rounded-md ${
                  status.type === "success"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                {status.message}
              </div>
            )}

            <div className="flex justify-between gap-4">
              <Button
                type="submit"
                disabled={isLoading}
                isLoading={isLoading}
                className="w-32"
              >
                Send
                <Send className="w-4 h-4 ml-2" />
              </Button>
              <Button type="button" onClick={handleReset} variant="outline">
                Reset
                <X className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

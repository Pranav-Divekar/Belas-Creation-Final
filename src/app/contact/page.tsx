"use client"

import React from "react"
import Head from "next/head";

import { useState } from "react"
import { cn } from "@/lib/utils"

interface FormData {
  name: string
  email: string
  phone: string
  projectType: string
  message: string
  services: {
    hoarding: boolean
    ev: boolean
    normalCycle: boolean
    digitalMarketing: boolean
  }
}

interface FormErrors {
  name?: string
  email?: string
  message?: string
}

// WhatsApp Logo Component
const WhatsAppLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.465 3.488" />
  </svg>
)

// Phone Logo Component
const PhoneLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
  </svg>
)

// Email Logo Component
const EmailLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
)

// Send Icon
const SendIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="22" y1="2" x2="11" y2="13"></line>
    <polygon points="22,2 15,22 11,13 2,9 22,2"></polygon>
  </svg>
)

// Check Circle Icon
const CheckCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
    <polyline points="22,4 12,14.01 9,11.01"></polyline>
  </svg>
)

// Alert Circle Icon
const AlertCircleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="12" y1="8" x2="12" y2="12"></line>
    <line x1="12" y1="16" x2="12.01" y2="16"></line>
  </svg>
)

// Arrow Right Icon
const ArrowRightIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12,5 19,12 12,19"></polyline>
  </svg>
)

// User Icon
const UserIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
)

// At Sign Icon
const AtSignIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="4"></circle>
    <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"></path>
  </svg>
)

// File Text Icon
const FileTextIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
    <polyline points="14,2 14,8 20,8"></polyline>
    <line x1="16" y1="13" x2="8" y2="13"></line>
    <line x1="16" y1="17" x2="8" y2="17"></line>
    <polyline points="10,9 9,9 8,9"></polyline>
  </svg>
)

// Map Pin Icon
const MapPinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
)

// Clock Icon
const ClockIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10"></circle>
    <polyline points="12,6 12,12 16,14"></polyline>
  </svg>
)

// Chevron Down Icon
const ChevronDownIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="6,9 12,15 18,9"></polyline>
  </svg>
)

// Check Icon
const CheckIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polyline points="20,6 9,17 4,12"></polyline>
  </svg>
)

// Button Component
const Button = ({
  children,
  onClick,
  disabled,
  className,
  variant = "default",
  type = "button",
  ...props
}: {
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  className?: string
  variant?: "default" | "outline"
  type?: "button" | "submit"
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
  const variantClasses =
    variant === "outline"
      ? "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
      : "bg-primary text-primary-foreground hover:bg-primary/90"

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(baseClasses, variantClasses, className)}
      {...props}
    >
      {children}
    </button>
  )
}

// Card Component
const Card = ({
  children,
  className,
  onClick,
  ...props
}: {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}) => (
  <div
    className={cn("rounded-lg border bg-card text-card-foreground shadow-sm", className)}
    onClick={onClick}
    {...props}
  >
    {children}
  </div>
)

// Card Content Component
const CardContent = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode
  className?: string
}) => (
  <div className={cn("p-6 pt-0", className)} {...props}>
    {children}
  </div>
)

// Input Component
const Input = ({
  className,
  type = "text",
  ...props
}: {
  className?: string
  type?: string
  [key: string]: any
}) => (
  <input
    type={type}
    className={cn(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
)

// Textarea Component
const Textarea = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: any
}) => (
  <textarea
    className={cn(
      "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    {...props}
  />
)

// Label Component
const Label = ({
  className,
  ...props
}: {
  className?: string
  [key: string]: any
}) => (
  <label
    className={cn(
      "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
      className,
    )}
    {...props}
  />
)

// Checkbox Component
const Checkbox = ({
  checked,
  onCheckedChange,
  className,
  id,
  ...props
}: {
  checked?: boolean
  onCheckedChange?: (checked: boolean) => void
  className?: string
  id?: string
}) => (
  <div className="relative">
    <input
      type="checkbox"
      id={id}
      checked={checked}
      onChange={(e) => onCheckedChange?.(e.target.checked)}
      className="sr-only"
      {...props}
    />
    <div
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "h-4 w-4 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer flex items-center justify-center",
        checked ? "bg-primary text-primary-foreground" : "bg-background",
        className,
      )}
    >
      {checked && <CheckIcon className="h-3 w-3" />}
    </div>
  </div>
)

// Select Components
const Select = ({
  children,
  value,
  onValueChange,
}: {
  children: React.ReactNode
  value?: string
  onValueChange?: (value: string) => void
}) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, {
            isOpen,
            setIsOpen,
            value,
            onValueChange,
          })
        }
        return child
      })}
    </div>
  )
}

const SelectTrigger = ({
  children,
  className,
  isOpen,
  setIsOpen,
  value,
}: {
  children: React.ReactNode
  className?: string
  isOpen?: boolean
  setIsOpen?: (open: boolean) => void
  value?: string
}) => (
  <button
    type="button"
    onClick={() => setIsOpen?.(!isOpen)}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
  >
    {children}
    <ChevronDownIcon className="h-4 w-4 opacity-50" />
  </button>
)

const SelectValue = ({
  placeholder,
  value,
}: {
  placeholder?: string
  value?: string
}) => <span>{value || placeholder}</span>

const SelectContent = ({
  children,
  isOpen,
  setIsOpen,
  onValueChange,
}: {
  children: React.ReactNode
  isOpen?: boolean
  setIsOpen?: (open: boolean) => void
  onValueChange?: (value: string) => void
}) => {
  if (!isOpen) return null

  return (
    <div className="absolute top-full left-0 right-0 z-50 mt-1 max-h-60 overflow-auto rounded-md border bg-popover text-popover-foreground shadow-md">
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as any, {
            setIsOpen,
            onValueChange,
          })
        }
        return child
      })}
    </div>
  )
}

const SelectItem = ({
  children,
  value,
  setIsOpen,
  onValueChange,
}: {
  children: React.ReactNode
  value: string
  setIsOpen?: (open: boolean) => void
  onValueChange?: (value: string) => void
}) => (
  <div
    onClick={() => {
      onValueChange?.(value)
      setIsOpen?.(false)
    }}
    className="relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground cursor-pointer"
  >
    {children}
  </div>
)

export default function AgencyContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
    services: {
      hoarding: false,
      ev: false,
      normalCycle: false,
      digitalMarketing: false,
    },
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [notification, setNotification] = useState<{
    type: "success" | "error"
    message: string
  } | null>(null)
  const [activeField, setActiveField] = useState<string | null>(null)

  const projectTypes = [
    "Outdoor Advertising",
    "Branding & Identity",
    "Digital Campaign",
    "Social Media Strategy",
    "Website Development",
    "Print Design",
    "Marketing Consultation",
    "Other",
  ]

  // Magic UI effect - field focus animation
  const handleFieldFocus = (fieldName: string) => {
    setActiveField(fieldName)
  }

  const handleFieldBlur = () => {
    setActiveField(null)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, projectType: value }))
  }

  const handleServiceChange = (service: keyof FormData["services"]) => {
    setFormData((prev) => ({
      ...prev,
      services: {
        ...prev.services,
        [service]: !prev.services[service],
      },
    }))
  }

  const getSelectedServices = (): string => {
    const selected = Object.entries(formData.services)
      .filter(([_, isSelected]) => isSelected)
      .map(([service, _]) => {
        switch (service) {
          case "hoarding":
            return "Hoarding/Billboard"
          case "ev":
            return "EV"
          case "normalCycle":
            return "Normal Cycle"
          case "digitalMarketing":
            return "Digital Marketing"
          default:
            return service
        }
      })

    return selected.length > 0 ? selected.join(", ") : "None specified"
  }

  const sendEmailDirectly = (data: FormData) => {
    const selectedServices = getSelectedServices()

    const subject = encodeURIComponent(`New Project Inquiry - ${data.projectType || "General"} from ${data.name}`)

    const body = encodeURIComponent(
      `New Project Inquiry Details:

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone || "Not provided"}
Project Type: ${data.projectType || "Not specified"}

Services Required:
${selectedServices}

Message:
${data.message}

---
This email was sent from the agency contact form.
Please respond to: ${data.email}`,
    )

    // Open default email client with pre-filled content
    window.location.href = `mailto:agency@example.com?subject=${subject}&body=${body}`

    return Promise.resolve({ success: true })
  }

  const showNotification = (type: "success" | "error", message: string) => {
    setNotification({ type, message })
    setTimeout(() => setNotification(null), 5000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) return

    setIsSubmitting(true)

    try {
      // Send email directly via mailto
      await sendEmailDirectly(formData)

      setIsSubmitted(true)
      showNotification("success", "Email client opened! Please send the pre-filled email to complete your inquiry.")

      // Reset form after success
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: "",
          email: "",
          phone: "",
          projectType: "",
          message: "",
          services: {
            hoarding: false,
            ev: false,
            normalCycle: false,
            digitalMarketing: false,
          },
        })
      }, 3000)
    } catch (error) {
      console.error("Form submission error:", error)
      showNotification("error", "Something went wrong. Please try contacting us directly via phone or WhatsApp.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsAppClick = () => {
    const selectedServices = getSelectedServices()
    const message = encodeURIComponent(
      `Hi! I'm interested in discussing a project with your agency.

Name: ${formData.name || "[Your Name]"}
Project Type: ${formData.projectType || "General Inquiry"}
Services: ${selectedServices}

${formData.message ? `Message: ${formData.message}` : "I'd like to discuss my project requirements."}

Please let me know when we can schedule a consultation.`,
    )
    window.open(`https://wa.me/15551234567?text=${message}`, "_blank")
  }

  const handlePhoneClick = () => {
    window.location.href = "tel:+91 98819 97770"
  }

  const handleEmailClick = () => {
    const selectedServices = getSelectedServices()
    const subject = encodeURIComponent(`Project Inquiry - ${formData.projectType || "General"}`)
    const body = encodeURIComponent(
      `Hi,

I'm interested in discussing a project with your agency.

Name: ${formData.name || "[Your Name]"}
Email: ${formData.email || "[Your Email]"}
Phone: ${formData.phone || "[Your Phone]"}
Project Type: ${formData.projectType || "[Project Type]"}

Services Required:
${selectedServices}

Message:
${formData.message || "[Your message here]"}

Best regards,
${formData.name || "[Your Name]"}`,
    )
    window.location.href = `mailto:advt.belascreation@gmail.com?subject=${subject}&body=${body}`
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center p-4">
        <Card className="max-w-md w-full border-0 shadow-lg bg-white rounded-3xl overflow-hidden">
          <CardContent className="p-8 text-center">
            <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-blue-200 animate-bounce">
              <CheckCircleIcon className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Email Ready!</h2>
            <p className="text-lg text-gray-600 mb-8">
              Your email client should have opened with a pre-filled message. Please send it to complete your inquiry,
              or try one of our other contact methods below.
            </p>
            <div className="space-y-4">
              <Button
                onClick={handleWhatsAppClick}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 text-base rounded-xl"
              >
                <WhatsAppLogo className="mr-2 h-5 w-5" />
                Continue via WhatsApp
              </Button>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    projectType: "",
                    message: "",
                    services: {
                      hoarding: false,
                      ev: false,
                      normalCycle: false,
                      digitalMarketing: false,
                    },
                  })
                }}
                variant="outline"
                className="w-full h-12 text-base rounded-xl"
              >
                Start New Inquiry
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <>
    <Head>
        <title>Contact Our Advertising Agency | Project Inquiry & Services</title>
        <meta name="description" content="Contact our advertising agency for outdoor advertising, branding, digital marketing, website development, and more. Submit your project inquiry and connect with experts for hoarding, EV, cycle, and digital campaigns." />
        <meta name="keywords" content="advertising agency, contact agency, agency inquiry, project inquiry, advertising services, outdoor advertising, hoarding advertising, billboard advertising, EV advertising, cycle advertising, normal cycle advertising, digital marketing, branding, branding services, identity design, brand identity, social media strategy, digital campaign, website development, print design, marketing consultation, marketing services, creative agency, advertising solutions, campaign management, campaign inquiry, media agency, marketing agency, agency contact form, advertising contact, marketing contact, advertising experts, branding experts, digital experts, social media experts, website experts, print experts, marketing experts, agency services, advertising request, marketing request, branding request, project request, business inquiry, business contact, advertising support, marketing support, branding support, advertising help, marketing help, branding help, advertising consultation, marketing consultation, branding consultation, creative services, creative solutions, creative inquiry, creative contact, agency support, agency help, agency solutions, advertising agency Mumbai, advertising agency India, digital agency, digital contact, digital inquiry, digital solutions, digital services, outdoor campaign, digital campaign inquiry, campaign support, campaign help, campaign solutions, campaign services, advertising booking, marketing booking, branding booking, project booking, agency booking, advertising feedback, marketing feedback, branding feedback, agency feedback, advertising questions, marketing questions, branding questions, agency questions, advertising communication, marketing communication, branding communication, agency communication, advertising collaboration, marketing collaboration, branding collaboration, agency collaboration, advertising partnership, marketing partnership, branding partnership, agency partnership" />
      </Head>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white relative overflow-hidden pt-16 pb-16">
      {/* Notification */}
      {notification && (
        <div
          className={`fixed top-4 right-4 z-50 p-4 rounded-xl shadow-lg max-w-sm animate-in fade-in slide-in-from-top-5 ${
            notification.type === "success"
              ? "bg-blue-50 border border-blue-200 text-blue-800"
              : "bg-red-50 border border-red-200 text-red-800"
          }`}
        >
          <div className="flex items-start space-x-3">
            {notification.type === "success" ? (
              <CheckCircleIcon className="w-5 h-5 text-blue-600 mt-0.5" />
            ) : (
              <AlertCircleIcon className="w-5 h-5 text-red-600 mt-0.5" />
            )}
            <p className="text-sm font-medium">{notification.message}</p>
          </div>
        </div>
      )}

      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating 3D Cubes */}
        <div className="absolute top-20 left-10 w-16 h-16 bg-blue-200 opacity-20 transform rotate-45 animate-float-slow"></div>
        <div
          className="absolute top-40 right-20 w-12 h-12 bg-blue-300 opacity-30 transform rotate-12 animate-float-medium"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-20 h-20 bg-blue-100 opacity-25 transform -rotate-12 animate-float-slow"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* 3D Spheres */}
        <div
          className="absolute top-60 right-10 w-24 h-24 bg-gradient-to-br from-blue-200 to-blue-300 rounded-full opacity-20 animate-float-medium shadow-2xl"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div
          className="absolute bottom-20 right-40 w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded-full opacity-30 animate-float-slow shadow-xl"
          style={{ animationDelay: "1.5s" }}
        ></div>

        {/* 3D Triangles */}
        <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-blue-200 opacity-25 animate-rotate-slow"></div>
        <div
          className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-blue-300 opacity-20 animate-rotate-medium"
          style={{ animationDelay: "2s" }}
        ></div>

        {/* 3D Hexagons */}
        <div className="absolute top-1/2 left-16 w-14 h-14 bg-blue-200 opacity-25 transform rotate-30 animate-pulse-3d clip-hexagon"></div>
        <div
          className="absolute top-1/4 right-1/4 w-10 h-10 bg-blue-300 opacity-30 transform -rotate-45 animate-pulse-3d clip-hexagon"
          style={{ animationDelay: "1s" }}
        ></div>

        {/* Large Background Blurs */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-30 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-5xl">
        {/* Header */}
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-5 duration-700">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight tracking-tight">
            Let&apos;s Create Together
            <div className="h-1 w-24 bg-blue-500 mx-auto mt-4 rounded-full"></div>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-6">
            Tell us about your project and let&apos;s bring your vision to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-xl bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden relative">
            <CardContent className="p-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                  <EmailLogo className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Contact Us</h2>
                  <p className="text-gray-600">We&apos;d love to hear from you</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field - Magic UI with icon and animation */}
                <div
                  className={cn(
                    "relative group transition-all duration-300 rounded-xl",
                    activeField === "name" ? "bg-blue-50" : "",
                  )}
                >
                  <div className="flex items-center">
                    <div className="pl-4 pr-2">
                      <UserIcon
                        className={cn(
                          "w-5 h-5 transition-colors duration-300",
                          activeField === "name" ? "text-blue-500" : "text-gray-400",
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="name" className="text-sm font-medium block mb-1 ml-1">
                        Full Name <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus("name")}
                        onBlur={handleFieldBlur}
                        className={cn(
                          "border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 pl-0",
                          errors.name && "text-red-500",
                        )}
                        placeholder="Your Name/ Organizations Name"
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "h-0.5 w-full bg-gray-100 mt-1 transition-all duration-300",
                      activeField === "name" ? "bg-blue-500" : "",
                      errors.name && "bg-red-500",
                    )}
                  ></div>
                  {errors.name && (
                    <div className="flex items-center space-x-2 text-red-500 text-sm mt-1 ml-10">
                      <AlertCircleIcon className="w-4 h-4" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email Field - Magic UI with icon and animation */}
                <div
                  className={cn(
                    "relative group transition-all duration-300 rounded-xl",
                    activeField === "email" ? "bg-blue-50" : "",
                  )}
                >
                  <div className="flex items-center">
                    <div className="pl-4 pr-2">
                      <AtSignIcon
                        className={cn(
                          "w-5 h-5 transition-colors duration-300",
                          activeField === "email" ? "text-blue-500" : "text-gray-400",
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="email" className="text-sm font-medium block mb-1 ml-1">
                        Email Address <span className="text-red-500">*</span>
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus("email")}
                        onBlur={handleFieldBlur}
                        className={cn(
                          "border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 h-10 pl-0",
                          errors.email && "text-red-500",
                        )}
                        placeholder="organization@example.com"
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "h-0.5 w-full bg-gray-100 mt-1 transition-all duration-300",
                      activeField === "email" ? "bg-blue-500" : "",
                      errors.email && "bg-red-500",
                    )}
                  ></div>
                  {errors.email && (
                    <div className="flex items-center space-x-2 text-red-500 text-sm mt-1 ml-10">
                      <AlertCircleIcon className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Phone Field - Simple version */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium">
                    Phone Number (Optional)
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-10 rounded-xl border-gray-200 focus:border-blue-500"
                    placeholder="+91"
                  />
                </div>

                {/* Project Type Dropdown */}
                <div className="space-y-2">
                  <Label htmlFor="projectType" className="text-sm font-medium">
                    Project Type
                  </Label>
                  <Select value={formData.projectType} onValueChange={handleSelectChange}>
                    <SelectTrigger className="h-10 rounded-xl border-gray-200 focus:border-blue-500">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      {projectTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Services Checkboxes - Simplified */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">Services Required</Label>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="hoarding"
                        checked={formData.services.hoarding}
                        onCheckedChange={() => handleServiceChange("hoarding")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded"
                      />
                      <Label htmlFor="hoarding" className="text-sm cursor-pointer">
                        Hoarding/Billboard
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="ev"
                        checked={formData.services.ev}
                        onCheckedChange={() => handleServiceChange("ev")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded"
                      />
                      <Label htmlFor="ev" className="text-sm cursor-pointer">
                        EV
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="normalCycle"
                        checked={formData.services.normalCycle}
                        onCheckedChange={() => handleServiceChange("normalCycle")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded"
                      />
                      <Label htmlFor="normalCycle" className="text-sm cursor-pointer">
                        Normal Cycle
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="digitalMarketing"
                        checked={formData.services.digitalMarketing}
                        onCheckedChange={() => handleServiceChange("digitalMarketing")}
                        className="data-[state=checked]:bg-blue-500 data-[state=checked]:border-blue-500 rounded"
                      />
                      <Label htmlFor="digitalMarketing" className="text-sm cursor-pointer">
                        Digital Marketing
                      </Label>
                    </div>
                  </div>
                </div>

                {/* Message Field - Magic UI with icon and animation */}
                <div
                  className={cn(
                    "relative group transition-all duration-300 rounded-xl",
                    activeField === "message" ? "bg-blue-50" : "",
                  )}
                >
                  <div className="flex items-start pt-2">
                    <div className="pl-4 pr-2">
                      <FileTextIcon
                        className={cn(
                          "w-5 h-5 transition-colors duration-300 mt-5",
                          activeField === "message" ? "text-blue-500" : "text-gray-400",
                        )}
                      />
                    </div>
                    <div className="flex-1">
                      <Label htmlFor="message" className="text-sm font-medium block mb-1 ml-1">
                        Your Message <span className="text-red-500">*</span>
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onFocus={() => handleFieldFocus("message")}
                        onBlur={handleFieldBlur}
                        rows={4}
                        className={cn(
                          "resize-none border-0 bg-transparent focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 pl-0",
                          errors.message && "text-red-500",
                        )}
                        placeholder="Tell us about your project, goals, and requirements..."
                      />
                    </div>
                  </div>
                  <div
                    className={cn(
                      "h-0.5 w-full bg-gray-100 mt-1 transition-all duration-300",
                      activeField === "message" ? "bg-blue-500" : "",
                      errors.message && "bg-red-500",
                    )}
                  ></div>
                  {errors.message && (
                    <div className="flex items-center space-x-2 text-red-500 text-sm mt-1 ml-10">
                      <AlertCircleIcon className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button - Magic UI with hover effect */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white text-base font-medium rounded-xl relative overflow-hidden group"
                >
                  <span className="absolute inset-0 w-0 bg-blue-800 transition-all duration-500 ease-out group-hover:w-full"></span>
                  <span className="relative flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                        Opening Email...
                      </>
                    ) : (
                      <>
                        Send Message
                        <SendIcon className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </span>
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Direct Contact Methods */}
          <div className="space-y-6">
            {/* Contact Cards - Magic UI with hover effects */}
            <Card
              onClick={handleWhatsAppClick}
              className="border-0 shadow-lg bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <WhatsAppLogo className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">WhatsApp Chat</h4>
                  <p className="text-sm text-gray-600">Start an instant conversation - +91 98819 97770</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-green-500 group-hover:translate-x-1 transition-all duration-300" />
              </CardContent>
            </Card>

            <Card
              onClick={handlePhoneClick}
              className="border-0 shadow-lg bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <PhoneLogo className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">Direct Call</h4>
                  <p className="text-sm text-gray-600">+91 98819 97770</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all duration-300" />
              </CardContent>
            </Card>

            <Card
              onClick={handleEmailClick}
              className="border-0 shadow-lg bg-white/95 backdrop-blur-sm rounded-3xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
            >
              <CardContent className="p-6 flex items-center space-x-4">
                <div className="w-12 h-12 bg-red-500 rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                  <EmailLogo className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h4 className="text-lg font-semibold text-gray-900">Send Email</h4>
                  <p className="text-sm text-gray-600">advt.belascreation@gmail.com</p>
                </div>
                <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-red-500 group-hover:translate-x-1 transition-all duration-300" />
              </CardContent>
            </Card>

            {/* Agency Address - Magic UI element */}
            <div className="mt-8 bg-blue-50/80 backdrop-blur-sm rounded-3xl p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-100 rounded-full blur-xl opacity-70"></div>
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Office</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                      <MapPinIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Our office</p>
                      <p className="text-sm text-gray-600">
                      65/1 sector 25 Pradhikaran Nigdi Pune 411044
                        <br />
                        Maharashtra, India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center shadow-md">
                      <ClockIcon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Business Hours</p>
                      <p className="text-sm text-gray-600">
                        Monday - Saturday: 9 am to 7 pm
                        <br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(45deg); }
          50% { transform: translateY(-20px) rotate(45deg); }
        }

        @keyframes float-medium {
          0%, 100% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(12deg); }
        }

        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes rotate-medium {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }

        @keyframes pulse-3d {
          0%, 100% { 
            transform: scale(1) rotate(30deg);
            opacity: 0.25;
          }
          50% { 
            transform: scale(1.1) rotate(30deg);
            opacity: 0.4;
          }
        }

        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }

        .animate-float-medium {
          animation: float-medium 4s ease-in-out infinite;
        }

        .animate-rotate-slow {
          animation: rotate-slow 20s linear infinite;
        }

        .animate-rotate-medium {
          animation: rotate-medium 15s linear infinite;
        }

        .animate-pulse-3d {
          animation: pulse-3d 3s ease-in-out infinite;
        }

        .clip-hexagon {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
        }
      `}</style>
    </div>
    </>
  )
}

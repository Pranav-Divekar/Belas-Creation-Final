"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  TrendingUp,
  Users,
  Globe,
  Palette,
  ArrowRight,
  CheckCircle,
  Play,
  ChevronRight,
  Zap,
  Target,
  BarChart2,
  MessageSquare,
  MousePointer,
} from "lucide-react"
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
})

export default function ServicesPage() {
  const [isVisible, setIsVisible] = useState({})
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const heroRef = useRef(null)
  const [scrollY, setScrollY] = useState(0)

  // Track mouse position for parallax effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Track scroll position for parallax effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }))
          }
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[data-animate]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  // Services data
  const services = [
    {
      title: "Digital Marketing",
      description: "Data-driven campaigns that deliver measurable ROI and exceptional brand experiences.",
      icon: TrendingUp,
      features: ["Performance Marketing", "Conversion Optimization", "Marketing Automation", "Analytics & Insights"],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-indigo-50",
      delay: "0ms",
      stats: "32% avg. increase in conversion rates",
    },
    {
      title: "Social Media Management",
      description: "Strategic social presence that builds communities and drives meaningful engagement.",
      icon: Users,
      features: ["Platform Strategy", "Content Production", "Community Growth", "Influencer Partnerships"],
      color: "from-violet-500 to-purple-600",
      bgColor: "bg-gradient-to-br from-violet-50 to-purple-50",
      delay: "100ms",
      stats: "4.8x higher engagement than industry average",
    },
    {
      title: "Website Designing",
      description: "Award-winning websites that combine stunning aesthetics with frictionless user experiences.",
      icon: Globe,
      features: ["UX Research & Strategy", "Interactive Prototyping", "Custom Development", "Performance Optimization"],
      color: "from-teal-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-teal-50 to-emerald-50",
      delay: "200ms",
      stats: "89% increase in user session duration",
    },
    {
      title: "Flex Designing",
      description: "Versatile design solutions that elevate your brand across every touchpoint and medium.",
      icon: Palette,
      features: ["Brand Identity Systems", "Print & Digital Assets", "Environmental Design", "Motion Graphics"],
      color: "from-amber-500 to-orange-600",
      bgColor: "bg-gradient-to-br from-amber-50 to-orange-50",
      delay: "300ms",
      stats: "Recognized by 3 international design awards",
    },
  ]

  // Clients data
  const clients = [
    { name: "Acme Inc", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Globex", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Soylent Corp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Initech", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Umbrella Corp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Massive Dynamic", logo: "/placeholder.svg?height=60&width=120" },
  ]

  // Process steps data
  const processSteps = [
    {
      icon: Target,
      title: "Discover",
      description:
        "We dive deep into your business, audience, and objectives to uncover insights that drive our strategy.",
      color: "from-blue-500 to-cyan-500",
      number: "01",
    },
    {
      icon: Zap,
      title: "Strategize",
      description:
        "We develop comprehensive strategies that align with your goals and resonate with your target audience.",
      color: "from-violet-500 to-purple-500",
      number: "02",
    },
    {
      icon: Palette,
      title: "Create",
      description: "Our creative team brings concepts to life with stunning visuals and compelling messaging.",
      color: "from-fuchsia-500 to-pink-500",
      number: "03",
    },
    {
      icon: BarChart2,
      title: "Optimize",
      description: "We continuously analyze performance data to refine and enhance your digital presence.",
      color: "from-amber-500 to-orange-500",
      number: "04",
    },
  ]

  // Calculate parallax effect based on mouse position
  const getParallaxStyle = (depth = 30) => {
    const centerX = window.innerWidth / 2
    const centerY = window.innerHeight / 2
    const x = (mousePosition.x - centerX) / depth
    const y = (mousePosition.y - centerY) / depth
    return { transform: `translate(${x}px, ${y}px)` }
  }

  return (
    <div className={cn("bg-white text-gray-900 overflow-hidden", poppins.className)}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white min-h-screen flex items-center">
        {/* 3D Grid Background */}
        <div className="absolute inset-0 perspective-1000">
          <div
            className="absolute inset-0 grid grid-cols-6 grid-rows-6 gap-4 opacity-20"
            style={{
              transform: `translateZ(-100px) rotateX(${scrollY * 0.01}deg) rotateY(${
                (mousePosition.x / window.innerWidth - 0.5) * 5
              }deg)`,
            }}
          >
            {Array.from({ length: 36 }).map((_, i) => (
              <div
                key={i}
                className="border border-blue-200 rounded-lg"
                style={{
                  animation: `float ${3 + (i % 5)}s ease-in-out infinite`,
                  animationDelay: `${i * 0.1}s`,
                }}
              ></div>
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-300/30 rounded-full filter blur-3xl animate-blob"
            style={{ ...getParallaxStyle(20) }}
          />
          <div
            className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-300/30 rounded-full filter blur-3xl animate-blob animation-delay-2000"
            style={{ ...getParallaxStyle(15) }}
          />
          <div
            className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-pink-300/30 rounded-full filter blur-3xl animate-blob animation-delay-4000"
            style={{ ...getParallaxStyle(25) }}
          />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                width: `${Math.random() * 10 + 5}px`,
                height: `${Math.random() * 10 + 5}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.5 + 0.3,
                animation: `floatParticle ${Math.random() * 10 + 10}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>

        <div className="relative container mx-auto px-4 py-24 md:py-32 lg:py-40 z-20 text-center" ref={heroRef}>
          <div className="max-w-4xl mx-auto">
            <Badge
              variant="outline"
              className="mb-6 px-4 py-2 text-sm font-medium border-blue-500 text-blue-700"
              id="hero-badge"
              data-animate="true"
              style={{
                opacity: isVisible["hero-badge"] ? 1 : 0,
                transform: isVisible["hero-badge"] ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s ease-out",
              }}
            >
              Creative Digital Agency
            </Badge>

            <h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight tracking-tight text-gray-900"
              id="hero-title"
              data-animate="true"
              style={{
                opacity: isVisible["hero-title"] ? 1 : 0,
                transform: isVisible["hero-title"] ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.2s",
              }}
            >
              We Create
              <span
                className="block mt-2 bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent relative mx-auto"
                style={{ ...getParallaxStyle(60) }}
              >
                Digital Experiences
                <span className="absolute -inset-1 bg-gradient-to-r from-blue-600/10 via-violet-600/10 to-purple-600/10 blur-xl rounded-lg -z-10"></span>
              </span>
              That Matter
            </h1>

            <p
              className="text-xl md:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed"
              id="hero-desc"
              data-animate="true"
              style={{
                opacity: isVisible["hero-desc"] ? 1 : 0,
                transform: isVisible["hero-desc"] ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.4s",
              }}
            >
              We blend creativity, strategy, and technology to build brands that captivate audiences and drive
              exceptional results.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              id="hero-cta"
              data-animate="true"
              style={{
                opacity: isVisible["hero-cta"] ? 1 : 0,
                transform: isVisible["hero-cta"] ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.6s",
              }}
            >
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-700 hover:to-violet-700 border-0 transition-all duration-300 transform hover:scale-105 hover:rotate-1 rounded-full text-white shadow-lg hover:shadow-blue-500/30"
              >
                See Our Work
                <ArrowRight className="ml-2 h-5 w-5 animate-pulse" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 hover:bg-gray-50 transition-all duration-300 rounded-full group hover:-rotate-1"
              >
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Watch Showreel
              </Button>
            </div>
          </div>

          {/* Mouse scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <MousePointer className="h-6 w-6 text-blue-600" />
            <span className="text-sm text-blue-600 mt-2">Scroll to explore</span>
          </div>
        </div>
      </section>
      {/* Services Section */}
      <section className="py-24 md:py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        {/* 3D Perspective Grid */}
        

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16 max-w-3xl mx-auto">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium border-blue-500 text-blue-700"
              id="services-badge"
              data-animate="true"
              style={{
                opacity: isVisible["services-badge"] ? 1 : 0,
                transform: isVisible["services-badge"] ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s ease-out",
              }}
            >
              Our Expertise
            </Badge>

            

            <p
              className="text-xl text-gray-600 max-w-2xl mx-auto"
              id="services-desc"
              data-animate="true"
              style={{
                opacity: isVisible["services-desc"] ? 1 : 0,
                transform: isVisible["services-desc"] ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.4s",
              }}
            >
              Our integrated approach combines strategic thinking with cutting-edge creativity to deliver solutions that
              elevate your brand.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <div
                  key={service.title}
                  className={`group relative overflow-hidden border border-gray-200 ${service.bgColor} hover:shadow-2xl transition-all duration-500 transform perspective-1000 hover:-translate-y-2 hover:rotate-1 rounded-xl p-6`}
                  id={`service-${index}`}
                  data-animate="true"
                  style={{
                    opacity: isVisible[`service-${index}`] ? 1 : 0,
                    transform: isVisible[`service-${index}`]
                      ? "translateY(0) rotateX(0)"
                      : "translateY(40px) rotateX(10deg)",
                    transition: `all 0.7s ease-out ${index * 0.15}s`,
                  }}
                >
                  {/* 3D Card effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-xl`}
                  />
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gray-200 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-t-xl" />

                  {/* Animated particles */}
                  <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full bg-white"
                        style={{
                          width: `${Math.random() * 6 + 2}px`,
                          height: `${Math.random() * 6 + 2}px`,
                          top: `${Math.random() * 100}%`,
                          left: `${Math.random() * 100}%`,
                          opacity: Math.random() * 0.3 + 0.2,
                          animation: `floatUp ${Math.random() * 3 + 2}s linear infinite`,
                          animationDelay: `${Math.random() * 2}s`,
                        }}
                      ></div>
                    ))}
                  </div>

                  {/* Card Header */}
                  <div className="pb-4 relative z-10">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-br ${service.color} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                      >
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <div className="ml-auto">
                        <Badge
                          variant="secondary"
                          className="bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200"
                        >
                          {service.stats}
                        </Badge>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                  </div>

                  {/* Card Content */}
                  <div className="pt-0 relative z-10">
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <div
                          key={feature}
                          className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-[-20px] group-hover:translate-x-0"
                          style={{ transitionDelay: `${featureIndex * 100}ms` }}
                        >
                          <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      className={`w-full bg-gradient-to-r ${service.color} hover:shadow-lg transition-all duration-300 transform group-hover:scale-105 font-semibold text-white shadow-md`}
                    >
                     <a href="/contact">Explore Service</a>
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Hover glow effect */}
                  <div
                    className={`absolute -inset-px bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-md rounded-xl transition-opacity duration-500 -z-10`}
                  ></div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 md:py-32 bg-white relative">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center opacity-5" />

        {/* Animated dots background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 grid grid-cols-20 grid-rows-20">
            {Array.from({ length: 100 }).map((_, i) => (
              <div
                key={i}
                className="flex items-center justify-center"
                style={{
                  opacity: Math.random() * 0.3 + 0.1,
                }}
              >
                <div
                  className="h-1 w-1 rounded-full bg-blue-500"
                  style={{
                    animation: `pulse ${Math.random() * 4 + 2}s infinite`,
                    animationDelay: `${Math.random() * 4}s`,
                  }}
                ></div>
              </div>
            ))}
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <Badge
              variant="outline"
              className="mb-4 px-4 py-2 text-sm font-medium border-blue-500 text-blue-700"
              id="process-badge"
              data-animate="true"
              style={{
                opacity: isVisible["process-badge"] ? 1 : 0,
                transform: isVisible["process-badge"] ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.7s ease-out",
              }}
            >
              Our Approach
            </Badge>

            <h2
              className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-gray-900"
              id="process-title"
              data-animate="true"
              style={{
                opacity: isVisible["process-title"] ? 1 : 0,
                transform: isVisible["process-title"] ? "translateY(0)" : "translateY(30px)",
                transition: "all 0.7s ease-out 0.2s",
              }}
            >
              How We Create
              <span className="block mt-2 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent relative">
                Digital Excellence
                <span className="absolute -inset-1 bg-gradient-to-r from-purple-600/10 to-pink-600/10 blur-xl rounded-lg -z-10"></span>
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {processSteps.map((step, index) => {
              const IconComponent = step.icon
              return (
                <div
                  key={step.title}
                  className="relative"
                  id={`process-${index}`}
                  data-animate="true"
                  style={{
                    opacity: isVisible[`process-${index}`] ? 1 : 0,
                    transform: isVisible[`process-${index}`]
                      ? "translateY(0) rotateX(0)"
                      : "translateY(40px) rotateX(10deg)",
                    transition: `all 0.7s ease-out ${index * 0.15}s`,
                  }}
                >
                  <div className="absolute -top-10 -left-10 text-7xl font-bold text-gray-100">{step.number}</div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 h-full border border-gray-100 group perspective-1000 hover:rotate-1 transform-gpu">
                    <div
                      className={`p-4 rounded-xl bg-gradient-to-br ${step.color} mb-6 inline-block relative overflow-hidden`}
                    >
                      <IconComponent className="h-8 w-8 text-white relative z-10" />
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                      <div className="absolute -inset-1 bg-white opacity-0 group-hover:opacity-30 blur-md transition-opacity duration-300"></div>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>

                    <div className="mt-6 flex items-center text-blue-600 font-medium opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      <span><a href="/contact">Learn more</a></span>
                      <ChevronRight className="h-4 w-4 ml-1 group-hover:ml-2 transition-all duration-300" />
                    </div>

                    {/* 3D hover effect */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        transform: "translateZ(-100px)",
                        background: "linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)",
                      }}
                    ></div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-gradient-to-r from-blue-200 to-violet-200 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1600')] bg-cover bg-center mix-blend-overlay opacity-10" />

        {/* Animated background elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000" />

        <div className="container mx-auto px-4 relative z-10">
          <div
            className="max-w-4xl mx-auto text-center"
            id="cta-content"
            data-animate="true"
            style={{
              opacity: isVisible["cta-content"] ? 1 : 0,
              transform: isVisible["cta-content"] ? "translateY(0)" : "translateY(40px)",
              transition: "all 0.7s ease-out",
            }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 mb-10 leading-relaxed">
              Let's collaborate to create experiences that captivate your audience and drive exceptional results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-white text-blue-600 hover:bg-white/90 transition-all duration-300 transform hover:scale-105 hover:rotate-1 rounded-full shadow-lg hover:shadow-white/30"
              >
                 <a href="/contact">Start Your Project</a>
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                className="px-8 py-6 text-lg font-semibold bg-blue-700 text-white hover:bg-blue-800 transition-all duration-300 rounded-full hover:-rotate-1 border-2 border-white/30 shadow-lg"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                <a href="/contact">Schedule a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <style jsx global>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -30px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(20px, 30px) scale(1.05); }
        }
        
        .animate-blob {
          animation: blob 15s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .perspective-1000 {
          perspective: 1000px;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes floatParticle {
          0% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-30px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(20px); }
          75% { transform: translateY(-20px) translateX(-10px); }
          100% { transform: translateY(0) translateX(0); }
        }
        
        @keyframes floatUp {
          0% { transform: translateY(20px); opacity: 0.5; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.2; }
          50% { transform: scale(2); opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}

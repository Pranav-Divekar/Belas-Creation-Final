"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Head from "next/head";
import {
  Route,
  Clock,
  MapPin,
  Zap,
  Monitor,
  BarChart3,
  Users,
  CheckCircle,
  PlayCircle,
  Map,
  Navigation,
  Target,
  ChevronLeft,
  ChevronRight,
  ImageIcon,
} from "lucide-react"

// Custom hook for number animation
const useCountUp = (end: number, duration = 2000) => {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)

  useEffect(() => {
    if (!hasStarted) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  const startAnimation = () => setHasStarted(true)

  return { count, startAnimation }
}

// Enhanced animation keyframes for 3D floating elements
const floatAnimation = `
@keyframes float {
  0% { transform: translateY(0px) translateX(0px) rotateZ(0deg); }
  25% { transform: translateY(-10px) translateX(5px) rotateZ(90deg); }
  50% { transform: translateY(0px) translateX(10px) rotateZ(180deg); }
  75% { transform: translateY(10px) translateX(5px) rotateZ(270deg); }
  100% { transform: translateY(0px) translateX(0px) rotateZ(360deg); }
}
@keyframes float-slow {
  0% { transform: translateY(0px) translateX(0px) rotateY(0deg) rotateX(0deg); }
  25% { transform: translateY(-15px) translateX(10px) rotateY(90deg) rotateX(45deg); }
  50% { transform: translateY(0px) translateX(20px) rotateY(180deg) rotateX(90deg); }
  75% { transform: translateY(15px) translateX(10px) rotateY(270deg) rotateX(135deg); }
  100% { transform: translateY(0px) translateX(0px) rotateY(360deg) rotateX(180deg); }
}
@keyframes float-reverse {
  0% { transform: translateY(0px) translateX(0px) rotateZ(0deg) scale(1); }
  25% { transform: translateY(10px) translateX(-5px) rotateZ(-90deg) scale(1.1); }
  50% { transform: translateY(0px) translateX(-10px) rotateZ(-180deg) scale(1); }
  75% { transform: translateY(-10px) translateX(-5px) rotateZ(-270deg) scale(0.9); }
  100% { transform: translateY(0px) translateX(0px) rotateZ(-360deg) scale(1); }
}
@keyframes float-3d {
  0% { transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(0deg) rotateY(0deg); }
  25% { transform: translateY(-20px) translateX(15px) translateZ(10px) rotateX(45deg) rotateY(90deg); }
  50% { transform: translateY(0px) translateX(30px) translateZ(0px) rotateX(90deg) rotateY(180deg); }
  75% { transform: translateY(20px) translateX(15px) translateZ(-10px) rotateX(135deg) rotateY(270deg); }
  100% { transform: translateY(0px) translateX(0px) translateZ(0px) rotateX(180deg) rotateY(360deg); }
}
@keyframes orbit {
  0% { transform: rotate(0deg) translateX(100px) rotate(0deg); }
  100% { transform: rotate(360deg) translateX(100px) rotate(-360deg); }
}
@keyframes orbit-reverse {
  0% { transform: rotate(0deg) translateX(150px) rotate(0deg); }
  100% { transform: rotate(-360deg) translateX(150px) rotate(360deg); }
}
@keyframes pulse-3d {
  0% { transform: scale3d(1, 1, 1) rotateY(0deg); }
  50% { transform: scale3d(1.2, 1.2, 1.2) rotateY(180deg); }
  100% { transform: scale3d(1, 1, 1) rotateY(360deg); }
}
@keyframes wave {
  0% { transform: translateY(0px) rotateX(0deg); }
  25% { transform: translateY(-15px) rotateX(45deg); }
  50% { transform: translateY(0px) rotateX(90deg); }
  75% { transform: translateY(15px) rotateX(135deg); }
  100% { transform: translateY(0px) rotateX(180deg); }
}
.animate-float { animation: float 6s ease-in-out infinite; }
.animate-float-slow { animation: float-slow 8s ease-in-out infinite; }
.animate-float-reverse { animation: float-reverse 7s ease-in-out infinite; }
.animate-float-3d { animation: float-3d 10s ease-in-out infinite; }
.animate-orbit { animation: orbit 15s linear infinite; }
.animate-orbit-reverse { animation: orbit-reverse 20s linear infinite; }
.animate-pulse-3d { animation: pulse-3d 4s ease-in-out infinite; }
.animate-wave { animation: wave 5s ease-in-out infinite; }
`

// Mock service data (replace with actual data import when available)
const serviceData = {
  serviceInfo: {
    title: "EV Cycle Advertising",
    subtitle: "Eco-friendly mobile advertising that reaches your audience",
    description:
      "Our electric cycle advertising platform combines sustainability with high visibility, delivering your message across urban areas with maximum impact.",
    videoUrl: "https://example.com/videos/demo.mp4",
    heroImage: "/placeholder.svg?height=400&width=800",
  },
  statistics: {
    totalCycles: "500",
    citiesCovered: 12,
    dailyImpressions: 50000,
    campaignsLaunched: 120,
    clientSatisfaction: 98,
  },
  features: [
    {
      id: "feature1",
      title: "Smart Routing",
      description: "AI-powered route optimization to maximize visibility in high-traffic areas.",
      icon: "route",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Increased impressions", "Strategic coverage", "Time optimization"],
    },
    {
      id: "feature2",
      title: "Real-time Tracking",
      description: "Monitor your campaign performance with our advanced tracking system.",
      icon: "monitor",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Live location updates", "Performance analytics", "Coverage reports"],
    },
    {
      id: "feature3",
      title: "Green Advertising",
      description: "Eco-friendly advertising solution with zero carbon emissions.",
      icon: "zap",
      image: "/placeholder.svg?height=200&width=300",
      benefits: ["Carbon neutral", "Sustainability reporting", "Green brand image"],
    },
  ],
  gallery: [
    {
      id: "gallery1",
      title: "Downtown Campaign",
      description: "High visibility advertising in the business district",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: "gallery2",
      title: "Festival Promotion",
      description: "Special event coverage with targeted routes",
      image: "/placeholder.svg?height=500&width=800",
    },
    {
      id: "gallery3",
      title: "University Outreach",
      description: "Connecting with the student demographic",
      image: "/placeholder.svg?height=500&width=800",
    },
  ],
  serviceAreas: [
    {
      id: "area1",
      city: "Mumbai",
      coverage: "85%",
      activeCycles: 150,
      dailyReach: 25000,
      image: "/placeholder.svg?height=150&width=300",
      zones: ["South Mumbai", "Bandra", "Andheri", "Powai"],
    },
    {
      id: "area2",
      city: "Pune",
      coverage: "75%",
      activeCycles: 120,
      dailyReach: 18000,
      image: "/placeholder.svg?height=150&width=300",
      zones: ["Koregaon Park", "Viman Nagar", "Hinjewadi", "Kothrud"],
    },
  ],
}

export default function EVCyclePage() {
  const [activeFeature, setActiveFeature] = useState(0)
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [selectedCity, setSelectedCity] = useState(0)
  const [currentGalleryImage, setCurrentGalleryImage] = useState(0)
  const [showImageView, setShowImageView] = useState(false)

  // Inject animation styles
  useEffect(() => {
    const styleElement = document.createElement("style")
    styleElement.textContent = floatAnimation
    document.head.appendChild(styleElement)

    return () => {
      document.head.removeChild(styleElement)
    }
  }, [])

  // Animation counters for statistics
  const totalCyclesCount = useCountUp(Number.parseInt(serviceData.statistics.totalCycles))
  const citiesCoveredCount = useCountUp(serviceData.statistics.citiesCovered)
  const dailyImpressionsCount = useCountUp(Math.floor(serviceData.statistics.dailyImpressions / 1000))
  const campaignsLaunchedCount = useCountUp(serviceData.statistics.campaignsLaunched)
  const clientSatisfactionCount = useCountUp(serviceData.statistics.clientSatisfaction)

  // Intersection Observer for triggering animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id === "statistics-section") {
            totalCyclesCount.startAnimation()
            citiesCoveredCount.startAnimation()
            dailyImpressionsCount.startAnimation()
            campaignsLaunchedCount.startAnimation()
            clientSatisfactionCount.startAnimation()
          }
        })
      },
      { threshold: 0.5 },
    )

    const statsSection = document.getElementById("statistics-section")
    if (statsSection) {
      observer.observe(statsSection)
    }

    return () => observer.disconnect()
  }, [])

  const getFeatureIcon = (iconName: string) => {
    const icons = {
      route: Route,
      clock: Clock,
      location: MapPin,
      zap: Zap,
      monitor: Monitor,
      analytics: BarChart3,
    }
    const IconComponent = icons[iconName as keyof typeof icons] || Route
    return <IconComponent className="w-6 h-6" />
  }

  const nextGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev + 1) % serviceData.gallery.length)
  }

  const prevGalleryImage = () => {
    setCurrentGalleryImage((prev) => (prev - 1 + serviceData.gallery.length) % serviceData.gallery.length)
  }

  return (
    <>
    <Head>
        <title>EV Cycle Advertising | Eco-Friendly, High-Impact Mobile Campaigns</title>
        <meta name="description" content="Promote your brand with eco-friendly EV cycle advertising. Reach urban audiences with smart routing, real-time tracking, and high-impact campaigns in cities like Mumbai and Pune. Sustainable, innovative, and measurable outdoor advertising." />
        <meta name="keywords" content="EV cycle advertising, electric cycle advertising, eco-friendly advertising, sustainable advertising, green advertising, mobile advertising, urban advertising, smart routing, AI-powered advertising, route optimization, high-traffic advertising, real-time tracking, campaign analytics, performance analytics, live location updates, coverage reports, carbon neutral advertising, zero emission advertising, sustainability reporting, green brand image, outdoor advertising, mobile billboard, city advertising, Mumbai advertising, Pune advertising, urban marketing, event promotion, festival advertising, university outreach, business district advertising, targeted advertising, brand visibility, high visibility campaigns, mobile campaigns, digital advertising, innovative advertising, advertising technology, advertising statistics, daily impressions, campaign management, advertising features, advertising benefits, advertising gallery, advertising service areas, advertising zones, active cycles, advertising reach, advertising coverage, advertising impact, advertising clients, advertising satisfaction, advertising results, advertising effectiveness, advertising performance, advertising solutions, advertising platform, advertising network, advertising strategy, advertising trends, advertising growth, advertising innovation, advertising engagement, advertising audience, advertising reach, advertising exposure, advertising impressions, advertising data, advertising insights, advertising reports, advertising measurement, advertising ROI, advertising metrics, advertising tools, advertising dashboard, advertising automation, advertising software, advertising apps, advertising vehicles, advertising fleets, advertising campaigns, advertising launches, advertising planning, advertising execution, advertising management, advertising optimization, advertising sustainability, advertising environment, advertising eco, advertising clean energy, advertising electric vehicles, advertising mobility, advertising smart cities, advertising urban mobility, advertising future, advertising India, advertising local, advertising regional" />
      </Head>
    <div className="min-h-screen bg-white text-gray-900">
      {" "}
      {/* Added pt-20 for navbar spacing */}
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 pt-[18vh]">
        {/* Enhanced 3D Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large floating gradient orbs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-blue-200/20 via-purple-200/15 to-pink-200/10 rounded-full blur-3xl animate-pulse-3d"></div>
          <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-emerald-200/15 via-teal-200/10 to-cyan-200/20 rounded-full blur-3xl animate-float-3d delay-1000"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-orange-200/10 via-red-200/15 to-rose-200/20 rounded-full blur-3xl animate-wave delay-2000"></div>

          {/* 3D geometric shapes */}
          <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-gradient-to-br from-blue-400/40 to-indigo-500/30 rounded-lg animate-float transform-gpu perspective-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-12 h-12 bg-gradient-to-br from-purple-400/30 to-pink-500/40 rounded-full animate-float-slow transform-gpu"></div>
          <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-gradient-to-br from-emerald-400/35 to-teal-500/25 rounded-lg animate-float-reverse transform-gpu"></div>
          <div className="absolute top-1/2 left-1/6 w-10 h-10 bg-gradient-to-br from-orange-400/30 to-red-500/35 rounded-full animate-orbit transform-gpu"></div>
          <div className="absolute bottom-1/3 right-1/6 w-14 h-14 bg-gradient-to-br from-cyan-400/25 to-blue-500/30 rounded-lg animate-orbit-reverse transform-gpu"></div>

          {/* Floating particles with 3D effects */}
          <div className="absolute top-20 right-40 w-3 h-3 bg-blue-400/40 rounded-full animate-float"></div>
          <div className="absolute top-60 left-20 w-4 h-4 bg-purple-400/35 rounded-full animate-float-slow delay-500"></div>
          <div className="absolute bottom-40 left-40 w-2 h-2 bg-emerald-400/45 rounded-full animate-float-reverse delay-1000"></div>
          <div className="absolute bottom-60 right-60 w-5 h-5 bg-pink-400/30 rounded-full animate-wave delay-1500"></div>

          {/* Enhanced gradient mesh background with multiple layers */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(147,51,234,0.1),transparent_70%),radial-gradient(ellipse_at_center,rgba(236,72,153,0.05),transparent_60%)] pointer-events-none"></div>
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,rgba(59,130,246,0.1),rgba(147,51,234,0.05),rgba(236,72,153,0.08),rgba(59,130,246,0.1))] pointer-events-none opacity-60"></div>

          {/* Moving gradient waves */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-blue-200/10 to-transparent transform -skew-y-12 animate-pulse"></div>
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-l from-transparent via-purple-200/10 to-transparent transform skew-y-12 animate-pulse delay-1000"></div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="inline-flex  items-center gap-2 bg-white/90 backdrop-blur-sm px-6 py-2 rounded-full border border-gray-200 shadow-lg mb-6 hover:shadow-xl hover:scale-105 transition-all duration-300">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-gray-700">Smart Mobile Advertising</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 py-4 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              {serviceData.serviceInfo.title}
            </h1>

            <p className="text-2xl md:text-3xl font-light text-blue-600 mb-4 italic hover:text-blue-700 transition-colors duration-300">
              &quot;{serviceData.serviceInfo.subtitle}&quot;
            </p>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed hover:text-gray-700 transition-colors duration-300">
              {serviceData.serviceInfo.description}
            </p>
          </div>

          {/* Hero Image/Video Section */}
          <div className="relative max-w-4xl mx-auto mb-12">
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500 group">
              {!isVideoPlaying && !showImageView ? (
                <div className="relative h-64 md:h-96 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="flex gap-4">
                    <button
                      onClick={() => setIsVideoPlaying(true)}
                      className="group relative overflow-hidden flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <PlayCircle className="relative z-10 w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-blue-700">
                        Watch Demo
                      </span>
                    </button>
                    <button
                      onClick={() => setShowImageView(true)}
                      className="group relative overflow-hidden flex items-center gap-4 bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full border border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      {/* Subtle hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <ImageIcon className="relative z-10 w-6 h-6 text-blue-600 group-hover:text-blue-700 group-hover:scale-110 transition-all duration-300" />
                      <span className="relative z-10 text-sm font-medium text-gray-800 group-hover:text-blue-700">
                        View Gallery
                      </span>
                    </button>
                  </div>
                </div>
              ) : isVideoPlaying ? (
                <div className="relative">
                  <video
                    className="w-full h-64 md:h-96 object-cover"
                    controls
                    autoPlay
                    src={serviceData.serviceInfo.videoUrl}
                  >
                    Your browser does not support the video tag.
                  </video>
                  <button
                    onClick={() => setIsVideoPlaying(false)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <div className="relative">
                  <Image
                    src={
                      serviceData.serviceInfo.heroImage ||
                      "/placeholder.svg?height=400&width=800" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg" ||
                      "/placeholder.svg"
                    }
                    alt="EV Cycle Hero"
                    width={800}
                    height={400}
                    className="w-full h-64 md:h-96 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <button
                    onClick={() => setShowImageView(false)}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-800 hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Enhanced CTA Button */}
          <div className="flex justify-center">
            <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white px-12 py-5 rounded-full font-bold text-xl transition-all duration-500 hover:shadow-xl hover:shadow-blue-500/30">
              {/* Animated shine effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

              {/* Button content */}
              <div className="relative flex items-center gap-3">
                <Zap className="w-6 h-6 group-hover:rotate-12 group-hover:scale-110 transition-all duration-300" />
                <span className="group-hover:tracking-wider transition-all duration-300">Start Your Campaign</span>
              </div>
            </button>
          </div>
        </div>
      </section>
      {/* Statistics Section with Animated Numbers */}
      <section
        id="statistics-section"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/30 relative overflow-hidden"
      >
        {/* 3D Background elements for statistics */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-20 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-indigo-400/15 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute bottom-10 right-20 w-40 h-40 bg-gradient-to-br from-purple-300/15 to-pink-400/20 rounded-full blur-2xl animate-float-reverse"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-br from-emerald-300/10 to-teal-400/15 rounded-full blur-3xl animate-pulse-3d"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:text-blue-700 transition-colors duration-300">
                {totalCyclesCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">Active Cycles</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-indigo-600 mb-2 group-hover:text-indigo-700 transition-colors duration-300">
                {citiesCoveredCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">Cities Covered</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-purple-600 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                {dailyImpressionsCount.count}K+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">Daily Impressions</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-emerald-600 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                {campaignsLaunchedCount.count}+
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">Campaigns Launched</div>
            </div>
            <div className="text-center group hover:scale-110 transition-all duration-300 hover:bg-white hover:shadow-xl rounded-2xl p-6">
              <div className="text-4xl font-bold text-rose-600 mb-2 group-hover:text-rose-700 transition-colors duration-300">
                {clientSatisfactionCount.count}%
              </div>
              <div className="text-gray-600 group-hover:text-gray-700">Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/20 relative overflow-hidden">
        {/* 3D Background elements for gallery */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-24 h-24 bg-gradient-to-br from-cyan-300/25 to-blue-400/20 rounded-lg animate-orbit transform-gpu"></div>
          <div className="absolute bottom-20 left-10 w-36 h-36 bg-gradient-to-br from-rose-300/20 to-pink-400/25 rounded-full animate-float-3d"></div>
          <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-gradient-to-br from-violet-300/15 to-purple-400/20 rounded-lg animate-wave"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              See It In Action
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Explore our mobile advertising solutions through real-world examples
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="relative bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-500 group">
              <Image
                src={
                  serviceData.gallery[currentGalleryImage].image ||
                  "/placeholder.svg?height=500&width=800" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg" ||
                  "/placeholder.svg"
                }
                alt={serviceData.gallery[currentGalleryImage].title}
                width={800}
                height={500}
                className="w-full h-96 object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Enhanced Navigation Arrows */}
              <button
                onClick={prevGalleryImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <ChevronLeft className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              </button>
              <button
                onClick={nextGalleryImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-125 hover:shadow-xl"
              >
                <ChevronRight className="w-6 h-6 text-gray-700 hover:text-blue-600 transition-colors duration-300" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">{serviceData.gallery[currentGalleryImage].title}</h3>
                <p className="text-white/90 text-sm">{serviceData.gallery[currentGalleryImage].description}</p>
              </div>
            </div>

            {/* Enhanced Gallery Thumbnails */}
            <div className="flex justify-center gap-2 mt-6">
              {serviceData.gallery.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentGalleryImage(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-150 ${
                    index === currentGalleryImage
                      ? "bg-blue-600 shadow-lg shadow-blue-600/50"
                      : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Maps & Route Planning Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-slate-50/80 to-zinc-50/60 relative overflow-hidden">
        {/* 3D Background elements for maps section */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_left,rgba(99,102,241,0.1),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(168,85,247,0.08),transparent_60%)]"></div>
          <div className="absolute top-40 left-40 w-28 h-28 bg-gradient-to-br from-indigo-300/20 to-blue-400/25 rounded-full animate-orbit-reverse"></div>
          <div className="absolute bottom-40 right-40 w-32 h-32 bg-gradient-to-br from-emerald-300/15 to-green-400/20 rounded-lg animate-float-3d"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              Smart Route Planning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Design custom routes and target prime locations with our advanced mapping technology
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
                  <Map className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Interactive Maps</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Visualize and customize your advertising routes with our interactive mapping interface.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Real-time traffic data
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Demographic overlays
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  POI integration
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl text-white">
                  <Navigation className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Custom Routes</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Create tailored routes that align with your campaign objectives and target audience.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Drag & drop planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Time-based scheduling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Route optimization
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl text-white">
                  <Target className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Prime Locations</h3>
              </div>
              <p className="text-gray-600 mb-4">
                Access our curated database of high-impact locations and premium advertising zones.
              </p>
              <ul className="space-y-2 text-sm text-gray-500">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Business districts
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Shopping centers
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  Event venues
                </li>
              </ul>
            </div>
          </div>

          {/* Map Interface Mockup */}
          <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
            <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
              <h3 className="text-sm font-bold text-gray-800">PCMC Cycle Routes</h3>
              <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-2xl"
            />

            {/* Route Overlay Indicators */}
            <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Main Routes</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Cycle Paths</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-xs text-gray-700">Commercial Areas</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-white via-indigo-50/40 to-blue-50/30 relative overflow-hidden">
        {/* 3D Background elements for features */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[conic-gradient(from_45deg_at_25%_25%,rgba(59,130,246,0.05),transparent_50%),conic-gradient(from_225deg_at_75%_75%,rgba(147,51,234,0.08),transparent_50%)]"></div>
          <div className="absolute top-32 right-32 w-20 h-20 bg-gradient-to-br from-blue-300/30 to-cyan-400/25 rounded-full animate-pulse-3d"></div>
          <div className="absolute bottom-32 left-32 w-24 h-24 bg-gradient-to-br from-purple-300/25 to-violet-400/30 rounded-lg animate-wave"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-indigo-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
              Advanced Features
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto hover:text-gray-700 transition-colors duration-300">
              Cutting-edge technology meets intelligent advertising solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceData.features.map((feature, index) => (
              <div
                key={feature.id}
                className="group bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 shadow-lg"
                onMouseEnter={() => setActiveFeature(index)}
              >
                {/* Feature Image */}
                <div className="mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={feature.image || "/placeholder.svg?height=200&width=300"}
                    alt={feature.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white">
                    {getFeatureIcon(feature.icon)}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">{feature.title}</h3>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">{feature.description}</p>

                <ul className="space-y-2">
                  {feature.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm text-gray-500">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Service Areas */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/50 to-purple-50/30 relative overflow-hidden">
        {/* 3D Background elements for service areas */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(236,72,153,0.08),transparent_60%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute top-20 left-1/4 w-16 h-16 bg-gradient-to-br from-rose-300/25 to-pink-400/30 rounded-full animate-orbit"></div>
          <div className="absolute bottom-20 right-1/4 w-28 h-28 bg-gradient-to-br from-teal-300/20 to-cyan-400/25 rounded-lg animate-float-reverse"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent hover:scale-105 transition-transform duration-500">
                Coverage Areas
              </h2>

              <div className="space-y-6">
                {serviceData.serviceAreas.map((area, index) => (
                  <div
                    key={area.id}
                    className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:scale-105 ${
                      selectedCity === index
                        ? "bg-blue-50 border-blue-300 shadow-lg"
                        : "bg-white border-gray-200 hover:shadow-xl shadow-lg"
                    }`}
                    onClick={() => setSelectedCity(index)}
                  >
                    {/* City Image */}
                    <div className="mb-4 overflow-hidden rounded-lg">
                      <Image
                        src={area.image || "/placeholder.svg?height=150&width=300"}
                        alt={area.city}
                        width={300}
                        height={150}
                        className="w-full h-32 object-cover"
                      />
                    </div>

                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-2xl font-bold text-gray-800">{area.city}</h3>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">{area.coverage}</div>
                        <div className="text-sm text-gray-500">Coverage</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="font-semibold text-indigo-600">{area.activeCycles}</div>
                        <div className="text-gray-500">Active Cycles</div>
                      </div>
                      <div>
                        <div className="font-semibold text-purple-600">{(area.dailyReach / 1000).toFixed(0)}K</div>
                        <div className="text-gray-500">Daily Reach</div>
                      </div>
                      <div>
                        <div className="font-semibold text-emerald-600">{area.zones.length}</div>
                        <div className="text-gray-500">Zones</div>
                      </div>
                    </div>

                    <div className="mt-4">
                      <div className="text-sm text-gray-500 mb-2">Zones:</div>
                      <div className="flex flex-wrap gap-2">
                        {area.zones.map((zone, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-medium"
                          >
                            {zone}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Route Visualization Placeholder */}
            <div className="h-96 bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-lg relative hover:scale-105 transition-all duration-300">
              <div className="absolute top-4 left-4 z-10 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-md">
                <h3 className="text-sm font-bold text-gray-800">PCMC Cycle Routes</h3>
                <p className="text-xs text-gray-600">Pimpri-Chinchwad, Pune</p>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60901.72659267158!2d73.73565!3d18.6298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9c6c6c6c6c6%3A0x6c6c6c6c6c6c6c6c!2sPimpri-Chinchwad%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl"
              />

              {/* Route Overlay Indicators */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-md">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Main Routes</span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Cycle Paths</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-xs text-gray-700">Commercial Areas</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white via-slate-50/60 to-gray-50/80 relative overflow-hidden">
        {/* 3D Background elements for CTA */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(99,102,241,0.1),transparent_70%),conic-gradient(from_0deg_at_50%_50%,rgba(147,51,234,0.05),rgba(59,130,246,0.08),rgba(236,72,153,0.06),rgba(147,51,234,0.05))]"></div>
          <div className="absolute top-10 left-10 w-20 h-20 bg-gradient-to-br from-blue-300/25 to-indigo-400/30 rounded-full animate-float-3d"></div>
          <div className="absolute bottom-10 right-10 w-24 h-24 bg-gradient-to-br from-purple-300/20 to-violet-400/25 rounded-lg animate-pulse-3d"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 border border-gray-200 rounded-3xl p-12 shadow-xl hover:shadow-2xl transition-all duration-500">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent">
              Ready to Move Forward?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join the mobile advertising revolution and reach your audience with precision and style.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="relative overflow-hidden group bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/30">
                {/* Animated shine effect */}
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">Launch Campaign</span>
                </div>
              </button>

              <button className="relative overflow-hidden group bg-white border-2 border-blue-600 text-blue-600 hover:text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-500 hover:shadow-lg">
                {/* Fill effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>

                <div className="relative flex items-center justify-center gap-3">
                  <Users className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                  <span className="group-hover:tracking-wider transition-all duration-300">Contact Sales</span>
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}


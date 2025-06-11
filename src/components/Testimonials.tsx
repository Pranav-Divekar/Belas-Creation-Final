
// "use client";

// import { Star } from "lucide-react";
// import { motion, useAnimation } from "framer-motion";
// import { useEffect, useState } from "react";

// const testimonials = [
//   {
//     id: 1,
//     quote: "Our ROI increased by 300% within 3 months. Phenomenal results!",
//     name: "Sarah Mitchell",
//     title: "Marketing Director",
//     company: "TechFlow",
//     rating: 5,
//     color: "from-blue-500 to-cyan-500",
//   },
//   {
//     id: 2,
//     quote: "Outstanding campaigns that resonated with our audience perfectly.",
//     name: "David Rodriguez",
//     title: "CEO",
//     company: "GreenLeaf",
//     rating: 5,
//     color: "from-emerald-500 to-teal-500",
//   },
//   {
//     id: 3,
//     quote: "Transformed our digital presence completely. Worth every penny!",
//     name: "Michael Chen",
//     title: "CTO",
//     company: "NexusTech",
//     rating: 5,
//     color: "from-purple-500 to-indigo-500",
//   },
//   {
//     id: 4,
//     quote:
//       "Their creative team brought our vision to life beyond expectations.",
//     name: "Jessica Wong",
//     title: "Brand Manager",
//     company: "LuxLiving",
//     rating: 4,
//     color: "from-pink-500 to-rose-500",
//   },
//   {
//     id: 5,
//     quote: "Data-driven insights helped us dominate our market segment.",
//     name: "Robert Kim",
//     title: "CMO",
//     company: "UrbanRetail",
//     rating: 5,
//     color: "from-orange-500 to-amber-500",
//   },
//   {
//     id: 6,
//     quote: "Scaled our startup to market leader in just 18 months. Incredible!",
//     name: "Emily Park",
//     title: "Founder",
//     company: "NextGen",
//     rating: 4,
//     color: "from-violet-500 to-purple-500",
//   },
// ];

// export default function Testimonials() {
//   const [isHovered, setIsHovered] = useState(false);
//   const topControls = useAnimation();
//   const bottomControls = useAnimation();

//   // Duplicate testimonials enough times to avoid gaps on large screens
//   const duplicatedTestimonials = [
//     ...testimonials,
//     ...testimonials,
//     ...testimonials,
//   ].map((t, i) => ({
//     ...t,
//     uniqueKey: `${t.id}-${i}`,
//   }));

//   // Start animation on mount and when hover ends
//   useEffect(() => {
//     if (!isHovered) {
//       topControls.start({
//         x: ["0%", "-100%"],
//         transition: {
//           duration: 30,
//           ease: "linear",
//           repeat: Infinity,
//         },
//       });
//       bottomControls.start({
//         x: ["-100%", "0%"],
//         transition: {
//           duration: 36,
//           ease: "linear",
//           repeat: Infinity,
//         },
//       });
//     }
//     // Stop animation on hover
//     else {
//       topControls.stop();
//       bottomControls.stop();
//     }
//   }, [isHovered, topControls, bottomControls]);

//   return (
//     <section className="py-10 sm:py-14 md:py-20 bg-gray-50 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
//         <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
//           Trusted by Industry Leaders
//         </h2>

//         {/* Top Marquee (Left to Right) */}
//         <div className="mb-6 sm:mb-8 overflow-hidden">
//           <motion.div
//             className="flex flex-nowrap min-w-full will-change-transform"
//             animate={topControls}
//             initial={{
//               x: "0%",
//             }}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//           >
//             {duplicatedTestimonials.map((testimonial) => (
//               <TestimonialCard
//                 key={`top-${testimonial.uniqueKey}`}
//                 {...testimonial}
//                 isHovered={isHovered}
//               />
//             ))}
//           </motion.div>
//         </div>

//         {/* Bottom Marquee (Right to Left) */}
//         <div className="overflow-hidden">
//           <motion.div
//             className="flex flex-nowrap min-w-full will-change-transform"
//             animate={bottomControls}
//             initial={{
//               x: "-100%",
//             }}
//             onHoverStart={() => setIsHovered(true)}
//             onHoverEnd={() => setIsHovered(false)}
//           >
//             {duplicatedTestimonials.map((testimonial) => (
//               <TestimonialCard
//                 key={`bottom-${testimonial.uniqueKey}`}
//                 {...testimonial}
//                 isHovered={isHovered}
//               />
//             ))}
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function TestimonialCard({
//   quote,
//   name,
//   title,
//   company,
//   rating,
//   color,
//   isHovered,
// }) {
//   return (
//     <div
//       className={`
//         flex-shrink-0
//         w-64 sm:w-80 md:w-96
//         mx-2 sm:mx-4
//         p-4 sm:p-6
//         bg-white rounded-lg border border-gray-200
//         shadow-sm transition-all duration-200
//         ${isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm"}
//       `}
//     >
//       <div className="flex mb-3 items-center">
//         {[...Array(5)].map((_, i) => (
//           <Star
//             key={i}
//             className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
//           />
//         ))}
//         <span
//           className={`ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}
//         >
//           {rating}.0
//         </span>
//       </div>
//       <p className="text-gray-600 italic mb-4">&quot;{quote}&quot;</p>
//       <div className="border-t border-gray-100 pt-3">
//         <h4 className="font-medium text-gray-900">{name}</h4>
//         <p className="text-sm text-gray-500">
//           {title}, {company}
//         </p>
//       </div>
//     </div>
//   );
// }

"use client"

import { Star } from "lucide-react"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"

// Define types for testimonial data
interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  company: string
  rating: number
  color: string
}

interface TestimonialWithKey extends Testimonial {
  uniqueKey: string
}

interface TestimonialCardProps extends Testimonial {
  isHovered: boolean
  uniqueKey?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Our ROI increased by 300% within 3 months. Phenomenal results!",
    name: "Sarah Mitchell",
    title: "Marketing Director",
    company: "TechFlow",
    rating: 5,
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    quote: "Outstanding campaigns that resonated with our audience perfectly.",
    name: "David Rodriguez",
    title: "CEO",
    company: "GreenLeaf",
    rating: 5,
    color: "from-emerald-500 to-teal-500",
  },
  {
    id: 3,
    quote: "Transformed our digital presence completely. Worth every penny!",
    name: "Michael Chen",
    title: "CTO",
    company: "NexusTech",
    rating: 5,
    color: "from-purple-500 to-indigo-500",
  },
  {
    id: 4,
    quote: "Their creative team brought our vision to life beyond expectations.",
    name: "Jessica Wong",
    title: "Brand Manager",
    company: "LuxLiving",
    rating: 4,
    color: "from-pink-500 to-rose-500",
  },
  {
    id: 5,
    quote: "Data-driven insights helped us dominate our market segment.",
    name: "Robert Kim",
    title: "CMO",
    company: "UrbanRetail",
    rating: 5,
    color: "from-orange-500 to-amber-500",
  },
  {
    id: 6,
    quote: "Scaled our startup to market leader in just 18 months. Incredible!",
    name: "Emily Park",
    title: "Founder",
    company: "NextGen",
    rating: 4,
    color: "from-violet-500 to-purple-500",
  },
]

export default function Testimonials() {
  const [isHovered, setIsHovered] = useState(false)
  const topControls = useAnimation()
  const bottomControls = useAnimation()

  // Duplicate testimonials enough times to avoid gaps on large screens
  const duplicatedTestimonials: TestimonialWithKey[] = [...testimonials, ...testimonials, ...testimonials].map(
    (t, i) => ({
      ...t,
      uniqueKey: `${t.id}-${i}`,
    }),
  )

  // Start animation on mount and when hover ends
  useEffect(() => {
    if (!isHovered) {
      topControls.start({
        x: ["0%", "-100%"],
        transition: {
          duration: 30,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
      bottomControls.start({
        x: ["-100%", "0%"],
        transition: {
          duration: 36,
          ease: "linear",
          repeat: Number.POSITIVE_INFINITY,
        },
      })
    }
    // Stop animation on hover
    else {
      topControls.stop()
      bottomControls.stop()
    }
  }, [isHovered, topControls, bottomControls])

  return (
    <section className="py-10 sm:py-14 md:py-20 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 md:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 sm:mb-12 text-gray-900">
          Trusted by Industry Leaders
        </h2>

        {/* Top Marquee (Left to Right) */}
        <div className="mb-6 sm:mb-8 overflow-hidden">
          <motion.div
            className="flex flex-nowrap min-w-full will-change-transform"
            animate={topControls}
            initial={{
              x: "0%",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`top-${testimonial.uniqueKey}`}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                rating={testimonial.rating}
                color={testimonial.color}
                id={testimonial.id}
                isHovered={isHovered}
              />
            ))}
          </motion.div>
        </div>

        {/* Bottom Marquee (Right to Left) */}
        <div className="overflow-hidden">
          <motion.div
            className="flex flex-nowrap min-w-full will-change-transform"
            animate={bottomControls}
            initial={{
              x: "-100%",
            }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
          >
            {duplicatedTestimonials.map((testimonial) => (
              <TestimonialCard
                key={`bottom-${testimonial.uniqueKey}`}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
                company={testimonial.company}
                rating={testimonial.rating}
                color={testimonial.color}
                id={testimonial.id}
                isHovered={isHovered}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ quote, name, title, company, rating, color, isHovered }: TestimonialCardProps) {
  return (
    <div
      className={`
        flex-shrink-0
        w-64 sm:w-80 md:w-96
        mx-2 sm:mx-4
        p-4 sm:p-6
        bg-white rounded-lg border border-gray-200
        shadow-sm transition-all duration-200
        ${isHovered ? "shadow-lg scale-[1.02]" : "shadow-sm"}
      `}
    >
      <div className="flex mb-3 items-center">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} />
        ))}
        <span className={`ml-2 px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${color} text-white`}>
          {rating}.0
        </span>
      </div>
      <p className="text-gray-600 italic mb-4">&quot;{quote}&quot;</p>
      <div className="border-t border-gray-100 pt-3">
        <h4 className="font-medium text-gray-900">{name}</h4>
        <p className="text-sm text-gray-500">
          {title}, {company}
        </p>
      </div>
    </div>
  )
}

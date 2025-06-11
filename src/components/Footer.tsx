// import Link from "next/link"
// import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

// function Footer() {
//   return (
//     <footer className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-gray-700 py-16 border-t border-blue-200">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
//         {/* About Us */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
//             <h2 className="text-blue-800 text-xl font-bold">About Belas</h2>
//           </div>
//           <p className="text-gray-600 leading-relaxed">
//             Belas is a leading service provider specializing in Hoardings, EV advertisement, and comprehensive digital
//             marketing services. We help businesses grow with innovative advertising and design solutions.
//           </p>
//           <div className="flex space-x-4 pt-2">
//             <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
//               <Facebook size={20} />
//               <span className="sr-only">Facebook</span>
//             </Link>
//             <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
//               <Instagram size={20} />
//               <span className="sr-only">Instagram</span>
//             </Link>
//             <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
//               <Twitter size={20} />
//               <span className="sr-only">Twitter</span>
//             </Link>
            
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
//             <h2 className="text-blue-800 text-xl font-bold">Quick Links</h2>
//           </div>
//           <ul className="space-y-3">
//             {["Home", "Hoardings", "EV", "Contact Us"].map((item, index) => {
//               const getHref = (linkItem) => {
//                 switch (linkItem) {
//                   case "Home":
//                     return "/"
//                   case "Hoardings":
//                     return "/hoardings"
//                   case "EV":
//                     return "/EV"
//                   case "Contact Us":
//                     return "/contact"
//                   default:
//                     return "/"
//                 }
//               }

//               return (
//                 <li key={index} className="group">
//                   <Link
//                     href={getHref(item)}
//                     className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
//                   >
//                     <span className="h-1 w-0 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
//                     {item}
//                   </Link>
//                 </li>
//               )
//             })}
//           </ul>
//         </div>

//         {/* Services */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
//             <h2 className="text-blue-800 text-xl font-bold">Our Services</h2>
//           </div>
//           <ul className="space-y-3">
//             {["Digital Marketing", "Website Designing", "Social Media Management", "Flex Designing"].map(
//               (service, index) => (
//                 <li key={index} className="group">
//                   <Link
//                     href="/Services"
//                     className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
//                   >
//                     <span className="h-1 w-0 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
//                     {service}
//                   </Link>
//                 </li>
//               ),
//             )}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div className="space-y-4">
//           <div className="flex items-center space-x-2">
//             <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
//             <h2 className="text-blue-800 text-xl font-bold">Contact Us</h2>
//           </div>
//           <ul className="space-y-3">
//             <li className="flex items-start space-x-3">
//               <MapPin className="text-blue-600 h-5 w-5 mt-0.5" />
//               <span className="text-gray-600">
//                 New Delhi, India
//                 <br />
//                 Delhi 110001
//               </span>
//             </li>
//             <li className="flex items-center space-x-3">
//               <Mail className="text-blue-600 h-5 w-5" />
//               <a
//                 href="mailto:info@belas.com"
//                 className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
//               >
//                 info@belas.com
//               </a>
//             </li>
//             <li className="flex items-center space-x-3">
//               <Phone className="text-blue-600 h-5 w-5" />
//               <a href="tel:+911234567890" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
//                 +91 12345 67890
//               </a>
//             </li>
//           </ul>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
//         <div className="pt-8 border-t border-blue-200 flex flex-col sm:flex-row justify-between items-center">
//           <p className="text-gray-500">© {new Date().getFullYear()} Belas. All rights reserved.</p>
//           <div className="flex space-x-6 mt-4 sm:mt-0">
//             <Link href="/contact" className="text-gray-500 hover:text-blue-700 text-sm">
//               Privacy Policy
//             </Link>
//             <Link href="/contact" className="text-gray-500 hover:text-blue-700 text-sm">
//               Terms of Service
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Decorative elements */}
//       <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
//         <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
//           <circle cx="100" cy="100" r="100" fill="currentColor" className="text-blue-500" />
//         </svg>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

function Footer() {
  // Define the function outside the map with proper typing
  const getHref = (linkItem: string): string => {
    switch (linkItem) {
      case "Home":
        return "/"
      case "Hoardings":
        return "/hoardings"
      case "EV":
        return "/EV"
      case "Contact Us":
        return "/contact"
      default:
        return "/"
    }
  }

  return (
    <footer className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 text-gray-700 py-16 border-t border-blue-200 relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4 sm:px-6 lg:px-8">
        {/* About Us */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-blue-800 text-xl font-bold">About Belas</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Belas is a leading service provider specializing in Hoardings, EV advertisement, and comprehensive digital
            marketing services. We help businesses grow with innovative advertising and design solutions.
          </p>
          <div className="flex space-x-4 pt-2">
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <Facebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <Instagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
              <Twitter size={20} />
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-blue-800 text-xl font-bold">Quick Links</h2>
          </div>
          <ul className="space-y-3">
            {["Home", "Hoardings", "EV", "Contact Us"].map((item, index) => (
              <li key={index} className="group">
                <Link
                  href={getHref(item)}
                  className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
                >
                  <span className="h-1 w-0 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-blue-800 text-xl font-bold">Our Services</h2>
          </div>
          <ul className="space-y-3">
            {["Digital Marketing", "Website Designing", "Social Media Management", "Flex Designing"].map(
              (service, index) => (
                <li key={index} className="group">
                  <Link
                    href="/Services"
                    className="flex items-center text-gray-600 hover:text-blue-700 transition-all duration-300 group-hover:translate-x-1"
                  >
                    <span className="h-1 w-0 bg-blue-500 mr-0 group-hover:w-3 group-hover:mr-2 transition-all duration-300"></span>
                    {service}
                  </Link>
                </li>
              ),
            )}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-1 bg-blue-500 rounded-full"></div>
            <h2 className="text-blue-800 text-xl font-bold">Contact Us</h2>
          </div>
          <ul className="space-y-3">
            <li className="flex items-start space-x-3">
              <MapPin className="text-blue-600 h-5 w-5 mt-0.5" />
              <span className="text-gray-600">
                New Delhi, India
                <br />
                Delhi 110001
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Mail className="text-blue-600 h-5 w-5" />
              <a
                href="mailto:info@belas.com"
                className="text-gray-600 hover:text-blue-700 transition-colors duration-300"
              >
                info@belas.com
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Phone className="text-blue-600 h-5 w-5" />
              <a href="tel:+911234567890" className="text-gray-600 hover:text-blue-700 transition-colors duration-300">
                +91 12345 67890
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="pt-8 border-t border-blue-200 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500">© {new Date().getFullYear()} Belas. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 sm:mt-0">
            <Link href="/contact" className="text-gray-500 hover:text-blue-700 text-sm">
              Privacy Policy
            </Link>
            <Link href="/contact" className="text-gray-500 hover:text-blue-700 text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute right-0 bottom-0 opacity-5 pointer-events-none">
        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="100" fill="currentColor" className="text-blue-500" />
        </svg>
      </div>
    </footer>
  )
}

export default Footer

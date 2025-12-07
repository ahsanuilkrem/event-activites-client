// import Link from "next/link";


// function PublicFooter() {
//   return (
//     <footer className="border-t bg-background">
//       <div className="container mx-auto px-4 py-8">
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//           <div>
//             <h3 className="font-bold mb-2">EventCommunity</h3>
//             <p className="text-sm text-muted-foreground">Connecting people through real-world experiences. Join us and start exploring your city today.</p>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Discover</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Upcoming Events</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Popular Groups</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Cities</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Online Events</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Company</h3>
//             <ul className="space-y-2 text-sm">
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">About Us</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Careers</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Blog</Link></li>
//               <li><Link href="#" className="text-muted-foreground hover:text-foreground">Contact</Link></li>
//             </ul>
//           </div>
//           <div>
//             <h3 className="font-semibold mb-2">Stay Updated</h3>
//             <p className="text-sm text-muted-foreground">
//               Subscribe to our newsletter for the latest events.<br />
//               ahsanulkarim429@gmail.com
//             </p>
//           </div>
//         </div>
//         <div className="mt-8 border-t pt-4 text-center text-sm text-muted-foreground">
//           &copy; {new Date().getFullYear()} © 2024 Event Community. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }
// export default PublicFooter;

import { CalendarHeart,  Twitter, Facebook, InstagramIcon } from 'lucide-react'
export function PublicFooter() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-[#FF6B6B] p-2 rounded-xl text-white">
                <CalendarHeart size={20} />
              </div>
              <span className="text-xl font-bold tracking-tight">
                Event<span className="text-[#FF6B6B]">Community</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Connecting people through real-world experiences. Join us and
              start exploring your city today.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Discover</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Upcoming Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Popular Groups
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Cities
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Online Events
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#FF6B6B] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-sm text-gray-400 mb-4">
              Subscribe to our newsletter for the latest events.
            </p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-sm text-white focus:outline-none focus:border-[#FF6B6B]"
              />
              <button className="bg-[#FF6B6B] text-white font-medium py-2 rounded-lg hover:bg-[#FF5252] transition-colors text-sm">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2024 Event Community. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

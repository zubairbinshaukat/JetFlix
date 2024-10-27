import './globals.css'
import Navbar from '@/components/Navbar'
import Splash from '@/components/Splash'
import MobileNavbar from '@/components/MobileNavbar'
import Modal from './_components/Modal'
export const metadata = {
  title: 'Nazara',
  description: 'A Movies and Web Series Streaming App!',
  manifest:'/manifest.json'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`custom-scrollbar cool-bg  antialiased`}
      >
        {/* <body
        className={`custom-scrollbar bg-[url("https://images.unsplash.com/photo-1548320605-e74e368ff59c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGRhcmslMjBmb3Jlc3R8ZW58MHx8MHx8fDA%3D")]
        dark:bg-[url("https://images.pexels.com/photos/716834/pexels-photo-716834.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")] 
        bg-no-repeat bg-cover antialiased`}
      > */}
        <div className="w-full bg-white/10 backdrop-filter backdrop-blur-2xl backdrop-contrast-25 h-full">
          <div className="max-w-[1300px] mx-auto">
            {/* <Splash /> */}
            <Modal/>
            <Navbar />
            {/* <MobileNavbar/> */}
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}

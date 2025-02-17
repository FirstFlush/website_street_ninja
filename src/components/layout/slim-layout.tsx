import Image from 'next/image'
import backgroundImage from '@/images/red-abstract.jpg'
import backgroundPattern from '@/images/white-abstract.jpg'

export function SlimLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="relative flex min-h-full shrink-0 justify-center md:px-12 lg:px-0">
        {/* Main content */}
        <div className="relative z-10 flex flex-1 flex-col px-4 py-10 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>

        {/* Background container */}
        {/* <div className="hidden sm:contents lg:relative lg:block lg:flex-1"> */}
        <div className="hidden lg:relative lg:block lg:flex-1">
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center" 
            style={{ backgroundImage: `url(${backgroundPattern.src})` }} 
          />
          <Image
            className="absolute inset-0 h-full w-full object-cover mix-blend-multiply opacity-80"
            src={backgroundPattern}
            alt=""
            unoptimized
          />
        </div>
      </div>
    </>
  )
}

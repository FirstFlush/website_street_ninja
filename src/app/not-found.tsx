import { Button } from "@/components/ui/Button"
import { ArrowRightIcon } from 'lucide-react';
import SectionHeader from "@/components/layout/section-header";
import PageWrapper from "@/components/layout/page-wrap";

export default function NotFound() {
  return (
    <PageWrapper bgImage="/images/bg-abstract-white3.webp" className="bg-cover min-h-full bg-no-repeat">
      <div className="grid min-h-full sm:place-items-center px-6 py-44 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-xl font-semibold text-primary-dark-10 glitch">404</p>
          <SectionHeader 
            title="Page not found" 
            subtitle="Sorry, we couldn’t find the page you’re looking for."
          />
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button
              href="/"
              color="primary"
            >
              Go back home
            </Button>
            <Button
              href="/try-it-out"
              variant="outline"
              className="group"
            >
              <span className="mr-1">Try it out</span>
              <ArrowRightIcon className="w-4 h-4 group-hover:text-primary-dark-10 transition-colors duration-300"/>
            </Button>
          </div>
        </div>
    </div>
    </PageWrapper>
  )
}



// import Link from 'next/link'

// import { Button } from '@/components/ui/Button'
// import Logo from '@/components/logo'
// import { SlimLayout } from '@/components/layout/slim-layout'

// export default function NotFound() {
//   return (
//     <SlimLayout>
//       <div className="flex">
//         <Link href="/" aria-label="Home">
//           <Logo className="h-10 w-auto" />
//         </Link>
//       </div>
//       <p className="mt-20 text-sm font-medium text-gray-700">404</p>
//       <h1 className="mt-3 text-lg font-semibold text-gray-900">
//         Page not found
//       </h1>
//       <p className="mt-3 text-sm text-gray-700">
//         Sorry, we couldn’t find the page you’re looking for.
//       </p>
//       <Button href="/" className="mt-10">
//         Go back home
//       </Button>
//     </SlimLayout>
//   )
// }

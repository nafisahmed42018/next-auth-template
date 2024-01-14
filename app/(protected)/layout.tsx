// import { Navbar } from './_components/navbar'

import { Navbar } from "./_components/Navbar"

interface ProtectedLayoutProps {
  children: React.ReactNode
}

const ProtectedLayout = ({ children }: ProtectedLayoutProps) => {
  return (
    <div className="h-full w-full flex flex-col gap-y-10 items-center justify-center bg-primaryGradient from-sky-400 to-blue-800">
      <Navbar />
      {children}
    </div>
  )
}

export default ProtectedLayout

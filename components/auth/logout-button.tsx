'use client'

import { logout } from '@/actions/logout'

interface LogoutButtonProps {
  children?: React.ReactNode
}

export const LogoutButton = ({ children }: LogoutButtonProps) => {
  const onLogout = () => {
    logout()
  }
  return (
    <span onClick={onLogout} className="cursor-pointer">
      {children}
    </span>
  )
}

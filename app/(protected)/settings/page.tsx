'use client'
import { logout } from '@/actions/logout'
import { useCurrentUser } from '@/hooks/use-current-user'
import { signOut } from 'next-auth/react'

const SettingsPage = () => {
  const session = useCurrentUser()

  const signOff = () => {
    signOut()
  }
  return (
    <div>

      
        <button onClick={signOff} type="submit">
          Sign Out
        </button>
      
    </div>
  )
}

export default SettingsPage

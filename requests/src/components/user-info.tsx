import useUser from '../hooks/use-user'
import type { User } from '../models/user'
import { useEffect } from 'react'

export default function UserInfo() {
  const { user, requestStatus, fetchUsers } = useUser()

  if (requestStatus === 'loading') {
    return <div>Loading...</div>
  }

  useEffect(() => {
    fetchUsers('JohnDoe')
  }, [fetchUsers])

  return <ul>
    <li>
       <span>{user.name}</span>
      <span>{user.email}</span>
    </li>
  </ul>
}
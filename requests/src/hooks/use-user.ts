import React, { useState } from 'react'
import type { User } from '../models/user'
import { fetcher } from '../helpers/api'

export default function useUser() {
  const [user, setUser] = useState<User | null>(null)
  const [requestStatus, setRequestStatus] = useState<('idle' | 'loading' | 'saving')>('idle')


  const fetchUsers = React.useCallback(async (usename: string) => {
    try {
      setRequestStatus('loading')
      const data = await fetcher(`users/${usename}`)
      console.log(data)
      setUser(data.filter((user: User) => user.name === usename))
    } catch (error) {
      setRequestStatus('error')
      console.log(error)
    } finally {
      setRequestStatus('idle')
    }
  }, [])

  return { user, requestStatus, fetchUsers }
}
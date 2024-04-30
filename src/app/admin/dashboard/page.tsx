'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

export default function DashboardPage() {
  const { data: session } = useSession()
  const router = useRouter()
  
  useEffect(() => {
    if (!session) {
      router.push('/login')
    }
  })

  return (
    <div>
        s
    </div>
  )
}

import SecondFooter from '@/components/layouts/SecondFooter'
import ItemContact from '@/components/organism/Contact/Item'
import SecondHero from '@/components/organism/SecondHero'
import React from 'react'

export default function ContactPage() {
  return (
    <div>
        <SecondHero page='Contact' />

        <ItemContact />

        <SecondFooter />
    </div>
  )
}

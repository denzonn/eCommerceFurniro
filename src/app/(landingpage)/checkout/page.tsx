import SecondFooter from '@/components/layouts/SecondFooter'
import BillingDetail from '@/components/organism/Checkout/BillingDetail'
import SecondHero from '@/components/organism/SecondHero'
import React from 'react'

export default function CheckoutPage() {
  return (
    <div>
        <SecondHero page='Checkout' />

        <BillingDetail />

        <SecondFooter />
    </div>
  )
}

import SecondFooter from '@/components/layouts/SecondFooter'
import Item from '@/components/organism/Comparison/Item'
import SecondHero from '@/components/organism/SecondHero'
import React from 'react'

export default function ComparisonPage() {
  return (
    <div>
        <SecondHero page='Comparison'/>

        <Item />

        <SecondFooter />
    </div>
  )
}

import SecondFooter from '@/components/layouts/SecondFooter'
import SecondHero from '@/components/organism/SecondHero'
import Filter from '@/components/organism/Shop/Filter'
import ProductView from '@/components/organism/Shop/ProductsView'
import React from 'react'

export default function ShopPage() {
  return (
    <div>
        <SecondHero page='Shop'/>

        <Filter />

        <ProductView />

        <SecondFooter/>
    </div>
  )
}

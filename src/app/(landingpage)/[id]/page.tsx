import AddCart from '@/components/organism/DetailProduct/AddCart'
import BreadCrumb from '@/components/organism/DetailProduct/Breadcrumb'
import RelatedProducts from '@/components/organism/DetailProduct/RelatedProducts'
import React from 'react'

export default function DetailProductPage() {
  return (
    <div>
        <BreadCrumb />

        <AddCart />

        <RelatedProducts />
    </div>
  )
}

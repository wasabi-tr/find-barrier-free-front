import { Factory } from '@/app/_common/types'
import React, { FC } from 'react'

type Props = {
  factory: Factory
}

const FactoryItem: FC<Props> = ({ factory }) => {
  console.log(factory)

  return <div>FactoryItem</div>
}

export default FactoryItem

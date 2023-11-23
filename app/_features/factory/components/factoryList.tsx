import React, { FC } from 'react'
import { getAllFactory } from '../api'
import FactoryItem from './factoryItem'

const FactoryList: FC = async () => {
  const factories = await getAllFactory()

  return (
    <ul>
      {factories?.map((factory) => (
        <FactoryItem key={factory.id} factory={factory} />
      ))}
    </ul>
  )
}

export default FactoryList
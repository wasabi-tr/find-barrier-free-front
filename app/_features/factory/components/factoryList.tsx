import React, { FC } from 'react'
import { getAllFactory } from '../api'
import FactoryItem from './factoryItem'

const FactoryList = async () => {
  const factories = await getAllFactory()

  return (
    <>
      <ul className="grid gap-4">
        {factories?.map((factory) => (
          <FactoryItem key={factory.id} factory={factory} />
        ))}
      </ul>
    </>
  )
}
export default FactoryList

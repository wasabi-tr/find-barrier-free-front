import React, { FC } from 'react'
import FactoryItem from './factoryItem'
import { getAllFactory } from '../api/getAllFactory'

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

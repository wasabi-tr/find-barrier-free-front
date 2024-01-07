import React, { FC } from 'react'
import FactoryItem from './factoryItem'
import { getAllFactory } from '../api/getAllFactory'
import { filterFactories } from './functional/filterFactories'

type Props = {
  prefecture: string | null
  purpose: string | null
  free: string | null
  features: string[] | null
}

const FactoryList = async ({ searchParams }: { searchParams: Props }) => {
  const { prefecture, purpose, free, features } = searchParams
  const factories = await getAllFactory()

  /* 検索されたときに出力する施設情報 */
  let searchResultFactories
  if (prefecture || purpose || free || features) {
    searchResultFactories = filterFactories({ factories, searchParams })
  }

  return (
    <>
      <ul className="grid gap-4">
        {searchResultFactories
          ? searchResultFactories.map((factory) => (
              <FactoryItem key={factory.id} factory={factory} />
            ))
          : factories?.map((factory) => (
              <FactoryItem key={factory.id} factory={factory} />
            ))}
      </ul>
    </>
  )
}
export default FactoryList

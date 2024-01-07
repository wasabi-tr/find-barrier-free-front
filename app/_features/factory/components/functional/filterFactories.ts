import { Factory } from '@/app/_common/types'

type Props = {
  factories: Factory[]
  searchParams: {
    prefecture: string | null
    purpose: string | null
    free: string | null
    features: string[] | null
  }
}
export const filterFactories = ({ factories, searchParams }: Props) => {
  const { prefecture, purpose, free, features } = searchParams

  return factories.filter((factory) => {
    const matchesPrefecture = prefecture
      ? factory.prefecture.slug.includes(prefecture)
      : true
    const matchesPurpose = factory.genres.some(
      (genre) => genre.genre.slug === purpose
    )
    const matchesFeatures = features
      ? features.length === 0
        ? true
        : factory.features.some((feature) =>
            features.includes(feature.feature.slug)
          )
      : true
    const matchesFree = free ? factory.name.includes(free) : true
    return matchesPrefecture && matchesPurpose && matchesFeatures && matchesFree
  })
}

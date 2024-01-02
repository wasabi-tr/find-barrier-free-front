import { Factory } from '@/app/_common/types'

type Props = {
  factories: Factory[]
  searchParams: {
    area: string | null
    purpose: string | null
    free: string | null
    features: string[] | null
  }
}
export const filterFactories = ({ factories, searchParams }: Props) => {
  const { area, purpose, free, features } = searchParams

  return factories.filter((factory) => {
    const matchesArea = area ? factory.prefecture.slug.includes(area) : true
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
    return matchesArea && matchesPurpose && matchesFeatures && matchesFree
  })
}

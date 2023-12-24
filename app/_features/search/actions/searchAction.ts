import { Factory } from '@/app/_common/types'

type State = { resultFactories: Factory[] }
export const searchAction = async (
  prevState: State,
  formData: FormData
): Promise<State> => {
  const res = await fetch('/api/factory/')
  const factories: Factory[] = await res.json()

  const area = formData.get('area') as string
  const purpose = formData.get('purpose') as string
  const free = formData.get('free') as string
  const features = formData.getAll('features') as string[]

  const filterFactories = () => {
    return factories.filter((factory) => {
      const matchesArea = factory.prefecture.includes(area)
      const matchesPurpose = factory.genres.some(
        (genre) => genre.genre.name === purpose
      )
      const matchesFeatures =
        features.length === 0
          ? true
          : factory.features.some((feature) =>
              features.includes(feature.feature.name)
            )
      const matchesFree = factory.name.includes(free)
      return matchesArea && matchesPurpose && matchesFeatures && matchesFree
    })
  }
  const resultFactories = filterFactories()
  return { resultFactories }
}

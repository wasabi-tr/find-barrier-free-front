export type User = {
  id: string
  slug: string
  createdAt: string
  updatedAt: string
  email: string
  nickName: string
  description: string
  avatarUrl: string
}

export type Review = {
  id: string
  createdAt: string
  updatedAt: string
  title: string
  comment: string
  userId: string
  imageUrl: string[]
  user: User
  factoryId: string
  factory: Factory
}

export type Factory = {
  userId: string
  id: string
  createdAt: string
  updatedAt: string
  title: string
  description: string
  name: string
  zipcode: string
  prefecture: string
  city: string
  addressDetail: string
  lat: number
  lng: number
  tel?: string
  businessHours?: string
  holidays?: string
  siteUrl?: string
  imageUrl: string[]
  reviews: Review[]
  favoritedBy: Favorite[]
  genres: GenreToFactory[]
  features: FactoryFeature[]
}
export type Genre = {
  id: string
  name: string
}

export type Feature = {
  id: string
  name: string
}

export type GenreToFactory = {
  genreId: string
  factoryId: string
  genre: Genre
  // factory: Factory
}

export type FactoryFeature = {
  featureId: string
  factoryId: string
  feature: Feature
  // factory: Factory
}

export type Favorite = {
  userId: string
  user: User
  factoryId: string
  factory: Factory
}

export type Auth = {
  email: string
  password: string
}

export type EditedFactory = {
  id: string
  name: string
  title: string
  description: string
  zipcode: string
  prefecture: string
  city: string
  addressDetail: string
  tel?: string
  businessHours?: string
  holidays?: string
  siteUrl?: string
  imageUrl?: (string | undefined)[]
  genreIds?: string[]
  featureIds?: string[]
}

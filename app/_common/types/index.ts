export type User = {
  id: string
  createdAt: string
  updatedAt: string
  email: string
  hashedPassword: string
  nickName: string
  description: string
  avatarUrl: string
  reviews: Review[]
  favorites: Favorite[]
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
  id: string
  createdAt: string
  updatedAt: string
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
  factoryToAccessibilityFeature: FactoryToAccessibilityFeature[]
}
export type Genre = {
  id: string
  name: string
  factories: GenreToFactory[]
}

export type AccessibilityFeature = {
  id: string
  name: string
  factories: FactoryToAccessibilityFeature[]
}

export type GenreToFactory = {
  genreId: string
  genre: Genre
  factoryId: string
  factory: Factory
}

export type FactoryToAccessibilityFeature = {
  featureId: string
  feature: AccessibilityFeature
  factoryId: string
  factory: Factory
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

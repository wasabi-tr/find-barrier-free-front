import { Favorite } from '@/app/_common/types'
import FactoryItem from '@/app/_features/factory/components/factoryItem'
import { getAllFavoriteByUserId } from '@/app/_features/favorite/api'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'

const DashboardFavorite = async () => {
  const session = await getServerSession(options)
  const userId = session?.user.id
  const favoriteFactories = await getAllFavoriteByUserId(userId)

  return (
    <ul className="grid gap-4">
      {favoriteFactories?.map((favoriteFactory: Favorite) => (
        <FactoryItem
          key={favoriteFactory.factory.id}
          factory={favoriteFactory.factory}
        />
      ))}
    </ul>
  )
}

export default DashboardFavorite

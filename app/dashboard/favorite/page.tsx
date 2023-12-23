import { Favorite } from '@/app/_common/types'
import FactoryItem from '@/app/_features/factory/components/factoryItem'
import { getAllFavoriteByUserId } from '@/app/_features/favorite/api'
import { options } from '@/app/next-auth'
import { getServerSession } from 'next-auth'

const DashboardFavorite = async () => {
  const session = await getServerSession(options)
  const userId = session?.user.id
  const favoriteFactories = await getAllFavoriteByUserId(userId)

  return favoriteFactories && favoriteFactories.length > 0 ? (
    <ul className="grid gap-4">
      {favoriteFactories?.map((favoriteFactory: Favorite) => (
        <FactoryItem
          key={favoriteFactory.factory.id}
          factory={favoriteFactory.factory}
        />
      ))}
    </ul>
  ) : (
    <p className="text-center mt-12">
      お気に入りに登録されている施設はありません。
    </p>
  )
}

export default DashboardFavorite

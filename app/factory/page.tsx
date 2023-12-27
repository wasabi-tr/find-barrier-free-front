import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Container from '../_components/layouts/container'
import FeaturesCheckBox from '../_components/ui-parts/checkBox/featuresCheckBox'
import { AreaSelector } from '../_components/ui-parts/selector/AreaSelector'
import { PurposeSelector } from '../_components/ui-parts/selector/GenreSelector'
import TextField from '../_components/ui-parts/textField'
import FactoryList from '../_features/factory/components/factoryList'
import SearchBox from '../_features/search/components/searchBox'

type Props = {
  area: string | null
  purpose: string | null
  free: string | null
  features: string[] | null
}
const Factory = async ({ searchParams }: { searchParams: Props }) => {
  const { area, purpose, free, features } = searchParams
  if (area || purpose || free || features) {
    console.log('あるい')
  }

  return (
    <div className="bg-color-main-50">
      <Container>
        <div className="flex items-start justify-center gap-8 py-20  sm:flex-col">
          <aside className="flex-shrink-0 basis-[352px]  mx-auto sm:w-full sm:basis-0">
            <SearchBox>
              <AreaSelector />
              <PurposeSelector />
              <TextField />
              <FeaturesCheckBox />
              <div>
                {/* クリックされたらクエリパラメータを付与して */}
                <button className="flex items-center gap-3 justify-center w-full py-5 px-8 rounded-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
                  検索
                  <span>
                    <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                  </span>
                </button>
              </div>
            </SearchBox>
          </aside>
          <div className="flex-1">
            <FactoryList />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Factory

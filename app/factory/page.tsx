import Container from '../_components/layouts/container'
import SearchBox from '../_components/ui-element/searchBox'
import { AreaSelector } from '../_components/ui-parts/selector/AreaSelector'
import { PurposeSelector } from '../_components/ui-parts/selector/GenreSelector'
import { getAllFactory } from '../_features/factory/api'

const Factory = async () => {
  // console.log(factory)

  return (
    <Container>
      <div className="flex gap-9 py-8">
        <aside className="w-1/3 min-w-[407px] shadow-md rounded-lg p-10">
          <SearchBox />
        </aside>
        <div className="flex-"></div>
      </div>
    </Container>
  )
}

export default Factory

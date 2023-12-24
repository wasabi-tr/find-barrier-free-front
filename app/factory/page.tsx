import Container from '../_components/layouts/container'
import FactoryList from '../_features/factory/components/factoryList'
import SearchBox from '../_features/search/components/searchBox'

const Factory = async () => {
  return (
    <Container>
      <div className="flex items-start justify-center gap-8 py-20  sm:flex-col">
        <aside className="flex-shrink-0 basis-[352px]  mx-auto sm:w-full sm:basis-0">
          <SearchBox />
        </aside>
        <div className="flex-1">
          <FactoryList />
        </div>
      </div>
    </Container>
  )
}

export default Factory

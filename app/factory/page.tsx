import Container from '../_components/layouts/container'
import SearchBox from '../_components/ui-element/searchBox'
import FactoryList from '../_features/factory/components/factoryList'

const Factory = async () => {
  return (
    <Container>
      <div className="flex items-start justify-center gap-8 py-8  sm:flex-col">
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

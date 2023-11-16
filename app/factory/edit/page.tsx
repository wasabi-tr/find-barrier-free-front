import Container from '@/app/_components/layouts/container'
import { createFactory, updateFactory } from '@/app/_features/factory/api'

const EditFactory = async () => {
  const update = async (data: FormData) => {
    'use server'
    const res = await updateFactory({
      id: '1053b650-9e3a-4604-aec1-be947703f77d',
      name: 'test',
      zipcode: '273-0021',
      prefecture: '千葉県',
      city: '船橋市',
      addressDetail: '1−1−1',
      tel: 'string',
      businessHours: 'string',
      holidays: 'string',
      siteUrl: 'string',
      imageUrl: ['', ''],
    })
    console.log(res)
  }
  return (
    <Container>
      <form action={update}>
        <button>submit</button>
      </form>
    </Container>
  )
}

export default EditFactory

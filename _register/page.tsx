import Container from '@/app/_components/layouts/container'
import { createFactory } from '@/app/_features/factory/api'

const RegisterFactory = async () => {
  const register = async (data: FormData) => {
    'use server'
    const res = await createFactory({
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
      <form action={register}>
        <button>submit</button>
      </form>
    </Container>
  )
}

export default RegisterFactory

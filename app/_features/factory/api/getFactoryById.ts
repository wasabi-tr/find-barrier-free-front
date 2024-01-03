import { Factory } from '@/app/_common/types'

export const getFactoryById = async (id: string): Promise<Factory | null> => {
  try {
    const res = await fetch(`${process.env.API_URL}/factory/${id}`)

    /* 施設情報が見つからない場合はnullを返却
    ※バックエンドのバリデーションでuuidでないとエラーを返すようにしているので400も含んでいる。要検討
    */
    if (res.status === 404 || res.status === 400) {
      return null
    }
    const factory = await res.json()
    return factory
  } catch (error: any) {
    throw new Error(error)
  }
}

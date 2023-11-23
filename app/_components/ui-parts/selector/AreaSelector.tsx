import React, { FC } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'

const prefectures = [
  '北海道',
  '青森県',
  '岩手県',
  '宮城県',
  '秋田県',
  '山形県',
  '福島県',
  '茨城県',
  '栃木県',
  '群馬県',
  '埼玉県',
  '千葉県',
  '東京都',
  '神奈川県',
  '新潟県',
  '富山県',
  '石川県',
  '福井県',
  '山梨県',
  '長野県',
  '岐阜県',
  '静岡県',
  '愛知県',
  '三重県',
  '滋賀県',
  '京都府',
  '大阪府',
  '兵庫県',
  '奈良県',
  '和歌山県',
  '鳥取県',
  '島根県',
  '岡山県',
  '広島県',
  '山口県',
  '徳島県',
  '香川県',
  '愛媛県',
  '高知県',
  '福岡県',
  '佐賀県',
  '長崎県',
  '熊本県',
  '大分県',
  '宮崎県',
  '鹿児島県',
  '沖縄県',
]
export const AreaSelector: FC = () => {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="area" className="flex items-center gap-2">
        <span>
          <MapPinIcon className="h-6 w-6 text-color-main-800" />
        </span>
        地域
      </label>
      <select
        name="area"
        id="area"
        className="selector"
        defaultValue={'東京都'}
      >
        {prefectures.map((prefecture) => (
          <option key={prefecture} value={prefecture}>
            {prefecture}
          </option>
        ))}
      </select>
    </div>
  )
}

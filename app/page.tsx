import Image from 'next/image'
import Container from './_components/layouts/container'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default async function Home() {
  return (
    <main>
      <section>
        <h1 className="hidden">ひろばリンク</h1>
        <div className="bg-color-main-50 py-28">
          <Container>
            <div className="grid  gap-6 place-items-center rounded-2xl border-3 border-green-600 p-8 bg-white">
              <p className="text-center font-bold">
                バリアフリーやユニバーサルデザインに対応した施設をまとめたポータルサイト
              </p>
              <div className="w-48 ">
                <Image
                  src={'/common/logo.svg'}
                  width={200}
                  height={80}
                  alt="ひろばリンク"
                  className="w-full"
                />
              </div>
              <div className="grid gap-4">
                <ul className="grid grid-cols-3 border-2 border-color-green-600 rounded-md">
                  <li>
                    <button
                      id="keyword"
                      className="relative w-full h-full py-2 px-4 border-r-2 border-color-green-600 text-white bg-color-green-600"
                    >
                      キーワードから探す
                      <span className="triangle down absolute bottom-0 left-1/2 translate-x-[-50%] translate-y-full"></span>
                    </button>
                  </li>
                  <li>
                    <Link
                      href={'/search-prefecture'}
                      className="flex items-center justify-center w-full h-full py-2 px-4 border-r-2 border-color-green-600 transition hover:bg-color-green-600 hover:text-white"
                    >
                      都道府県から探す
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={'/search-feature'}
                      className="flex items-center justify-center w-full h-full py-2 px-4 border-color-green-600 transition hover:bg-color-green-600 hover:text-white"
                    >
                      施設の特徴から探す
                    </Link>
                  </li>
                </ul>
                <form
                  action="factory"
                  method="GET"
                  className=""
                  aria-label="施設を検索する"
                >
                  <div className="flex">
                    <div className="flex-1">
                      <input
                        type="text"
                        placeholder="施設名・キーワード"
                        aria-labelledby="keyword"
                        className="w-full h-full  border-l-2 border-t-2 border-b-2 border-color-main-400 rounded-l-md px-3"
                      />
                    </div>
                    <button className="flex-shrink-0 basis-[160px] flex items-center gap-3 justify-center w-full py-5 px-8 rounded-r-md bg-color-green-600 text-white transition duration-300 hover:bg-color-green-800 ">
                      検索
                      <span>
                        <MagnifyingGlassIcon className="h-6 w-6 text-white" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  )
}

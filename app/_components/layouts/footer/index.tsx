import React from 'react'
import Container from '../container'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="py-14">
        <Container>
          <div className="flex gap-4 justify-between">
            <div className="flex items-center  rounded-md transition duration-300 ">
              <Image
                src={'/common/logo.svg'}
                width={180}
                height={60}
                alt="ひろばリンク"
                className=""
              />
            </div>
            <ul className="flex gap-4">
              <li>
                <Link
                  href={'/'}
                  className="transition pb-1 hover:border-b border-color-green-700"
                >
                  ホーム
                </Link>
              </li>
              <li>
                <Link
                  href={'/factory'}
                  className="transition pb-1 hover:border-b border-color-green-700"
                >
                  施設情報
                </Link>
              </li>
            </ul>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer

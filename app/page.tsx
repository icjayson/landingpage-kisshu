"use client"

import Image from "next/image"
import { ArrowRight, ShoppingBag, Award, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { ReactElement } from "react"

export default function LandingPage(): ReactElement {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section - Full Width with Overlay Text */}
      <section className="relative h-[70vh] w-full min-h-[500px] overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          {/* Dark Overlay for Text Readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30"></div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 flex h-full w-full items-center">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
                Kẹo Ngậm <span className="text-pink-300">Kisshu</span>
              </h1>
              <p className="mt-4 text-lg text-gray-200 md:text-xl">
                Khám phá thế giới hương vị với kẹo ngậm Kisshu - Ngọt ngào và tươi mát với 5 hương vị đặc biệt!
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button size="lg" className="bg-pink-600 hover:bg-pink-700">
                  <a href="https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660?sp_atk=93c2d802-701c-4dba-b8c6-e5a423713341" target="_blank" rel="noopener noreferrer" className="flex items-center">
                    Mua Ngay <ShoppingBag className="ml-2 h-4 w-4" />
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-pink-300 text-pink-300 hover:bg-pink-300/10">
                  Tìm Hiểu Thêm <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters & Stories Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl">Các Nhân Vật & Câu Chuyện</h2>
            <p className="mt-4 text-gray-600">Hãy làm quen với những người bạn đồng hành cùng Kisshu!</p>
          </div>

          {/* Grid cho 3 nhân vật đầu */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 justify-items-center lg:max-w-6xl lg:mx-auto">
            {[1, 2, 3, 4, 5].map((character) => (
              <Card 
                key={character} 
                className="overflow-hidden transition-all hover:shadow-lg w-full max-w-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=300&width=400&text=Nhân vật ${character}`}
                    alt={`Nhân vật Kisshu ${character}`}
                    width={400}
                    height={300}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-pink-600">Nhân Vật {character}</CardTitle>
                  <CardDescription>Câu chuyện đặc biệt về thế giới Kisshu</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Khám phá câu chuyện thú vị và hành trình phiêu lưu của nhân vật Kisshu {character} trong thế giới
                    kẹo ngọt ngào.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" className="text-pink-600 hover:bg-pink-50 hover:text-pink-700">
                    Xem Thêm <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="w-full bg-purple-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl">Bộ Sưu Tập Sản Phẩm</h2>
            <p className="mt-4 text-gray-600">Khám phá 5 hương vị tuyệt vời của Kẹo Ngậm Kisshu</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 justify-items-center lg:max-w-6xl lg:mx-auto">
            {[
              { name: "Dâu Tây", color: "bg-red-100 text-red-700", description: "Vị dâu tây ngọt ngào, tươi mát" },
              { name: "Nho", color: "bg-purple-100 text-purple-700", description: "Hương nho thơm nồng, đậm đà" },
              {
                name: "Táo Xanh",
                color: "bg-green-100 text-green-700",
                description: "Vị táo xanh tươi mát, sảng khoái",
              },
              { name: "Cam", color: "bg-orange-100 text-orange-700", description: "Hương cam tươi mới, giàu vitamin" },
              {
                name: "Chanh Dây",
                color: "bg-yellow-100 text-yellow-700",
                description: "Vị chanh dây chua ngọt, hấp dẫn",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className={`overflow-hidden ${product.color.split(" ")[0]} transition-all hover:shadow-lg w-full max-w-md`}
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={`/placeholder.svg?height=200&width=200&text=Kisshu ${product.name}`}
                    alt={`Kisshu ${product.name}`}
                    width={200}
                    height={200}
                    className="h-full w-full object-cover transition-transform hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className={product.color.split(" ")[1]}>Kisshu {product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{product.description}</p>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-pink-600 hover:bg-pink-700">
                    <a href="https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660?sp_atk=93c2d802-701c-4dba-b8c6-e5a423713341" target="_blank" rel="noopener noreferrer" className="flex items-center w-full justify-center">
                      Mua Ngay <ShoppingBag className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="w-full bg-white py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-purple-700 sm:text-4xl">Chương Trình Đặc Biệt</h2>
            <p className="mt-4 text-gray-600">Tham gia ngay các chương trình thú vị cùng Kisshu</p>
          </div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
            {/* Program 1: Badge Collection */}
            <Card className="overflow-hidden bg-gradient-to-br from-yellow-50 to-orange-50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Sưu Tầm Huy Hiệu"
                  alt="Chương trình sưu tầm huy hiệu"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-yellow-500 p-2 text-white">
                  <Award className="h-6 w-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-orange-600">Sưu Tầm Huy Hiệu</CardTitle>
                <CardDescription className="text-lg">Khám phá bộ sưu tập huy hiệu Kisshu độc đáo</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc
                  biệt và tham gia câu lạc bộ Kisshu độc quyền!
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-4">
                <Button className="bg-orange-500 hover:bg-orange-600">
                  Xem Chi Tiết <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Tham Gia Ngay
                </Button>
              </CardFooter>
            </Card>

            {/* Program 2: Travel with Kisshu */}
            <Card className="overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50">
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src="/placeholder.svg?height=300&width=600&text=Cùng Kisshu Đi Muôn Nơi"
                  alt="Chương trình cùng Kisshu đi muôn nơi"
                  width={600}
                  height={300}
                  className="h-full w-full object-cover"
                />
                <div className="absolute left-4 top-4 rounded-full bg-blue-500 p-2 text-white">
                  <Map className="h-6 w-6" />
                </div>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">Cùng Kisshu Đi Muôn Nơi</CardTitle>
                <CardDescription className="text-lg">Chia sẻ khoảnh khắc cùng Kisshu khắp mọi nơi</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh
                  những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!
                </p>
              </CardContent>
              <CardFooter className="flex flex-wrap gap-4">
                <Button className="bg-blue-500 hover:bg-blue-600">
                  Xem Chi Tiết <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button variant="outline" className="border-blue-500 text-blue-500 hover:bg-blue-50">
                  Tham Gia Ngay
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="w-full bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-white">
        <div className="container mx-auto px-4 text-center md:px-6">
          <h2 className="mb-4 text-3xl font-bold">Sẵn sàng khám phá thế giới Kisshu?</h2>
          <p className="mb-8 text-lg">Hãy thưởng thức ngay hương vị tuyệt vời của Kẹo Ngậm Kisshu!</p>
          <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
            <a href="https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660?sp_atk=93c2d802-701c-4dba-b8c6-e5a423713341" target="_blank" rel="noopener noreferrer" className="flex items-center">
              Mua Ngay <ShoppingBag className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* Zalo Button */}
      <a
        href="https://zalo.me/your-zalo-number"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      >
        <svg
          className="h-8 w-8"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          />
        </svg>
      </a>
    </div>
  )
}

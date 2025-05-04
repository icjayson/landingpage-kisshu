"use client"

import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import RulesSection from "./components/RulesSection"
import { useEffect, useState } from "react"
import WaveDivider from './components/WaveDivider'
import Modal from './components/Modal'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('')
  const [isAtTop, setIsAtTop] = useState(true)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProgram, setCurrentProgram] = useState<{
    title: string;
    description: string;
    time: string;
    type: 'program1' | 'program2';
  } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const programDetails = {
    program1: {
      title: "BẬT MOOD CHILL SĂN QUÀ SIÊU IU",
      description: "Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!",
      time: "01/05/2025 - 01/06/2025",
      type: 'program1' as const
    },
    program2: {
      title: "CÙNG KISSHU CHILL MUÔN NƠI",
      description: "Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!",
      time: "01/05/2025 - 01/06/2025",
      type: 'program2' as const
    }
  }

  const banners = [
    "/hero-banner.webp",
    "/hero-banner-2.png"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 3000); // Chuyển ảnh mỗi 3 giây

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      // Kiểm tra nếu scroll position gần top (trong khoảng 100px)
      setIsAtTop(window.scrollY < 100)
    }

    // Khởi tạo giá trị ban đầu
    handleScroll()

    // Thêm event listener
    window.addEventListener('scroll', handleScroll)

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isAtTop) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 }
    )

    const sections = ['rules', 'prizes', 'products', 'programs']
    sections.forEach((section) => {
      const element = document.getElementById(section)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [isAtTop])

  return (
    <div className="flex min-h-screen flex-col bg-[#FFF8E7]">
      <style jsx global>{`
        html {
          scroll-padding-top: 40px; /* Chính xác chiều cao của navigation */
        }
      `}</style>
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full" style={{background: 'linear-gradient(to bottom, white 0%, transparent 100%)'}}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4">
          <div className="h-12 w-auto">
            <img src="/logo-kisshu.svg" alt="Kisshu Logo" className="h-full w-full object-contain" />
          </div>
          {/* Desktop Menu */}
          <div className="max-md:hidden flex space-x-8">
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className={`h-6 w-6 transition-transform group ${isAtTop ? 'scale-150' : 'hover:scale-150'}`}
            >
              <img 
                src="/home.png" 
                alt="Home" 
                className={`h-full w-full object-contain transition-all ${
                  isAtTop 
                  ? 'filter brightness-0 invert sepia saturate-1000 hue-rotate-[320deg] drop-shadow-[0_0_4px_#ED1B24]' 
                  : 'group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-1000 group-hover:hue-rotate-[320deg] group-hover:drop-shadow-[0_0_4px_#ED1B24]'
                }`}
                style={{filter: 'none'}} 
              />
            </a>
            <a
              href="#rules"
              onClick={e => {
                e.preventDefault();
                document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative text-center items-center text-[16px] ${
                !isAtTop && activeSection === 'rules' ? 'text-[#ED1B24] font-bold after:w-full' : 'font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold'
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full`}
            >THỂ LỆ CHƯƠNG TRÌNH</a>
            <a
              href="#prizes"
              onClick={e => {
                e.preventDefault();
                document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative text-center text-[16px] ${
                !isAtTop && activeSection === 'prizes' ? 'text-[#ED1B24] font-bold after:w-full' : 'font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold'
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full`}
            >GIẢI THƯỞNG</a>
            <a
              href="#products"
              onClick={e => {
                e.preventDefault();
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative text-center text-[16px] ${
                !isAtTop && activeSection === 'products' ? 'text-[#ED1B24] font-bold after:w-full' : 'font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold'
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full`}
            >SẢN PHẨM</a>
            <a
              href="#programs"
              onClick={e => {
                e.preventDefault();
                document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className={`relative text-center text-[16px] ${
                !isAtTop && activeSection === 'programs' ? 'text-[#ED1B24] font-bold after:w-full' : 'font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold'
              } after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full`}
            >CHƯƠNG TRÌNH ĐANG DIỄN RA</a>
          </div>
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <img src="/menu.png" alt="Menu" className="h-6 w-6" />
          </button>
          {/* Social Icons - Desktop */}
          <div className="max-md:hidden flex items-center space-x-4">
            <a href="https://www.facebook.com/banhtuoibaongoc" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform hover:scale-110 group">
              <img src="/facebook.png" alt="Facebook" className="h-full w-full object-contain transition-all group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-1000 group-hover:hue-rotate-[320deg] group-hover:drop-shadow-[0_0_4px_#F0768E]" style={{filter: 'none'}} />
            </a>
            <a href="https://www.tiktok.com/@banhbaongoc_channel" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform hover:scale-110 group">
              <img src="/tiktok.png" alt="TikTok" className="h-full w-full object-contain transition-all group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-1000 group-hover:hue-rotate-[320deg] group-hover:drop-shadow-[0_0_4px_#F0768E]" style={{filter: 'none'}} />
            </a>
            <a href="https://zalo.me/0973301986" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform hover:scale-110 group">
              <img src="/zalo.png" alt="Zalo" className="h-full w-full object-contain transition-all group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-1000 group-hover:hue-rotate-[320deg] group-hover:drop-shadow-[0_0_4px_#F0768E]" style={{filter: 'none'}} />
            </a>
            <a href="https://shopee.vn/banhbaongoc_chanel" target="_blank" rel="noopener noreferrer" className="h-6 w-6 transition-transform hover:scale-110 group">
              <img src="/shopee1.png" alt="Shopee" className="h-full w-full object-contain transition-all group-hover:filter group-hover:brightness-0 group-hover:invert group-hover:sepia group-hover:saturate-1000 group-hover:hue-rotate-[320deg] group-hover:drop-shadow-[0_0_4px_#F0768E]" style={{filter: 'none'}} />
            </a>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col space-y-4 p-4">
              <a
                href="#rules"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('rules')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-[16px] font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full"
              >THỂ LỆ CHƯƠNG TRÌNH</a>
              <a
                href="#prizes"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('prizes')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-[16px] font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full"
              >GIẢI THƯỞNG</a>
              <a
                href="#products"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-[16px] font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full"
              >SẢN PHẨM</a>
              <a
                href="#programs"
                onClick={e => {
                  e.preventDefault();
                  document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' });
                  setIsMobileMenuOpen(false);
                }}
                className="relative text-[16px] font-medium text-[#1A1A1A] hover:text-[#ED1B24] hover:font-bold after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#ED1B24] after:transition-all after:duration-300 hover:after:w-full"
              >CHƯƠNG TRÌNH ĐANG DIỄN RA</a>
              {/* Social Icons - Mobile */}
              <div className="flex items-center space-x-4 pt-4">
                <a href="https://www.facebook.com/banhtuoibaongoc" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                  <img src="/facebook.png" alt="Facebook" className="h-full w-full object-contain" />
                </a>
                <a href="https://www.tiktok.com/@banhbaongoc_channel" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                  <img src="/tiktok.png" alt="TikTok" className="h-full w-full object-contain" />
                </a>
                <a href="https://zalo.me/0973301986" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                  <img src="/zalo.png" alt="Zalo" className="h-full w-full object-contain" />
                </a>
                <a href="https://shopee.vn/banhbaongoc_chanel" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                  <img src="/shopee1.png" alt="Shopee" className="h-full w-full object-contain" />
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative w-full h-[100vh]">
        <div className="relative h-full w-full overflow-hidden">
          {banners.map((banner, index) => (
            <div
              key={banner}
              className={`absolute h-full w-full transition-transform duration-500 ease-in-out ${
                index === currentBanner ? 'translate-x-0' : index < currentBanner ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              <img 
                src={banner}
                alt={`Hero Banner ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
          
          {/* Navigation Arrows - Only show right arrow on first banner and left arrow on second banner */}
          {currentBanner === 0 && (
            <button 
              onClick={() => setCurrentBanner((prev) => (prev + 1) % banners.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Next banner"
            >
              <ChevronRight className="h-8 w-8 text-[#ED1B24]" />
            </button>
          )}
          
          {currentBanner === 1 && (
            <button 
              onClick={() => setCurrentBanner((prev) => (prev - 1 + banners.length) % banners.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
              aria-label="Previous banner"
            >
              <ChevronLeft className="h-8 w-8 text-[#ED1B24]" />
            </button>
          )}

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentBanner(index)}
                className={`h-2 w-2 rounded-full transition-all ${
                  index === currentBanner ? 'bg-[#ED1B24] w-4' : 'bg-white/80 hover:bg-white'
                }`}
                aria-label={`Go to banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <RulesSection />

      <WaveDivider topColor="#D1ECF4" bottomColor="#F5EEC4" />

      {/* Prizes Section */}
      <section id="prizes" className="bg-[#F5EEC4] py-8">
        <div className="container mx-auto px-4">
          <div className="mb-0 flex items-center justify-center">
            <h2 className="text-[36px] max-md:text-[28px] font-bold text-[#F0C034] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
              GIẢI{' '} <br className="max-md:block hidden" /> THƯỞNG
            </h2>
            <div className="relative h-40 w-auto overflow-hidden pl-8">
              <img 
                src="/nv-chanh.png" 
                alt="Prize Character" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="mx-auto max-w-[1080px] grid grid-cols-4 max-md:grid-cols-2 gap-8 max-md:gap-4">
            <div className="rounded-[16px]">
              <div className="aspect-square">
                <div className="aspect-square p-[4px] rounded-[12px] bg-gradient-to-r from-[#F0768E] to-[#F8E4EF]">
                  <div className="h-full w-full bg-[#E8E8E8] rounded-[8px]">
                    <img src="/iphone.png" alt="iPhone 14 Pro Max" className="rounded-[8px] h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[20px] font-bold text-[#F0768E]">Giải nhất</p>
                <p className="text-[18px] font-bold text-black">iPhone 14 Pro Max</p>
              </div>
            </div>
            <div className="rounded-[16px]">
              <div className="aspect-square">
                <div className="aspect-square p-[4px] rounded-[12px] bg-gradient-to-r from-[#006352] to-[#F9D0CF]">
                  <div className="h-full w-full bg-[#E8E8E8] rounded-[8px]">
                    <img src="/macbook.png" alt="Macbook M2" className="rounded-[8px] h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[20px] font-bold text-[#006352]">Giải nhì</p>
                <p className="text-[18px] font-bold text-black">Macbook M2</p>
              </div>
            </div>
            <div className="rounded-[16px]">
              <div className="aspect-square">
                <div className="aspect-square p-[4px] rounded-[12px] bg-gradient-to-r from-[#49C4D9] to-[#D1ECF4]">
                  <div className="h-full w-full bg-[#E8E8E8] rounded-[8px]">
                    <img src="/ban-phim.png" alt="Bàn Phím" className="rounded-[8px] h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[20px] font-bold text-[#49C4D9]">Giải ba</p>
                <p className="text-[18px] font-bold text-black">Bàn Phím....</p>
              </div>
            </div>
            <div className="rounded-[16px]">
              <div className="aspect-square">
                <div className="aspect-square p-[4px] rounded-[12px] bg-gradient-to-r from-[#FFB800] to-[#F5EEC4]">
                  <div className="h-full w-full bg-[#E8E8E8] rounded-[8px]">
                    <img src="/quat.png" alt="Quạt cầm tay" className="rounded-[8px] h-full w-full object-cover" />
                  </div>
                </div>
              </div>
              <div className="mt-4 text-center">
                <p className="text-[20px] font-bold text-[#F0C034]">Giải khuyến khích</p>
                <p className="text-[18px] font-bold text-black">Quạt cầm tay</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F5EEC4" bottomColor="#F8E4EF" />

      {/* Products Collection */}
      <section id="products" className="bg-[#F8E4EF] py-8">
        <div className="container mx-auto px-4">
          <div className="mb-0 flex items-center justify-center">
            <div className="relative h-40 w-auto overflow-hidden pr-8">
              <img 
                src="/nv-dau.png" 
                alt="Strawberry Character" 
                className="h-full w-auto object-contain"
              />
            </div>
            <h2 className="text-[36px] max-md:text-[28px] font-bold text-[#F0768E] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
              BỘ SƯU TẬP{' '} <br className="max-md:block hidden" /> SẢN PHẨM
            </h2>
          </div>
          <div className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-3 max-sm:grid-cols-2 gap-4">
            {/* Kẹo hương dâu */}
            <div className="group overflow-hidden rounded-[16px] border-2 border-[#F0768E] bg-[#F8E4EF] p-4 transition-all hover:shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden rounded-[12px]">
                <img
                  src="/huong-dau.png"
                  alt="Kẹo hương dâu"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] max-sm:text-[16px] font-bold text-[#F0768E]">Kẹo ngậm Kisshu<br />hương dâu</h3>
                <p className="mt-2 text-[14px] max-sm:text-[12px] text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
              </div>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-4 w-full rounded-[8px] bg-[#F0768E] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-pink-500 flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
              </button>
            </div>

            {/* Kẹo hương bạc hà */}
            <div className="group overflow-hidden rounded-[16px] border-2 border-[#49C4D9] bg-[#D1ECF4] p-4 transition-all hover:shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden rounded-[12px]">
                <img
                  src="/huong-bac-ha.png"
                  alt="Kẹo hương bạc hà"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] max-sm:text-[16px] font-bold text-[#49C4D9]">Kẹo ngậm Kisshu<br />hương bạc hà</h3>
                <p className="mt-2 text-[14px] max-sm:text-[12px] text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
              </div>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-4 w-full rounded-[8px] bg-[#49C4D9] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-cyan-500 flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
              </button>
            </div>

            {/* Kẹo hương chanh */}
            <div className="group overflow-hidden rounded-[16px] border-2 border-[#F0C034] bg-[#F5EEC4] p-4 transition-all hover:shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden rounded-[12px]">
                <img
                  src="/huong-chanh.png"
                  alt="Kẹo hương chanh"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] max-sm:text-[16px] font-bold text-[#F0C034]">Kẹo ngậm Kisshu<br />hương chanh</h3>
                <p className="mt-2 text-[14px] max-sm:text-[12px] text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
              </div>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-4 w-full rounded-[8px] bg-[#F0C034] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-yellow-500 flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
              </button>
            </div>

            {/* Kẹo hương dưa hấu */}
            <div className="group overflow-hidden rounded-[16px] border-2 border-[#006352] bg-[#F9D0CF] p-4 transition-all hover:shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden rounded-[12px]">
                <img
                  src="/huong-dua-hau.png"
                  alt="Kẹo hương dưa hấu"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] max-sm:text-[16px] font-bold text-[#006352]">Kẹo ngậm Kisshu<br />hương dưa hấu</h3>
                <p className="mt-2 text-[14px] max-sm:text-[12px] text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
              </div>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-4 w-full rounded-[8px] bg-[#006352] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-green-500 flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
              </button>
            </div>

            {/* Kẹo vị ô mai */}
            <div className="group overflow-hidden rounded-[16px] border-2 border-[#C5272D] bg-[#F2D5BA] p-4 transition-all hover:shadow-lg flex flex-col">
              <div className="relative h-40 w-full overflow-hidden rounded-[12px]">
                <img
                  src="/vi-o-mai.png"
                  alt="Kẹo vị ô mai"
                  className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="mt-4 text-center flex-1 flex flex-col">
                <h3 className="text-[20px] max-sm:text-[16px] font-bold text-[#C5272D]">Kẹo ngậm Kisshu<br />vị ô mai</h3>
                <p className="mt-2 text-[14px] max-sm:text-[12px] text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
              </div>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-4 w-full rounded-[8px] bg-[#C5272D] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-red-500 flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F8E4EF" bottomColor="#F2D5BA" />

      {/* Current Programs */}
      <section id="programs" className="bg-[#F2D5BA] py-8">
        <div className="container mx-auto px-4">
          <div className="mb-0 flex items-center justify-center">
            <h2 className="text-[36px] max-md:text-[28px] font-bold text-[#C5272D] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
              CHƯƠNG TRÌNH{' '} <br className="max-md:block hidden" /> ĐANG DIỄN RA
            </h2>
            <div className="relative h-40 w-auto overflow-hidden pl-8">
              <img 
                src="/nv-o-mai.png" 
                alt="Happy Character" 
                className="h-full w-auto object-contain"
              />
            </div>
          </div>
          <div className="mx-auto max-w-[1000px]">
            <div className="grid grid-cols-2 max-md:grid-cols-1 gap-12 max-md:gap-8">
              <div className="overflow-hidden rounded-[16px] border-2 border-[#F0768E] transition-all hover:shadow-lg h-full flex flex-col">
                <div className="relative w-full pb-[56.25%]">
                  <img 
                    src="/chuong-trinh-1.png" 
                    alt="CHƯƠNG TRÌNH BẬT MOOD CHILL SĂN QUÀ SIÊU IU" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-b from-white to-[#FFE8F0] px-6 py-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-[#F0768E] text-center leading-tight">
                      BẬT MOOD CHILL{' '} <br className="max-md:block hidden" /> SĂN QUÀ SIÊU IU
                    </h3>
                    <p className="mt-2 text-[16px] text-black text-center font-medium">Khám phá bộ sưu tập huy hiệu Kisshu độc đáo</p>
                    <p className="mt-0 text-[16px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                    <p className="mt-2 text-[16px] text-black text-justify leading-relaxed">Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                    <button 
                      onClick={() => {
                        setCurrentProgram(programDetails.program1)
                        setIsModalOpen(true)
                      }}
                      className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#F0768E] px-8 max-md:px-4 py-2 text-[16px] text-[#F0768E] hover:bg-[#F0768E] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                    </button>
                    <a 
                      href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#F0768E] text-center px-8 max-md:px-4 py-2 text-[16px] text-white hover:bg-[#d6607a] transition-all"
                    >
                      Tham gia ngay
                    </a>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden rounded-[16px] border-2 border-[#006352] transition-all hover:shadow-lg h-full flex flex-col">
                <div className="relative w-full pb-[56.25%]">
                  <img 
                    src="/chuong-trinh-2.png" 
                    alt="CHƯƠNG TRÌNH CÙNG KISSHU CHILL MUÔN NƠI" 
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
                <div className="bg-gradient-to-b from-white to-[#D1ECF4] px-6 py-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-[24px] font-bold text-[#006352] text-center leading-tight">
                      CÙNG KISSHU{' '} <br className="max-md:block hidden" /> CHILL MUÔN NƠI
                    </h3>
                    <p className="mt-2 text-[16px] text-black text-center font-medium">Chia sẻ khoảnh khắc cùng Kisshu khắp mọi nơi</p>
                    <p className="mt-0 text-[16px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                    <p className="mt-2 text-[16px] text-black text-justify leading-relaxed">Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!</p>
                  </div>
                  <div className="mt-4 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                    <button 
                      onClick={() => {
                        setCurrentProgram(programDetails.program2)
                        setIsModalOpen(true)
                      }}
                      className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#006352] px-8 max-md:px-4 py-2 text-[16px] text-[#006352] hover:bg-[#006352] hover:text-white transition-all flex items-center justify-center gap-2"
                    >
                      Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                    </button>
                    <a 
                      href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#006352] text-center px-8 max-md:px-4 py-2 text-[16px] text-white hover:bg-[#004d3f] transition-all"
                    >
                      Tham gia ngay
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider topColor="#F2D5BA" bottomColor="#F9D0CF" />

      {/* Footer */}
      <section className="bg-[#F9D0CF] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[auto_auto] max-md:grid-cols-1 items-center gap-20 max-lg:gap-10 max-md:gap-8">
            <div className="relative h-60 justify-self-end max-md:justify-self-center">
              <img 
                src="/nv-dua-hau.png" 
                alt="Footer Character" 
                className="h-full w-auto object-contain"
              />
            </div>

            <div className="flex flex-col items-self-start items-center max-md:items-center justify-self-start max-md:justify-self-center px-0">
              <h2 className="text-[32px] max-md:text-[24px] font-bold text-[#006352] text-center">
                Sẵn sàng khám phá{' '} <br className="max-md:block hidden" /> thế giới Kisshu?
              </h2>
              <p className="mt-4 max-md:mt-2 text-[20px] max-md:text-[16px] text-gray-600 text-left text-center">
                Hãy thưởng thức ngay hương vị tuyệt vời {' '} <br className="max-md:block hidden" /> của Kẹo Ngậm Kisshu!
              </p>
              <button
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-6 rounded-[12px] bg-[#006352] px-8 py-3 text-[18px] text-white hover:bg-[#004d3f] transition-all flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 object-contain" />
              </button>
              <div className="mt-8 max-md:mt-6 flex flex-row max-md:flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <a href="https://www.facebook.com/banhtuoibaongoc" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                    <img src="/facebook.png" alt="Facebook" className="h-full w-full object-contain" />
                  </a>
                  <a href="https://www.tiktok.com/@banhbaongoc_channel" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                    <img src="/tiktok.png" alt="TikTok" className="h-full w-full object-contain" />
                  </a>
                  <a href="https://zalo.me/0973301986" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                    <img src="/zalo.png" alt="Zalo" className="h-full w-full object-contain" />
                  </a>
                  <a href="https://shopee.vn/banhbaongoc_chanel" target="_blank" rel="noopener noreferrer" className="h-10 w-10 rounded-full bg-white p-2 shadow-md transition-transform hover:scale-110">
                    <img src="/shopee1.png" alt="Shopee" className="h-full w-full object-contain" />
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-0">
                  <img src="/phone.png" alt="Phone" className="h-10 w-10 rounded-full bg-white p-2 shadow-md" />
                  <span className="text-[18px] text-gray-600">097 330 1986 - 089 616 4882</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {currentProgram && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title={currentProgram.title}
          description={currentProgram.description}
          time={currentProgram.time}
          type={currentProgram.type}
        />
      )}
    </div>
  )
}

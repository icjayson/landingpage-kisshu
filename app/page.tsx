"use client"

import Image from "next/image"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import RulesSection from "./components/RulesSection"
import { useEffect, useState, useRef } from "react"
import WaveDivider from './components/WaveDivider'
import Modal from './components/Modal'
import { useSwipeable } from 'react-swipeable'
import PrizesSection from './components/PrizesSection'
import ProductsSection from './components/ProductsSection'
import ProgramsSection from './components/ProgramsSection'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { motion } from 'framer-motion'

export default function LandingPage() {
  const [activeSection, setActiveSection] = useState('')
  const [isAtTop, setIsAtTop] = useState(true)
  const [currentBanner, setCurrentBanner] = useState(0)
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0)
  const [prevProgramIndex, setPrevProgramIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [currentProgram, setCurrentProgram] = useState<{
    title: string;
    description: string;
    time: string;
    type: 'program1' | 'program2';
  } | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [isSliding, setIsSliding] = useState(false)
  const slideTimeout = useRef<NodeJS.Timeout | null>(null)

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

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [currentProgramIndex])

  function handleNext() {
    if (isSliding) return;
    setSlideDirection('right')
    setIsSliding(true)
    if (slideTimeout.current) clearTimeout(slideTimeout.current)
    slideTimeout.current = setTimeout(() => {
      setCurrentProgramIndex((prev) => (prev + 1) % 2)
      setIsSliding(false)
    }, 300)
  }

  function handlePrev() {
    if (isSliding) return;
    setSlideDirection('left')
    setIsSliding(true)
    if (slideTimeout.current) clearTimeout(slideTimeout.current)
    slideTimeout.current = setTimeout(() => {
      setCurrentProgramIndex((prev) => (prev - 1 + 2) % 2)
      setIsSliding(false)
    }, 300)
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => handleNext(),
    onSwipedRight: () => handlePrev(),
    trackMouse: true
  })

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
      <PrizesSection />

      <WaveDivider topColor="#F5EEC4" bottomColor="#F8E4EF" />

      {/* Products Collection */}
      <ProductsSection />
      <WaveDivider topColor="#F8E4EF" bottomColor="#F2D5BA" />

      {/* Current Programs */}
      <ProgramsSection />
      <WaveDivider topColor="#F2D5BA" bottomColor="#F9D0CF" />

      {/* Footer */}
      <section className="bg-[#F9D0CF] py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-[auto_auto] max-md:grid-cols-1 items-center gap-20 max-lg:gap-10 max-md:gap-8">
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative h-60 justify-self-end max-md:justify-self-center"
            >
              <img 
                src="/nv-dua-hau.png" 
                alt="Footer Character" 
                className="h-full w-auto object-contain"
              />
            </motion.div>

            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-col items-self-start items-center max-md:items-center justify-self-start max-md:justify-self-center px-0"
            >
              <h2 className="text-[32px] max-md:text-[24px] font-bold text-[#006352] text-center">
                Sẵn sàng khám phá{' '} <br className="max-md:block hidden" /> thế giới Kisshu?
              </h2>
              <p className="mt-4 max-md:mt-2 text-[20px] max-md:text-[14px] text-gray-600 text-left text-center">
                Hãy thưởng thức ngay hương vị tuyệt vời {' '} <br className="max-md:block hidden" /> của Kẹo Ngậm Kisshu!
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
                className="mt-6 max-md:mt-4 rounded-[12px] bg-[#006352] px-8 py-3 max-md:py-2 text-[16px] text-white hover:bg-[#004d3f] transition-all flex items-center justify-center gap-2"
              >
                Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 object-contain" />
              </motion.button>
              <div className="mt-8 max-md:mt-4 flex flex-row max-md:flex-col items-center gap-4">
                <div className="flex items-center gap-4">
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.facebook.com/banhtuoibaongoc" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 max-md:h-8 max-md:w-8 rounded-full bg-white p-2 max-md:p-1 shadow-md transition-transform hover:scale-110"
                  >
                    <img src="/facebook.png" alt="Facebook" className="h-full w-full object-contain" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://www.tiktok.com/@banhbaongoc_channel" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 max-md:h-8 max-md:w-8 rounded-full bg-white p-2 max-md:p-1  shadow-md transition-transform hover:scale-110"
                  >
                    <img src="/tiktok.png" alt="TikTok" className="h-full w-full object-contain" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://zalo.me/0973301986" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 max-md:h-8 max-md:w-8 rounded-full bg-white p-2 max-md:p-1  shadow-md transition-transform hover:scale-110"
                  >
                    <img src="/zalo.png" alt="Zalo" className="h-full w-full object-contain" />
                  </motion.a>
                  <motion.a 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href="https://shopee.vn/banhbaongoc_chanel" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="h-10 w-10 max-md:h-8 max-md:w-8 rounded-full bg-white p-2 max-md:p-1  shadow-md transition-transform hover:scale-110"
                  >
                    <img src="/shopee1.png" alt="Shopee" className="h-full w-full object-contain" />
                  </motion.a>
                </div>
                <div className="flex items-center gap-4 max-md:gap-2 mt-0">
                  <img src="/phone.png" alt="Phone" className="h-10 w-10 max-md:h-8 max-md:w-8 rounded-full bg-white p-2 max-md:p-1  shadow-md" />
                  <span className="text-[14px] text-gray-600">097 330 1986 - 089 616 4882</span>
                </div>
              </div>
            </motion.div>
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

import { motion } from 'framer-motion'
import { prizeTitleVariants, prizeCharacterVariants } from '../animations/variants'
import { useState } from 'react'
import { useSwipeable } from 'react-swipeable'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const programDetails = {
  program1: {
    title: "BẬT MOOD CHILL SĂN QUÀ SIÊU IU",
    description: "Khám phá bộ sưu tập huy hiệu Kisshu độc đáo",
    time: "01/05/2025 - 01/06/2025",
    details: "Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!"
  },
  program2: {
    title: "CÙNG KISSHU CHILL MUÔN NƠI",
    description: "Chia sẻ khoảnh khắc cùng Kisshu khắp mọi nơi",
    time: "01/05/2025 - 01/06/2025",
    details: "Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!"
  }
}

const desktopCardVariants = {
  hidden: { 
    scale: 0.8,
    y: 50,
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1]
    }
  },
  visible: { 
    scale: 1,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1]
    }
  }
}

const mobileCardVariants = {
  hidden: { 
    opacity: 0,
    transition: {
      duration: 0.3
    }
  },
  visible: { 
    opacity: 1,
    transition: {
      duration: 0.3
    }
  }
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0,
      delayChildren: 0.1
    }
  }
}

const ProgramsSection = () => {
  const [currentProgramIndex, setCurrentProgramIndex] = useState(0)
  const [isSliding, setIsSliding] = useState(false)
  const [slideDirection, setSlideDirection] = useState<'left' | 'right'>('right')
  const [currentProgram, setCurrentProgram] = useState(programDetails.program1)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleNext = () => {
    if (!isSliding) {
      setIsSliding(true)
      setSlideDirection('right')
      setTimeout(() => {
        setCurrentProgramIndex(1)
        setIsSliding(false)
      }, 300)
    }
  }

  const handlePrev = () => {
    if (!isSliding) {
      setIsSliding(true)
      setSlideDirection('left')
      setTimeout(() => {
        setCurrentProgramIndex(0)
        setIsSliding(false)
      }, 300)
    }
  }

  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentProgramIndex === 0) handleNext()
    },
    onSwipedRight: () => {
      if (currentProgramIndex === 1) handlePrev()
    },
    trackMouse: true
  })

  return (
    <section id="programs" className="bg-[#F2D5BA] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-0 flex items-center justify-center">
          <motion.h2
            variants={prizeTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="text-[36px] max-md:text-[28px] max-sm:text-[24px] font-bold text-[#C5272D] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
          >
            CHƯƠNG TRÌNH{' '} <br className="max-md:block hidden" /> ĐANG DIỄN RA
          </motion.h2>
          <motion.div
            variants={prizeCharacterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="relative h-40 w-auto overflow-hidden pl-8"
          >
            <img 
              src="/nv-o-mai.png" 
              alt="Happy Character" 
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </div>
        <div className="mx-auto max-w-[1000px] max-sm:mx-2">
          {/* Desktop: 2 columns, Mobile: only 1 card with navigation */}
          <motion.div 
            className="grid grid-cols-2 gap-12 max-md:hidden"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {/* Program 1 */}
            <motion.div 
              variants={desktopCardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="overflow-hidden rounded-[16px] border-2 border-[#F0768E] transition-all hover:shadow-lg h-full flex flex-col"
            >
              <div className="relative w-full pb-[56.25%]">
                <img 
                  src="/chuong-trinh-1.png" 
                  alt="CHƯƠNG TRÌNH BẬT MOOD CHILL SĂN QUÀ SIÊU IU" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-white to-[#FFE8F0] px-6 py-4 max-sm:pt-2 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-[24px] max-md:text-[20px] font-bold text-[#F0768E] text-center leading-tight">
                    BẬT MOOD CHILL{' '} <br className="max-sm:block hidden" /> SĂN QUÀ SIÊU IU
                  </h3>
                  <p className="mt-2 text-[16px] max-md:text-[14px] text-black text-center font-medium">Khám phá bộ sưu tập huy hiệu Kisshu độc đáo</p>
                  <p className="mt-0 text-[16px] max-md:text-[14px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                  <p className="mt-2 text-[14px] max-md:text-[12px] text-black text-justify leading-relaxed">Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!</p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentProgram(programDetails.program1)
                      setIsModalOpen(true)
                    }}
                    className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#F0768E] px-8 max-md:px-4 py-1.5 text-[16px] max-sm:text-[14px] text-[#F0768E] hover:bg-[#F0768E] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#F0768E] text-center px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-white hover:bg-[#d6607a] transition-all"
                  >
                    Tham gia ngay
                  </motion.a>
                </div>
              </div>
            </motion.div>
            {/* Program 2 */}
            <motion.div 
              variants={desktopCardVariants}
              whileHover={{ 
                scale: 1.02,
                y: -5,
                transition: { duration: 0.2 }
              }}
              className="overflow-hidden rounded-[16px] border-2 border-[#006352] transition-all hover:shadow-lg h-full flex flex-col"
            >
              <div className="relative w-full pb-[56.25%]">
                <img 
                  src="/chuong-trinh-2.png" 
                  alt="CHƯƠNG TRÌNH CÙNG KISSHU CHILL MUÔN NƠI" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
              <div className="bg-gradient-to-b from-white to-[#D1ECF4] px-6 py-4 max-sm:pt-2 flex-1 flex flex-col">
                <div className="flex-1">
                  <h3 className="text-[24px] max-md:text-[20px] font-bold text-[#006352] text-center leading-tight">
                    CÙNG KISSHU{' '} <br className="max-sm:block hidden" /> CHILL MUÔN NƠI
                  </h3>
                  <p className="mt-2 text-[16px] max-md:text-[14px] text-black text-center font-medium">Chia sẻ khoảnh khắc cùng Kisshu khắp mọi nơi</p>
                  <p className="mt-0 text-[16px] max-md:text-[14px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                  <p className="mt-2 text-[14px] max-md:text-[12px] text-black text-justify leading-relaxed">Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!</p>
                </div>
                <div className="mt-2 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setCurrentProgram(programDetails.program2)
                      setIsModalOpen(true)
                    }}
                    className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#006352] px-8 max-md:px-4 py-1.5 text-[16px] max-sm:text-[14px] text-[#006352] hover:bg-[#006352] hover:text-white transition-all flex items-center justify-center gap-2"
                  >
                    Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                  </motion.button>
                  <motion.a 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#006352] text-center px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-white hover:bg-[#004d3f] transition-all"
                  >
                    Tham gia ngay
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Mobile: only 1 card, navigation arrows, dot indicator */}
          <div className="max-md:block hidden relative">
            <div className="overflow-x-hidden relative" {...swipeHandlers}>
              <div
                className={`transition-transform duration-300 will-change-transform ${
                  isSliding
                    ? slideDirection === 'right'
                      ? 'translate-x-full'
                      : '-translate-x-full'
                    : 'translate-x-0'
                }`}
                key={currentProgramIndex}
              >
                {currentProgramIndex == 0 && (
                  <div className="overflow-hidden rounded-[16px] border-2 border-[#F0768E] transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="relative w-full pb-[56.25%]">
                      <img 
                        src="/chuong-trinh-1.png" 
                        alt="CHƯƠNG TRÌNH BẬT MOOD CHILL SĂN QUÀ SIÊU IU" 
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-b from-white to-[#FFE8F0] px-6 py-4 max-sm:pt-2 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-[24px] max-md:text-[20px] font-bold text-[#F0768E] text-center leading-tight">
                          BẬT MOOD CHILL{' '} <br className="max-sm:block hidden" /> SĂN QUÀ SIÊU IU
                        </h3>
                        <p className="mt-2 text-[16px] max-md:text-[14px] text-black text-center font-medium">Khám phá bộ sưu tập huy hiệu Kisshu độc đáo</p>
                        <p className="mt-0 text-[16px] max-md:text-[14px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                        <p className="mt-2 text-[16px] max-md:text-[12px] text-black text-justify leading-relaxed">Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!</p>
                      </div>
                      <div className="mt-4 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                        <button 
                          onClick={() => {
                            setCurrentProgram(programDetails.program1)
                            setIsModalOpen(true)
                          }}
                          className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#F0768E] px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-[#F0768E] hover:bg-[#F0768E] hover:text-white transition-all flex items-center justify-center gap-2"
                        >
                          Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                        </button>
                        <a 
                          href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#F0768E] text-center px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-white hover:bg-[#d6607a] transition-all"
                        >
                          Tham gia ngay
                        </a>
                      </div>
                    </div>
                  </div>
                )}
                {currentProgramIndex == 1 && (
                  <div className="overflow-hidden rounded-[16px] border-2 border-[#006352] transition-all hover:shadow-lg h-full flex flex-col">
                    <div className="relative w-full pb-[56.25%]">
                      <img 
                        src="/chuong-trinh-2.png" 
                        alt="CHƯƠNG TRÌNH CÙNG KISSHU CHILL MUÔN NƠI" 
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                    </div>
                    <div className="bg-gradient-to-b from-white to-[#D1ECF4] px-6 py-4 max-sm:pt-2 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-[24px] max-md:text-[20px] font-bold text-[#006352] text-center leading-tight">
                          CÙNG KISSHU{' '} <br className="max-sm:block hidden" /> CHILL MUÔN NƠI
                        </h3>
                        <p className="mt-2 text-[16px] max-md:text-[14px] text-black text-center font-medium">Chia sẻ khoảnh khắc cùng Kisshu khắp mọi nơi</p>
                        <p className="mt-0 text-[16px] max-md:text-[14px] text-gray-600 text-center">Thời gian: 01/05/2025 - 01/06/2025</p>
                        <p className="mt-2 text-[14px] max-md:text-[12px] text-black text-justify leading-relaxed">Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!</p>
                      </div>
                      <div className="mt-4 flex items-center justify-center space-x-4 max-lg:flex-col max-lg:space-x-0 max-lg:space-y-4 max-md:flex-row max-md:space-x-4 max-md:space-y-0">
                        <button 
                          onClick={() => {
                            setCurrentProgram(programDetails.program2)
                            setIsModalOpen(true)
                          }}
                          className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] border-2 border-[#006352] px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-[#006352] hover:bg-[#006352] hover:text-white transition-all flex items-center justify-center gap-2 max-sm:gap-1"
                        >
                          Xem chi tiết <img src="/arrow.png" alt="arrow" className="w-4 h-4 object-contain" />
                        </button>
                        <a 
                          href="https://forms.gle/V6KmFRiTNBDJGEFR9" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="min-w-[180px] max-md:min-w-0 max-md:flex-1 rounded-[12px] bg-[#006352] text-center px-8 max-md:px-4 py-2 text-[16px] max-sm:text-[14px] text-white hover:bg-[#004d3f] transition-all"
                        >
                          Tham gia ngay
                        </a>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Navigation Arrows */}
            {currentProgramIndex == 0 && (
              <button 
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Next program"
              >
                <ChevronRight className="h-8 w-8 text-[#ED1B24]" />
              </button>
            )}
            {currentProgramIndex == 1 && (
              <button 
                onClick={handlePrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow-lg transition-all hover:bg-white hover:scale-110"
                aria-label="Previous program"
              >
                <ChevronLeft className="h-8 w-8 text-[#ED1B24]" />
              </button>
            )}
            {/* Dot indicator */}
            <div className="flex justify-center mt-4">
              {[0, 1].map((index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (index !== currentProgramIndex && !isSliding) {
                      if (index > currentProgramIndex) handleNext()
                      else handlePrev()
                    }
                  }}
                  className={`h-2 w-2 rounded-full mx-1 transition-all ${
                    index === currentProgramIndex ? 'bg-[#ED1B24] w-4' : 'bg-white/80'
                  }`}
                  aria-label={`Go to program ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProgramsSection 
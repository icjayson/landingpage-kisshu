import { motion } from 'framer-motion'
import { containerVariants, prizeTitleVariants, prizeCharacterVariants } from '../animations/variants'

const ProductsSection = () => {
  return (
    <section id="products" className="bg-[#F8E4EF] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative h-40 w-auto overflow-hidden pr-8"
          >
            <img 
              src="/nv-dau.png" 
              alt="Strawberry Character" 
              className="h-full w-auto object-contain"
            />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-[36px] max-md:text-[28px] max-sm:text-[24px] font-bold text-[#F0768E] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
          >
            BỘ SƯU TẬP{' '} <br className="max-md:block hidden" /> SẢN PHẨM
          </motion.h2>
        </div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2
              }
            }
          }}
          className="grid grid-cols-5 max-lg:grid-cols-3 max-md:grid-cols-3 gap-4 max-sm:gap-2"
        >
          {/* Kẹo hương dâu */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group overflow-hidden rounded-[16px] border-2 border-[#F0768E] bg-[#F8E4EF] p-4 max-sm:p-2 transition-all hover:shadow-lg flex flex-col"
          >
            <motion.div
              className="relative h-40 w-full overflow-hidden rounded-[12px]"
            >
              <motion.img
                src="/huong-dau.png"
                alt="Kẹo hương dâu"
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center flex-1 flex flex-col"
            >
              <h3 className="text-[20px] max-sm:text-[12px] font-bold text-[#F0768E]">Kẹo ngậm Kisshu<br />hương dâu</h3>
              <p className="mt-2 text-[14px] max-sm:text-[12px] max-md:hidden text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
            </motion.div>
            <motion.button
              onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
              className="mt-4 max-sm:mt-2 w-full rounded-[8px] bg-[#F0768E] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-pink-500 flex items-center justify-center gap-2 max-sm:gap-1"
            >
              Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
            </motion.button>
          </motion.div>

          {/* Kẹo hương bạc hà */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group overflow-hidden rounded-[16px] border-2 border-[#49C4D9] bg-[#D1ECF4] p-4 max-sm:p-2 transition-all hover:shadow-lg flex flex-col"
          >
            <motion.div
              className="relative h-40 w-full overflow-hidden rounded-[12px]"
            >
              <motion.img
                src="/huong-bac-ha.png"
                alt="Kẹo hương bạc hà"
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center flex-1 flex flex-col"
            >
              <h3 className="text-[20px] max-sm:text-[12px] font-bold text-[#49C4D9]">Kẹo ngậm Kisshu<br />hương bạc hà</h3>
              <p className="mt-2 text-[14px] max-sm:text-[12px] max-md:hidden text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
              className="mt-4 max-sm:mt-2 w-full rounded-[8px] bg-[#49C4D9] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-cyan-500 flex items-center justify-center gap-2 max-sm:gap-1"
            >
              Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
            </motion.button>
          </motion.div>

          {/* Kẹo hương chanh */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group overflow-hidden rounded-[16px] border-2 border-[#F0C034] bg-[#F5EEC4] p-4 max-sm:p-2 transition-all hover:shadow-lg flex flex-col"
          >
            <motion.div
              className="relative h-40 w-full overflow-hidden rounded-[12px]"
            >
              <motion.img
                src="/huong-chanh.png"
                alt="Kẹo hương chanh"
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center flex-1 flex flex-col"
            >
              <h3 className="text-[20px] max-sm:text-[12px] font-bold text-[#F0C034]">Kẹo ngậm Kisshu<br />hương chanh</h3>
              <p className="mt-2 text-[14px] max-sm:text-[12px] max-md:hidden text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
              className="mt-4 max-sm:mt-2 w-full rounded-[8px] bg-[#F0C034] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-yellow-500 flex items-center justify-center gap-2 max-sm:gap-1"
            >
              Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
            </motion.button>
          </motion.div>

          {/* Kẹo hương dưa hấu */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group overflow-hidden rounded-[16px] border-2 border-[#006352] bg-[#F9D0CF] p-4 max-sm:p-2 transition-all hover:shadow-lg flex flex-col"
          >
            <motion.div
              className="relative h-40 w-full overflow-hidden rounded-[12px]"
            >
              <motion.img
                src="/huong-dua-hau.png"
                alt="Kẹo hương dưa hấu"
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center flex-1 flex flex-col"
            >
              <h3 className="text-[20px] max-sm:text-[12px] font-bold text-[#006352]">Kẹo ngậm Kisshu<br />hương dưa hấu</h3>
              <p className="mt-2 text-[14px] max-sm:text-[12px] max-md:hidden text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
            </motion.div>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
              className="mt-4 max-sm:mt-2 w-full rounded-[8px] bg-[#006352] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-green-500 flex items-center justify-center gap-2 max-sm:gap-1"
            >
              Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
            </motion.button>
          </motion.div>

          {/* Kẹo vị ô mai */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.05, y: -10 }}
            whileTap={{ scale: 0.95 }}
            className="group overflow-hidden rounded-[16px] border-2 border-[#C5272D] bg-[#F2D5BA] p-4 max-sm:p-2 transition-all hover:shadow-lg flex flex-col"
          >
            <motion.div
              className="relative h-40 w-full overflow-hidden rounded-[12px]"
            >
              <motion.img
                src="/vi-o-mai.png"
                alt="Kẹo vị ô mai"
                className="h-full w-full object-contain"
              />
            </motion.div>
            <motion.div
              className="mt-4 text-center flex-1 flex flex-col"
            >
              <h3 className="text-[20px] max-sm:text-[12px] font-bold text-[#C5272D]">Kẹo ngậm Kisshu<br />vị ô mai</h3>
              <p className="mt-2 text-[14px] max-sm:text-[12px] max-md:hidden text-gray-600">Thưởng thức hương vị dâu tây tự nhiên, ngọt ngào và tươi mát với kẹo ngậm Kisshu hương dâu.</p>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://shopee.vn/S%E1%BA%A3n-ph%E1%BA%A9m-m%E1%BB%9Bi-COMBO-5-K%E1%BA%B9o-Ng%E1%BA%ADm-Th%C6%A1m-Mi%E1%BB%87ng-KISSHU-%E2%80%93-B%E1%BA%A3o-Ng%E1%BB%8Dc-i.293575788.24957156660', '_blank')}
              className="mt-4 max-sm:mt-2 w-full rounded-[8px] bg-[#C5272D] py-2 text-[16px] max-sm:text-[14px] text-white transition-all hover:bg-red-500 flex items-center justify-center gap-2 max-sm:gap-1"
            >
              Mua ngay <img src="/shop-white.png" alt="shop" className="w-6 h-6 max-sm:w-4 max-sm:h-4 object-contain" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProductsSection
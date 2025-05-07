import { motion } from 'framer-motion'
import { containerVariants, prizeCardVariants, prizeTitleVariants, prizeCharacterVariants, glowVariants } from '../animations/variants'

const prizes = [
  {
    title: "Giải nhất",
    name: "iPhone 14 Pro Max",
    image: "/iphone.png",
    color: "#F0768E",
    gradientFrom: "#F0768E",
    gradientTo: "#F8E4EF"
  },
  {
    title: "Giải nhì",
    name: "Macbook M2",
    image: "/macbook.png",
    color: "#006352",
    gradientFrom: "#006352",
    gradientTo: "#F9D0CF"
  },
  {
    title: "Giải ba",
    name: "Bàn Phím....",
    image: "/ban-phim.png",
    color: "#49C4D9",
    gradientFrom: "#49C4D9",
    gradientTo: "#D1ECF4"
  },
  {
    title: "Giải khuyến khích",
    name: "Quạt cầm tay",
    image: "/quat.png",
    color: "#F0C034",
    gradientFrom: "#FFB800",
    gradientTo: "#F5EEC4"
  }
]

export default function PrizesSection() {
  return (
    <section id="prizes" className="bg-[#F5EEC4] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-0 flex items-center justify-center">
          <motion.h2
            variants={prizeTitleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-[36px] max-md:text-[28px] max-sm:text-[24px] font-bold text-[#F0C034] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]"
          >
            GIẢI{' '} <br className="max-md:block hidden" /> THƯỞNG
          </motion.h2>
          <motion.div
            variants={prizeCharacterVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-40 w-auto overflow-hidden pl-8"
          >
            <img 
              src="/nv-chanh.png" 
              alt="Prize Character" 
              className="h-full w-auto object-contain"
            />
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-[1080px] max-md:mx-8 grid grid-cols-4 max-md:grid-cols-2 gap-8"
        >
          {prizes.map((prize, index) => (
            <motion.div
              key={prize.title}
              variants={prizeCardVariants}
              whileHover="hover"
              whileTap="tap"
              className="rounded-[16px]"
            >
              <div className="aspect-square">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index }}
                  viewport={{ once: true }}
                  className="aspect-square p-[4px] rounded-[12px]"
                  style={{
                    background: `linear-gradient(to right, ${prize.gradientFrom}, ${prize.gradientTo})`
                  }}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 * index }}
                    viewport={{ once: true }}
                    className="h-full w-full bg-[#E8E8E8] rounded-[8px] overflow-hidden"
                  >
                    <motion.img
                      src={prize.image}
                      alt={prize.name}
                      className="rounded-[8px] h-full w-full object-cover"
                      whileHover={{
                        scale: 1.1,
                        transition: { duration: 0.3 }
                      }}
                    />
                  </motion.div>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index }}
                viewport={{ once: true }}
                className="mt-4 text-center"
              >
                <p className="text-[20px] max-sm:text-[18px] font-bold" style={{ color: prize.color }}>
                  {prize.title}
                </p>
                <p className="text-[18px] max-sm:text-[14px] font-bold text-black">
                  {prize.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
} 
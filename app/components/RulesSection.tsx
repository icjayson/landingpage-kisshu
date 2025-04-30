"use client"

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface RuleItemProps {
  title: string
  content: string
  gradient: string
}

const RuleItem = ({ title, content, gradient }: RuleItemProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="overflow-hidden border-2 border-[#006352] rounded-[16px]">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex w-full items-center justify-between rounded-[0px] ${gradient} p-4 text-left transition-all`}
      >
        <span className="text-[18px] font-medium text-black">{title}</span>
        <ChevronDown className={`h-6 w-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white p-4">
          <p className="text-[16px] text-gray-600">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default function RulesSection() {
  const rules = [
    {
      title: "Đối tượng tham gia chương trình",
      content: "Tất cả khách hàng từ 18 tuổi trở lên, đang sinh sống tại Việt Nam.",
      gradient: "bg-[linear-gradient(90deg,rgba(73,196,217,0.4)_0%,rgba(240,192,52,0.4)_33%,rgba(240,118,142,0.4)_66%,rgba(0,99,82,0.4)_100%)]"
    },
    {
      title: "Cách nhận quà từ chương trình",
      content: "Thu thập điểm thưởng qua việc mua sản phẩm và tham gia các hoạt động trên website.",
      gradient: "bg-[linear-gradient(90deg,rgba(73,196,217,0.4)_0%,rgba(240,192,52,0.4)_33%,rgba(240,118,142,0.4)_66%,rgba(0,99,82,0.4)_100%)]"
    },
    {
      title: "Quy định về quà tặng",
      content: "Quà tặng không có giá trị quy đổi thành tiền mặt. Mỗi khách hàng chỉ được nhận 1 giải thưởng cao nhất.",
      gradient: "bg-[linear-gradient(90deg,rgba(73,196,217,0.4)_0%,rgba(240,192,52,0.4)_33%,rgba(240,118,142,0.4)_66%,rgba(0,99,82,0.4)_100%)]"
    },
    {
      title: "Điều kiện & điều khoản",
      content: "Chương trình có thể thay đổi điều khoản mà không cần báo trước. Quyết định của ban tổ chức là quyết định cuối cùng.",
      gradient: "bg-[linear-gradient(90deg,rgba(73,196,217,0.4)_0%,rgba(240,192,52,0.4)_33%,rgba(240,118,142,0.4)_66%,rgba(0,99,82,0.4)_100%)]"
    }
  ]

  return (
    <section id="rules" className="bg-[#D1ECF4] py-8">
      <div className="container mx-auto px-4">
        <div className="mb-0 flex items-center justify-center">
          <div className="relative h-40 w-auto overflow-hidden pr-8">
            <img 
              src="/nv-bac-ha.png" 
              alt="Rules Character" 
              className="h-full w-auto object-contain"
            />
          </div>
          <h2 className="text-[36px] max-md:text-[24px] font-bold text-[#49C4D9] text-center drop-shadow-[0_2px_2px_rgba(0,0,0,0.1)]">
            THỂ LỆ{' '} <br className="max-md:block hidden" /> CHƯƠNG TRÌNH
          </h2>
        </div>
        <div className="mx-auto w-full max-w-3xl space-y-4">
          {rules.map((rule, index) => (
            <RuleItem key={index} {...rule} />
          ))}
        </div>
      </div>
    </section>
  )
} 
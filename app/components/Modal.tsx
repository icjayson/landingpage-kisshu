import { X } from 'lucide-react'
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  time: string;
  type: 'program1' | 'program2';
}

export default function Modal({
  isOpen,
  onClose,
  title,
  description,
  time,
  type
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    const element = e.currentTarget;
    const isAtTop = element.scrollTop === 0;
    const isAtBottom = element.scrollHeight - element.scrollTop === element.clientHeight;

    if ((isAtTop && e.deltaY < 0) || (isAtBottom && e.deltaY > 0)) {
      e.preventDefault();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-black/50" 
        onClick={onClose}
      />
      
      {/* Modal Content */}
      {type === 'program1' ? (
        <div className="relative flex w-[90%] max-w-[800px] max-h-[90vh] flex-col overflow-hidden rounded-[24px] bg-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto overscroll-none" onWheel={handleWheel}>
            <div className="min-h-0">
              <h2 className="pt-4 text-center max-md:text-[20px] text-[28px] font-bold">CHƯƠNG TRÌNH</h2>
              <h3 className="mt-0 text-center max-md:text-[20px] text-[32px] font-bold text-[#F0768E]">"{title}"</h3>

              <div className="mt-4">
                {/* Image Container */}
                <div className="relative aspect-video w-auto max-md:mx-4 mx-40">
                  <img 
                    src="/chuong-trinh-1.png"
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover rounded-[12px] border-2 border-[#F0768E]"
                  />
                </div>

                {/* Content Container */}
                <div className="bg-gradient-to-b from-white to-[#FFE8F0] max-md:px-4 px-8 py-4">
                  <div>
                    <h4 className="max-md:text-[16px] text-[24px] font-bold text-[#F0768E] text-center">Khám phá bộ sưu tập huy hiệu Kisshu độc đáo</h4>
                    <p className="mt-2 text-[16px] text-gray-600 text-center">Thời gian: {time}</p>
                    <div className="mt-4 space-y-3 max-md:text-[14px] text-[16px] text-black">
                      <p className="leading-relaxed text-center">
                        Sưu tập đầy đủ các huy hiệu Kisshu từ mỗi gói kẹo. Hoàn thành bộ sưu tập để nhận những phần quà đặc biệt và tham gia câu lạc bộ Kisshu độc quyền!
                      </p>
                      
                      <div>
                        <p className="font-bold">Đối tượng tham gia:</p>
                        <p className="mt-1 text-gray-600">Tất cả khách hàng mua sản phẩm kẹo Kisshu trong thời gian diễn ra chương trình.</p>
                      </div>

                      <div>
                        <p className="font-bold">Thể lệ chi tiết:</p>
                        <p className="mt-1 text-gray-600">1. Mua sản phẩm kẹo Kisshu bất kỳ</p>
                        <p className="mt-1 text-gray-600">2. Tìm huy hiệu Kisshu trong mỗi gói kẹo</p>
                        <p className="mt-1 text-gray-600">3. Sưu tập đủ bộ huy hiệu</p>
                        <p className="mt-1 text-gray-600">4. Đăng ký thông tin để nhận quà</p>
                      </div>

                      <div>
                        <p className="font-bold">Giải thưởng:</p>
                        <p className="mt-1 text-gray-600">- Giải Nhất: iPhone 14 Pro Max</p>
                        <p className="mt-1 text-gray-600">- Giải Nhì: Macbook Air M2</p>
                        <p className="mt-1 text-gray-600">- Giải Ba: Bàn phím cơ</p>
                        <p className="mt-1 text-gray-600">- Giải Khuyến khích: Quạt mini cầm tay</p>
                      </div>

                      <div className="mt-4 flex justify-center">
                        <a 
                          href="https://forms.gle/V6KmFRiTNBDJGEFR9" target="_blank" rel="noopener noreferrer"
                          className="rounded-[12px] bg-[#F0768E] px-6 py-2 text-[16px] text-white hover:bg-[#d6607a] transition-all"
                        >
                          Tham gia ngay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="relative flex w-[90%] max-w-[800px] max-h-[90vh] flex-col overflow-hidden rounded-[24px] bg-white">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 z-10 rounded-full p-2 hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Scrollable Content */}
          <div className="overflow-y-auto overscroll-none" onWheel={handleWheel}>
            <div className="min-h-0">
              <h2 className="pt-4 text-center max-md:text-[20px] text-[28px] font-bold">CHƯƠNG TRÌNH</h2>
              <h3 className="mt-0 text-center max-md:text-[20px] text-[32px] font-bold text-[#006352]">"{title}"</h3>

              <div className="mt-4">
                {/* Image Container */}
                <div className="relative aspect-video w-auto max-md:mx-4 mx-40">
                  <img 
                    src="/chuong-trinh-2.png"
                    alt={title}
                    className="absolute inset-0 h-full w-full object-cover rounded-[12px] border-2 border-[#006352]"
                  />
                </div>

                {/* Content Container */}
                <div className="bg-gradient-to-b from-white to-[#D1ECF4] max-md:px-4 px-8 py-4">
                  <div>
                    <h4 className="max-md:text-[16px] text-[24px] font-bold text-[#006352] text-center">Chia sẻ khoảnh khắc cùng Kisshu khắp nơi</h4>
                    <p className="mt-2 text-[16px] text-gray-600 text-center">Thời gian: {time}</p>
                    <div className="mt-4 space-y-3 max-md:text-[14px] text-[16px] text-black">
                      <p className="font-bold leading-relaxed text-center">
                        Chụp ảnh cùng Kisshu tại những địa điểm du lịch nổi tiếng và chia sẻ lên mạng xã hội. Cơ hội rinh những phần quà giá trị và trở thành đại sứ thương hiệu Kisshu!
                      </p>
                      
                      <div>
                        <p className="font-bold">Đối tượng tham gia:</p>
                        <p className="mt-1 text-gray-600">Tất cả khách hàng đã mua và sử dụng sản phẩm kẹo Kisshu.</p>
                      </div>

                      <div>
                        <p className="font-bold">Thể lệ chi tiết:</p>
                        <p className="mt-1 text-gray-600">1. Mua sản phẩm kẹo Kisshu</p>
                        <p className="mt-1 text-gray-600">2. Chụp ảnh check-in cùng sản phẩm</p>
                        <p className="mt-1 text-gray-600">3. Đăng tải lên mạng xã hội với hashtag #KisshuChillMuonNoi</p>
                        <p className="mt-1 text-gray-600">4. Thu thập lượt thích và chia sẻ</p>
                      </div>

                      <div>
                        <p className="font-bold">Giải thưởng:</p>
                        <p className="mt-1 text-gray-600">- Giải Nhất: Chuyến du lịch trị giá 20 triệu</p>
                        <p className="mt-1 text-gray-600">- Giải Nhì: iPhone 14</p>
                        <p className="mt-1 text-gray-600">- Giải Ba: Apple Watch</p>
                        <p className="mt-1 text-gray-600">- Top 10: Quà tặng độc quyền từ Kisshu</p>
                      </div>

                      <div className="mt-4 flex justify-center">
                        <a 
                          href="https://forms.gle/V6KmFRiTNBDJGEFR9"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-[12px] bg-[#006352] px-6 py-2 text-[16px] text-white hover:bg-[#004d3f] transition-all"
                        >
                          Tham gia ngay
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 
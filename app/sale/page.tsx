"use client"

import { useState } from "react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { InfoDisplay } from "@/components/info-display/info-display"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Sale() {
  const [isMobileInfoVisible, setIsMobileInfoVisible] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="flex h-full items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Sale</h1>
          <div className="flex items-center gap-2">
            {/* Mobile toggle button */}
            <button
              className="md:hidden text-sm px-3 py-1 rounded-md border"
              onClick={() => setIsMobileInfoVisible(!isMobileInfoVisible)}
              aria-label="Toggle view"
            >
              {isMobileInfoVisible ? "Show Chat" : "Show Info"}
            </button>
            {/* Theme toggle */}
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Main content area with padding for header */}
      <div className="flex w-full pt-14 h-full">
        {/* Desktop Layout */}
        <div className="hidden md:flex w-full h-full">
          {/* Left Panel - Information Display (60%) */}
          <div className="w-[60%] p-4 h-full overflow-hidden">
            <InfoDisplay summary="từ đầu tháng đến nay, đại lý đã bán ra 43 xe, trong đó các dòng altis, vios và cross vẫn giữ phong độ tốt về doanh số. người bán hàng xuất sắc nhất hiện tại là [trần anh quân] với 13 xe bán ra, vượt chỉ tiêu tháng chỉ trong 12 ngày.hiện tại, tổng số hợp đồng tồn đang xử lý là 21, chủ yếu đang chờ xe về kho và bổ sung hồ sơ ngân hàng. trong nửa đầu tháng, đội ngũ đã ký mới thêm 29 hợp đồng, cho thấy nhu cầu mua xe vẫn ổn định, đặc biệt từ nhóm khách hàng chạy dịch vụ và các doanh nghiệp nhỏ. Về kế hoạch giao xe, từ nay đến cuối tháng dự kiến giao 35 xe, trong đó phần lớn là các đơn hàng trả góp đã hoàn tất hồ sơ, hẹn lịch giao từ 14 đến 26/7." />
          </div>

          {/* Right Panel - Chat Interface (40%) */}
          <div className="w-[40%] border-l">
            <ChatInterface content="Tình hình tư vấn bán hàng bán xe thế nào?" />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full">
          {isMobileInfoVisible ? (
            <div className="p-4 h-full overflow-auto">
              <InfoDisplay summary="từ đầu tháng đến nay, đại lý đã bán ra 43 xe, trong đó các dòng altis, vios và cross vẫn giữ phong độ tốt về doanh số. người bán hàng xuất sắc nhất hiện tại là [trần anh quân] với 13 xe bán ra, vượt chỉ tiêu tháng chỉ trong 12 ngày.hiện tại, tổng số hợp đồng tồn đang xử lý là 21, chủ yếu đang chờ xe về kho và bổ sung hồ sơ ngân hàng. trong nửa đầu tháng, đội ngũ đã ký mới thêm 29 hợp đồng, cho thấy nhu cầu mua xe vẫn ổn định, đặc biệt từ nhóm khách hàng chạy dịch vụ và các doanh nghiệp nhỏ. Về kế hoạch giao xe, từ nay đến cuối tháng dự kiến giao 35 xe, trong đó phần lớn là các đơn hàng trả góp đã hoàn tất hồ sơ, hẹn lịch giao từ 14 đến 26/7."/>
            </div>
          ) : (
            <ChatInterface className="h-full" content="Tình hình tư vấn bán hàng bán xe thế nào?" />
          )}
        </div>
      </div>
    </div>
  )
}
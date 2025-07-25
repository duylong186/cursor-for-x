"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StackedBarChart } from "@/components/charts/stacked-bar-chart"
import { IncomeStatement } from "@/components/charts/income-statement"

interface InfoDisplayProps {
  className?: string
  summary?: string
}

export function InfoDisplay({ className, summary }: InfoDisplayProps) {
  const [activeFilter, setActiveFilter] = useState<string | null>(null)
  const [dataPoints, setDataPoints] = useState({ point1: 15, point2: 900000000 })

  const handleFilterClick = (filter: string) => {
    setActiveFilter(activeFilter === filter ? null : filter)
    
    // Simulate data update based on filter
    if (filter === "Filter 1") {
      setDataPoints({ point1: 84, point2: 256 })
    } else if (filter === "Filter 2") {
      setDataPoints({ point1: 21, point2: 64 })
    } else if (filter === "Filter 3") {
      setDataPoints({ point1: 63, point2: 192 })
    } else {
      setDataPoints({ point1: 42, point2: 128 })
    }
  }

  return (
    <Card className={`w-full h-full flex flex-col ${className}`}>
      <div className="p-6 overflow-y-auto">
        <h2 className="text-2xl font-bold mb-4">Overview</h2>
        <div className="space-y-2">
          <h3 className="font-semibold">Yếu tố tương tác</h3>
          <div className="flex gap-2 flex-wrap">
            {["Daily", "Monthly", "Quarterly", "Yearly"].map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                size="sm"
                onClick={() => handleFilterClick(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>
        {activeFilter && (
          <span className="block mt-2 text-primary">
            Active filter: {activeFilter}
          </span>
        )}
        <div className="space-y-4 mt-6">
        <div className="p-4 bg-muted rounded-lg">
          <h3 className="font-semibold mb-2">Summary</h3>
          <p className="text-sm text-muted-foreground">
          {summary || "Chỉ trong ngày 11/7/2025, Toyota Hà Đông ghi nhận doanh thu hơn 7,2 tỷ đồng, 900 triệu đồng đến từ mảng dịch vụ, tương đương với 15 xe bán ra, chủ yếu là các mẫu hot như Vios, Cross và Fortuner. Trong đó, mẫu Toyota Vios chiếm gần 40% doanh số, tiếp tục là lựa chọn hàng đầu của khách hàng khu vực Hà Đông và lân cận. Lợi nhuận gộp ước tính trong ngày đạt khoảng 650 triệu đồng, sau khi trừ chi phí bán hàng và vận hành. Dòng tiền thuần từ hoạt động kinh doanh trong ngày đạt xấp xỉ 600 triệu đồng, cho thấy khả năng thanh khoản và hiệu quả quản lý tài chính ngắn hạn của đại lý. Ngoài ra, dịch vụ hậu mãi và bảo dưỡng cũng phục vụ gần 40 lượt xe, đóng góp thêm nguồn thu ổn định và duy trì mối quan hệ tốt với khách hàng sau bán hàng."}
          </p>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <Card className="p-4 transition-all duration-300 hover:shadow-lg">
            <h4 className="font-medium mb-2">Số lượng xe bán ra</h4>
            <p className="text-2xl font-bold">{dataPoints.point1}</p>
          </Card>
          <Card className="p-4 transition-all duration-300 hover:shadow-lg">
            <h4 className="font-medium mb-2">Doanh thu dịch vụ</h4>
            <p className="text-2xl font-bold">{dataPoints.point2.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
          </Card>
        </div>

          <div className="mt-6">
            <Tabs defaultValue="graph" className="w-full">
              <TabsList className="grid w-full grid-cols-2 max-w-md">
                <TabsTrigger value="graph">Graph</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
              </TabsList>
              <TabsContent value="graph" className="mt-4">
                <div className="p-4 border rounded-lg">
                  <div className="h-64">
                    <StackedBarChart />
                  </div>
                </div>
              </TabsContent>
              <TabsContent value="data" className="mt-4 overflow-x-auto">
                <IncomeStatement />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </Card>
  )
}
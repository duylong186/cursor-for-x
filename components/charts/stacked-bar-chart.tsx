"use client"

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

interface StackedBarChartProps {
  className?: string
}

export function StackedBarChart({ className }: StackedBarChartProps) {
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      title: {
        display: false,
      },
      legend: {
        position: 'top' as const,
        labels: {
          boxWidth: 15,
          padding: 15,
        },
      },
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
      },
      y: {
        stacked: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)',
        },
        ticks: {
          stepSize: 50,
        },
      },
    },
  }

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [-5, -5, 35, 85, 45, -25, -15],
        backgroundColor: 'rgba(236, 72, 153, 0.8)',
        borderWidth: 0,
      },
      {
        label: 'Dataset 2',
        data: [5, 20, -70, 95, 40, -15, 20],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderWidth: 0,
      },
      {
        label: 'Dataset 3',
        data: [90, 70, 30, 70, 20, -10, 15],
        backgroundColor: 'rgba(45, 212, 191, 0.8)',
        borderWidth: 0,
      },
    ],
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Bar options={options} data={data} />
    </div>
  )
}
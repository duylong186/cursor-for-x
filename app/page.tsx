"use client"

import { useState } from "react"
import { ChatInterface } from "@/components/chat/chat-interface"
import { InfoDisplay } from "@/components/info-display/info-display"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  const [isMobileInfoVisible, setIsMobileInfoVisible] = useState(true)

  return (
    <div className="flex h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 h-14 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-10">
        <div className="flex h-full items-center justify-between px-4">
          <h1 className="text-lg font-semibold">Chat UI</h1>
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
        <div className="hidden md:flex w-full">
          {/* Left Panel - Information Display (60%) */}
          <div className="w-[60%] p-4">
            <InfoDisplay />
          </div>

          {/* Right Panel - Chat Interface (40%) */}
          <div className="w-[40%] border-l">
            <ChatInterface />
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden w-full">
          {isMobileInfoVisible ? (
            <div className="p-4 h-full overflow-auto">
              <InfoDisplay />
            </div>
          ) : (
            <ChatInterface className="h-full" />
          )}
        </div>
      </div>
    </div>
  )
}
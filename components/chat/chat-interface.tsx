"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export interface Message {
  id: string
  content: string
  sender: "user" | "other"
  timestamp: Date
}

interface ChatInterfaceProps {
  className?: string
  content?: string
}

export function ChatInterface({ className, content = "Welcome to the chat interface!" }: ChatInterfaceProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content: content,
      sender: "other",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: Message = {
        id: Date.now().toString(),
        content: inputValue,
        sender: "user",
        timestamp: new Date(),
      }
      setMessages([...messages, newMessage])
      setInputValue("")

      // Simulate a response after 1 second
      setTimeout(() => {
        const response: Message = {
          id: (Date.now() + 1).toString(),
          content: `You said: "${inputValue}"`,
          sender: "other",
          timestamp: new Date(),
        }
        setMessages(prev => [...prev, response])
      }, 1000)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  return (
    <div className={`flex flex-col h-full ${className}`}>
      {/* Chat messages area */}
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <Card
                className={`max-w-[80%] p-3 ${
                  message.sender === "user"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted"
                }`}
              >
                <p className="text-sm">{message.content}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </p>
              </Card>
            </div>
          ))}
        </div>
      </ScrollArea>

      {/* Message input area */}
      <div className="border-t p-4">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type a message..."
            className="flex-1"
            aria-label="Message input"
          />
          <Button onClick={sendMessage} aria-label="Send message">
            Send
          </Button>
        </div>
      </div>
    </div>
  )
}
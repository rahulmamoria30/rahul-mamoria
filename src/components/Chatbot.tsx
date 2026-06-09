"use client"

import { useState, useRef, useEffect, FormEvent } from "react"
import { cn } from "@/lib/utils"
import {
  MessageCircle,
  X,
  Send,
  Bot,
  User,
  Maximize2,
  Minimize2,
} from "lucide-react"
import ReactMarkdown from "react-markdown"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      role: "assistant",
      content:
        "नमस्ते! 🙏 I'm NamasteBot — Rahul's AI assistant. Ask me anything about his experience, skills, projects, or background!",
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const trimmed = input.trim()
    if (!trimmed || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: trimmed,
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      const res = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: trimmed }),
      })

      const data = await res.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.reply || data.error || "Sorry, I couldn't process that.",
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          "bg-primary text-primary-foreground",
          isOpen && "rotate-90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className={cn(
            "fixed z-50 flex flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl transition-all duration-300",
            isExpanded
              ? "bottom-4 right-4 left-4 top-4 sm:bottom-6 sm:right-6 sm:left-auto sm:top-6 sm:w-[600px]"
              : "bottom-24 right-6 h-[500px] w-[380px] max-w-[calc(100vw-2rem)]"
          )}
        >
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border bg-primary/5 px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10">
              <Bot className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold">NamasteBot</p>
              <p className="text-xs text-muted-foreground">
                Ask me anything about Rahul
              </p>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
                aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
              >
                {isExpanded ? (
                  <Minimize2 className="h-4 w-4 text-muted-foreground" />
                ) : (
                  <Maximize2 className="h-4 w-4 text-muted-foreground" />
                )}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-md hover:bg-accent transition-colors"
                aria-label="Close chat"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={cn(
                  "flex gap-2",
                  msg.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {msg.role === "assistant" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[75%] rounded-xl px-3 py-2 text-sm leading-relaxed",
                    msg.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-foreground"
                  )}
                >
                  {msg.role === "assistant" ? (
                    <ReactMarkdown
                      components={{
                        p: ({ children }) => (
                          <p className="mb-1 last:mb-0">{children}</p>
                        ),
                        strong: ({ children }) => (
                          <strong className="font-semibold">{children}</strong>
                        ),
                        ul: ({ children }) => (
                          <ul className="list-disc pl-4 mb-1">{children}</ul>
                        ),
                        ol: ({ children }) => (
                          <ol className="list-decimal pl-4 mb-1">{children}</ol>
                        ),
                        li: ({ children }) => (
                          <li className="mb-0.5">{children}</li>
                        ),
                        a: ({ href, children }) => (
                          <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary underline"
                          >
                            {children}
                          </a>
                        ),
                        code: ({ children }) => (
                          <code className="bg-background/50 px-1 py-0.5 rounded text-xs">
                            {children}
                          </code>
                        ),
                      }}
                    >
                      {msg.content}
                    </ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </div>
                {msg.role === "user" && (
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <User className="h-4 w-4 text-primary" />
                  </div>
                )}
              </div>
            ))}
            {isLoading && (
              <div className="flex gap-2">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Bot className="h-4 w-4 text-primary" />
                </div>
                <div className="rounded-xl bg-muted px-3 py-2">
                  <div className="flex gap-1">
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-primary/50"
                      style={{ animationDelay: "0ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-primary/50"
                      style={{ animationDelay: "150ms" }}
                    />
                    <span
                      className="h-2 w-2 animate-bounce rounded-full bg-primary/50"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-center gap-2 border-t border-border px-4 py-3"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about Rahul..."
              maxLength={500}
              className="flex-1 rounded-lg border border-border bg-background/50 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  )
}

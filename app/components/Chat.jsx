"use client"

import { useState } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import styles from "../styles/Chat.module.css"

export default function Chat() {
  const { language } = useApp()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([{ id: 1, text: "Welcome to the community chat!", user: "system" }])
  const [inputValue, setInputValue] = useState("")
  const t = translations[language]

  const sendMessage = () => {
    if (inputValue.trim()) {
      const newMessage = {
        id: messages.length + 1,
        text: inputValue,
        user: "me",
      }
      setMessages([...messages, newMessage])
      setInputValue("")


      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: "Thanks for your message! Our community will respond soon.",
            user: "other",
          },
        ])
      }, 1000)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      sendMessage()
    }
  }

  return (
    <div className={styles.chatContainer}>
      <button className={styles.chatToggle} onClick={() => setIsOpen(!isOpen)}>
        💬
      </button>

      {isOpen && (
        <div className={styles.chatWindow}>
          <div className={styles.chatHeader}>
            <span>{t.chat.title}</span>
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              ×
            </button>
          </div>

          <div className={styles.chatMessages}>
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`${styles.message} ${msg.user === "me" ? styles.messageUser : styles.messageOther}`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div className={styles.chatInput}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={t.chat.placeholder}
            />
            <button className={styles.sendBtn} onClick={sendMessage}>
              {t.chat.send}
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

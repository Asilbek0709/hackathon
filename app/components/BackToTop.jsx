"use client"

import { useState, useEffect } from "react"
import { translations } from "../i18n/translations"
import styles from "../styles/BackToTop.module.css"

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <button
      className={`${styles.backToTop} ${isVisible ? styles.visible : ""}`}
      onClick={scrollToTop}
      aria-label={translations.backToTop}
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  )
}

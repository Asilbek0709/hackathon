"use client"

import { useState, useEffect } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import styles from "../styles/Footer.module.css"

export default function Footer() {
  const { language } = useApp()
  const [showBackToTop, setShowBackToTop] = useState(false)
  const t = translations[language]

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerGrid}>
            <div className={styles.footerSection}>
              <h3>{t.nav.about}</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#about">{t.nav.about}</a>
                </li>
                <li>
                  <a href="#map">{t.nav.map}</a>
                </li>
                <li>
                  <a href="#results">{t.nav.results}</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>{t.nav.support}</h3>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="#faq">{t.nav.faq}</a>
                </li>
                <li>
                  <a href="#contact">{t.nav.contact}</a>
                </li>
                <li>
                  <a href="#support">{t.nav.support}</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h3>{t.nav.contact}</h3>
              <ul className={styles.footerLinks}>
                <li>Email: info@adaptivesports.com</li>
                <li>Phone: +1 234 567 890</li>
              </ul>
            </div>
          </div>

          <div className={styles.copyright}>{t.footer.copyright}</div>
        </div>
      </footer>

      <button
        className={`${styles.backToTop} ${showBackToTop ? styles.visible : ""}`}
        onClick={scrollToTop}
        aria-label={t.footer.backToTop}
      >
        ↑
      </button>
    </>
  )
}

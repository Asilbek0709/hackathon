"use client"

import { useState } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import styles from "../styles/Header.module.css"
import ThemeSwitch from "./ThemeSwitch"
import AuthModal from "./AuthModal"

export default function Header() {
  const { language, changeLanguage, user } = useApp()
  const [showAuth, setShowAuth] = useState(false)
  const [authMode, setAuthMode] = useState("signin")
  const t = translations[language]

  const openAuth = (mode) => {
    setAuthMode(mode)
    setShowAuth(true)
  }

  return (
    <>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.logo}>{t.siteName}</div>

          <nav className={styles.nav}>
            <a href="#home" className={styles.navLink}>
              {t.nav.home}
            </a>
            <a href="#about" className={styles.navLink}>
              {t.nav.about}
            </a>
            <a href="#map" className={styles.navLink}>
              {t.nav.map}
            </a>
            {user && (
              <a href="/trainers" className={styles.navLink}>
                {t.nav.trainers}
              </a>
            )}
            <a href="#faq" className={styles.navLink}>
              {t.nav.faq}
            </a>
            <a href="#contact" className={styles.navLink}>
              {t.nav.contact}
            </a>
          </nav>

          <div className={styles.controls}>
            <select className={styles.langSelector} value={language} onChange={(e) => changeLanguage(e.target.value)}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              <option value="uz">O'zbek</option>
            </select>

            

            {user ? (
              <a href="/profile" className={styles.profileBtn}>
                {user.name.charAt(0).toUpperCase()}
              </a>
            ) : (
              <div className={styles.authButtons}>
                <button className={styles.signInBtn} onClick={() => openAuth("signin")}>
                  {t.header.signIn}
                </button>
                <button className={styles.signUpBtn} onClick={() => openAuth("signup")}>
                  {t.header.signUp}
                </button>
              </div>
            )}
          </div>
        </div>
      </header>

      {showAuth && <AuthModal mode={authMode} onClose={() => setShowAuth(false)} />}
    </>
  )
}

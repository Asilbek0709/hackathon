"use client"

import { useEffect } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import Header from "../components/Header"
import Footer from "../components/Footer"
import Chat from "../components/Chat"
import RecommendationsModal from "../components/RecommendationsModal"
import styles from "../styles/Dashboard.module.css"

export default function Dashboard() {
  const { language, user, showRecommendations } = useApp()
  const t = translations[language]

  useEffect(() => {
    if (!user) {
      window.location.href = "/"
    }
  }, [user])

  if (!user) return null

  return (
    <>
      <Header />

      <main className={styles.dashboard}>
        <section className={styles.hero}>
          <h1 className={styles.title}>{t.dashboard.title}</h1>
          <p className={styles.subtitle}>{t.dashboard.subtitle}</p>
        </section>

        <section className={styles.content}>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h2>{t.dashboard.myTrainers}</h2>
              <p>Connect with specialized trainers</p>
              <a href="/trainers" className={styles.cardBtn}>
                {t.dashboard.browseTrainers}
              </a>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <h2>{t.dashboard.recommendedSports}</h2>
              <p>Sports tailored to your abilities</p>
              <button className={styles.cardBtn}>{t.dashboard.exploreSports}</button>
            </div>

            <div className={styles.card}>
              <div className={styles.cardIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h2>{t.dashboard.upcomingEvents}</h2>
              <p>Join community events</p>
              <button className={styles.cardBtn}>View Events</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <Chat />

      {showRecommendations && <RecommendationsModal />}
    </>
  )
}

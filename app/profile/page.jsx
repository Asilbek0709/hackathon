"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Profile.module.css"

export default function Profile() {
  const router = useRouter()
  const { user, logout, language, theme } = useApp()
  const t = translations[language]

  useEffect(() => {
    if (!user) {
      router.push("/")
    }
  }, [user, router])

  if (!user) return null

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  return (
    <>
      <Header />
      <div className={styles.profileContainer}>
        <div className={styles.profileHeader}>
          <div className={styles.profileAvatar}>{user.name.charAt(0).toUpperCase()}</div>
          <h1 className={styles.profileName}>{user.name}</h1>
          <p className={styles.profileEmail}>{user.email}</p>
        </div>

        <div className={styles.profileContent}>
          <div className={styles.profileCard}>
            <h2 className={styles.cardTitle}>{t.profile.personalInfo}</h2>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.contact.name}:</span>
              <span>{user.name}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.contact.email}:</span>
              <span>{user.email}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.profile.memberSince}:</span>
              <span>2024</span>
            </div>
            <button className={styles.editBtn}>{t.profile.edit}</button>
          </div>

          <div className={styles.profileCard}>
            <h2 className={styles.cardTitle}>{t.profile.accountSettings}</h2>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.profile.language}:</span>
              <span>{language.toUpperCase()}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.profile.theme}:</span>
              <span>{theme === "dark" ? "Dark" : "Light"}</span>
            </div>
            <div className={styles.infoItem}>
              <span className={styles.infoLabel}>{t.profile.notifications}:</span>
              <span>{t.profile.enabled}</span>
            </div>
            <button className={styles.logoutBtn} onClick={handleLogout}>
              {t.profile.logout}
            </button>
          </div>

          <div className={styles.profileCard}>
            <h2 className={styles.cardTitle}>{t.profile.activities}</h2>
            <div className={styles.activityList}>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>🏃</span>
                <div className={styles.activityInfo}>
                  <div className={styles.activityName}>Running Club</div>
                  <div className={styles.activityDate}>Last activity: 2 days ago</div>
                </div>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>🏊</span>
                <div className={styles.activityInfo}>
                  <div className={styles.activityName}>Swimming Sessions</div>
                  <div className={styles.activityDate}>Last activity: 1 week ago</div>
                </div>
              </div>
              <div className={styles.activityItem}>
                <span className={styles.activityIcon}>🚴</span>
                <div className={styles.activityInfo}>
                  <div className={styles.activityName}>Cycling Group</div>
                  <div className={styles.activityDate}>Last activity: 3 days ago</div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.profileCard}>
            <h2 className={styles.cardTitle}>{t.profile.achievements}</h2>
            <div className={styles.achievementGrid}>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>🏆</span>
                <span className={styles.badgeName}>First Event</span>
              </div>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>⭐</span>
                <span className={styles.badgeName}>10 Activities</span>
              </div>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>🎯</span>
                <span className={styles.badgeName}>Goal Achiever</span>
              </div>
              <div className={styles.achievementBadge}>
                <span className={styles.badgeIcon}>💪</span>
                <span className={styles.badgeName}>Strong Start</span>
              </div>
            </div>
          </div>

          <div className={styles.profileCard}>
            <h2 className={styles.cardTitle}>{t.profile.upcomingEvents}</h2>
            <div className={styles.eventList}>
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <div className={styles.eventDay}>15</div>
                  <div className={styles.eventMonth}>Jan</div>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventName}>Adaptive Basketball Tournament</div>
                  <div className={styles.eventLocation}>📍 Community Sports Center</div>
                </div>
              </div>
              <div className={styles.eventItem}>
                <div className={styles.eventDate}>
                  <div className={styles.eventDay}>22</div>
                  <div className={styles.eventMonth}>Jan</div>
                </div>
                <div className={styles.eventDetails}>
                  <div className={styles.eventName}>Swimming Workshop</div>
                  <div className={styles.eventLocation}>📍 Aquatic Center</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

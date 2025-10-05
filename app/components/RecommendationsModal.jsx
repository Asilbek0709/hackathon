"use client"

import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import styles from "../styles/Recommendations.module.css"

const sportRecommendations = {
  mobility: [
    { name: "Wheelchair Basketball", icon: "🏀", description: "Fast-paced team sport" },
    { name: "Wheelchair Racing", icon: "🏃", description: "Speed and endurance" },
    { name: "Adaptive Swimming", icon: "🏊", description: "Full body workout" },
    { name: "Wheelchair Tennis", icon: "🎾", description: "Competitive racket sport" },
    { name: "Boccia", icon: "🎯", description: "Precision ball sport" },
  ],
  visual: [
    { name: "Goalball", icon: "⚽", description: "Team ball sport for blind athletes" },
    { name: "Blind Football", icon: "⚽", description: "Adapted soccer" },
    { name: "Judo", icon: "🥋", description: "Martial arts" },
    { name: "Track & Field", icon: "🏃", description: "Running with guides" },
    { name: "Tandem Cycling", icon: "🚴", description: "Cycling with pilot" },
  ],
  hearing: [
    { name: "Deaf Basketball", icon: "🏀", description: "Visual communication" },
    { name: "Deaf Football", icon: "⚽", description: "Team sport" },
    { name: "Swimming", icon: "🏊", description: "Individual sport" },
    { name: "Track & Field", icon: "🏃", description: "Athletics" },
    { name: "Volleyball", icon: "🏐", description: "Team sport" },
  ],
  cognitive: [
    { name: "Special Olympics Basketball", icon: "🏀", description: "Team sport" },
    { name: "Swimming", icon: "🏊", description: "Individual sport" },
    { name: "Bowling", icon: "🎳", description: "Precision sport" },
    { name: "Track & Field", icon: "🏃", description: "Athletics" },
    { name: "Gymnastics", icon: "🤸", description: "Flexibility and strength" },
  ],
  amputee: [
    { name: "Para Athletics", icon: "🏃", description: "Track and field" },
    { name: "Para Swimming", icon: "🏊", description: "Competitive swimming" },
    { name: "Sitting Volleyball", icon: "🏐", description: "Team sport" },
    { name: "Para Cycling", icon: "🚴", description: "Road and track" },
    { name: "Para Powerlifting", icon: "🏋️", description: "Strength sport" },
  ],
  cerebralPalsy: [
    { name: "Boccia", icon: "🎯", description: "Precision ball sport" },
    { name: "CP Football", icon: "⚽", description: "Adapted soccer" },
    { name: "Swimming", icon: "🏊", description: "Water sport" },
    { name: "Track & Field", icon: "🏃", description: "Athletics" },
    { name: "Cycling", icon: "🚴", description: "Adapted cycling" },
  ],
  other: [
    { name: "Adaptive Yoga", icon: "🧘", description: "Flexibility and mindfulness" },
    { name: "Swimming", icon: "🏊", description: "Low impact exercise" },
    { name: "Adaptive Fitness", icon: "💪", description: "Strength training" },
    { name: "Boccia", icon: "🎯", description: "Precision sport" },
    { name: "Table Tennis", icon: "🏓", description: "Fast reflexes" },
  ],
}

export default function RecommendationsModal() {
  const { user, closeRecommendations, language } = useApp()
  const t = translations[language]

  if (!user) return null

  const recommendations = sportRecommendations[user.disabilityType] || sportRecommendations.other

  return (
    <div className={styles.modal} onClick={closeRecommendations}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={closeRecommendations}>
          ×
        </button>

        <h2 className={styles.title}>{t.recommendations.title}</h2>
        <p className={styles.subtitle}>{t.recommendations.subtitle}</p>

        <div className={styles.sportsGrid}>
          {recommendations.map((sport, index) => (
            <div key={index} className={styles.sportCard}>
              <div className={styles.sportIcon}>{sport.icon}</div>
              <h3 className={styles.sportName}>{sport.name}</h3>
              <p className={styles.sportDescription}>{sport.description}</p>
              <button className={styles.getStartedBtn}>{t.recommendations.getStarted}</button>
            </div>
          ))}
        </div>

        <button className={styles.closeButton} onClick={closeRecommendations}>
          {t.recommendations.close}
        </button>
      </div>
    </div>
  )
}

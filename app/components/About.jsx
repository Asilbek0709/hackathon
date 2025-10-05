"use client"

import { useEffect, useRef } from "react"
import styles from "../styles/About.module.css"
import { useTranslation } from "../hooks/useTranslation"

export default function About() {
  const t = useTranslation()
  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight

          if (scrollProgress > 0 && scrollProgress < 1) {
            const translateY = (1 - scrollProgress) * 50
            const opacity = Math.min(scrollProgress * 2, 1)
            card.style.transform = `translateY(${translateY}px)`
            card.style.opacity = opacity
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section className={styles.about} id="about">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.about.title}</h2>
          <p className={styles.subtitle}>{t.about.subtitle}</p>
          <p className={styles.description}>{t.about.description}</p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card} ref={(el) => (cardsRef.current[0] = el)}>
            <div className={styles.cardIcon}>🏀</div>
            <h3 className={styles.cardTitle}>{t.about.card1Title}</h3>
            <p className={styles.cardText}>{t.about.card1Text}</p>
          </div>

          <div className={styles.card} ref={(el) => (cardsRef.current[1] = el)}>
            <div className={styles.cardIcon}>👨‍🏫</div>
            <h3 className={styles.cardTitle}>{t.about.card2Title}</h3>
            <p className={styles.cardText}>{t.about.card2Text}</p>
          </div>

          <div className={styles.card} ref={(el) => (cardsRef.current[2] = el)}>
            <div className={styles.cardIcon}>🏟️</div>
            <h3 className={styles.cardTitle}>{t.about.card3Title}</h3>
            <p className={styles.cardText}>{t.about.card3Text}</p>
          </div>
        </div>

        <div className={styles.values}>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>{t.about.mission}</h4>
            <p className={styles.valueText}>{t.about.missionText}</p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>{t.about.vision}</h4>
            <p className={styles.valueText}>{t.about.visionText}</p>
          </div>
          <div className={styles.valueCard}>
            <h4 className={styles.valueTitle}>{t.about.values}</h4>
            <p className={styles.valueText}>{t.about.valuesText}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

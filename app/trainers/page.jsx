"use client"

import { useEffect, useRef } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import Header from "../components/Header"
import Footer from "../components/Footer"
import styles from "../styles/Trainers.module.css"

const trainersData = [
  {
    id: 1,
    name: "John Smith",
    specialization: "Wheelchair Basketball",
    experience: "10 years",
    sports: ["Basketball", "Wheelchair Racing"],
    image: "/wheelchair-basketball-trainer.jpg",
  },
  {
    id: 2,
    name: "Maria Garcia",
    specialization: "Adaptive Swimming",
    experience: "8 years",
    sports: ["Swimming", "Water Therapy"],
    image: "/adaptive-swimming-trainer.jpg",
  },
  {
    id: 3,
    name: "David Chen",
    specialization: "Para Athletics",
    experience: "12 years",
    sports: ["Track & Field", "Long Jump"],
    image: "/para-athletics-trainer.jpg",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    specialization: "Goalball",
    experience: "6 years",
    sports: ["Goalball", "Blind Football"],
    image: "/goalball-trainer.jpg",
  },
  {
    id: 5,
    name: "Ahmed Hassan",
    specialization: "Boccia",
    experience: "9 years",
    sports: ["Boccia", "Precision Sports"],
    image: "/boccia-trainer.jpg",
  },
  {
    id: 6,
    name: "Lisa Anderson",
    specialization: "Adaptive Yoga",
    experience: "7 years",
    sports: ["Yoga", "Meditation", "Flexibility"],
    image: "/adaptive-yoga-trainer.jpg",
  },
]

export default function Trainers() {
  const { language, user } = useApp()
  const t = translations[language]
  const parallaxRef = useRef(null)

  useEffect(() => {
    if (!user) {
      window.location.href = "/"
    }

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.scrollY
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.3}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [user])

  if (!user) return null

  return (
    <>
      <Header />

      <main className={styles.trainersPage}>
        <section className={styles.hero}>
          <div className={styles.parallaxBg} ref={parallaxRef}></div>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>{t.trainers.title}</h1>
            <p className={styles.subtitle}>{t.trainers.subtitle}</p>
          </div>
        </section>

        <section className={styles.trainersSection}>
          <div className={styles.trainersGrid}>
            {trainersData.map((trainer) => (
              <div key={trainer.id} className={styles.trainerCard}>
                <div className={styles.trainerImageWrapper}>
                  <img src={trainer.image || "/placeholder.svg"} alt={trainer.name} className={styles.trainerImage} />
                </div>
                <div className={styles.trainerInfo}>
                  <h3 className={styles.trainerName}>{trainer.name}</h3>
                  <div className={styles.trainerDetail}>
                    <strong>{t.trainers.specialization}:</strong> {trainer.specialization}
                  </div>
                  <div className={styles.trainerDetail}>
                    <strong>{t.trainers.experience}:</strong> {trainer.experience}
                  </div>
                  <div className={styles.trainerSports}>
                    <strong>{t.trainers.sports}:</strong>
                    <div className={styles.sportsTags}>
                      {trainer.sports.map((sport, index) => (
                        <span key={index} className={styles.sportTag}>
                          {sport}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className={styles.trainerActions}>
                    <button className={styles.contactBtn}>{t.trainers.contact}</button>
                    <button className={styles.viewProfileBtn}>{t.trainers.viewProfile}</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

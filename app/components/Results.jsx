"use client"

import { useEffect, useRef } from "react"
import styles from "../styles/Results.module.css"
import { useTranslation } from "../hooks/useTranslation"

export default function Results() {
  const t = useTranslation()
  const cardsRef = useRef([])

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card) => {
        if (card) {
          const rect = card.getBoundingClientRect()
          const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight

          if (scrollProgress > 0 && scrollProgress < 1) {
            const translateX = (1 - scrollProgress) * 100
            const opacity = Math.min(scrollProgress * 2, 1)
            card.style.transform = `translateX(${translateX}px)`
            card.style.opacity = opacity
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const events = [
    {
      title: "National Wheelchair Basketball Championship",
      date: "March 15, 2025",
      location: "Tashkent Sports Arena",
      description: "Annual championship featuring top adaptive basketball teams",
    },
    {
      title: "Para-Swimming Competition",
      date: "April 22, 2025",
      location: "Olympic Pool Complex",
      description: "Regional swimming competition for athletes with disabilities",
    },
    {
      title: "Adaptive Athletics Meet",
      date: "May 10, 2025",
      location: "Central Stadium",
      description: "Track and field events for para-athletes of all levels",
    },
  ]

  return (
    <section className={styles.results} id="results">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Upcoming Events & Results</h2>
          <p className={styles.subtitle}>Join us in celebrating athletic excellence</p>
        </div>

        <div className={styles.grid}>
          {events.map((event, index) => (
            <div key={index} className={styles.card} ref={(el) => (cardsRef.current[index] = el)}>
              <div className={styles.cardHeader}>
                <span className={styles.date}>{event.date}</span>
                <span className={styles.badge}>Upcoming</span>
              </div>
              <h3 className={styles.cardTitle}>{event.title}</h3>
              <p className={styles.location}>📍 {event.location}</p>
              <p className={styles.description}>{event.description}</p>
              <button className={styles.button}>Learn More</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

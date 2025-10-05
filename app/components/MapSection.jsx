"use client"

import { useEffect, useRef, useState } from "react"
import styles from "../styles/MapSection.module.css"
import { useTranslation } from "../hooks/useTranslation"

export default function MapSection() {
  const t = useTranslation()
  const mapRef = useRef(null)
  const [map, setMap] = useState(null)
  const sectionRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect()
        const scrollProgress = (window.innerHeight - rect.top) / window.innerHeight

        if (scrollProgress > 0 && scrollProgress < 1) {
          const scale = 0.95 + scrollProgress * 0.05
          sectionRef.current.style.transform = `scale(${scale})`
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (typeof window !== "undefined" && mapRef.current && !map) {
      import("leaflet").then((L) => {
        const newMap = L.map(mapRef.current).setView([41.2995, 69.2401], 12)

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: "© OpenStreetMap contributors",
        }).addTo(newMap)

        const venues = [
          { lat: 41.2995, lng: 69.2401, name: "Central Sports Complex", type: "sports" },
          { lat: 41.3111, lng: 69.2797, name: "Adaptive Training Center", type: "training" },
          { lat: 41.2856, lng: 69.2034, name: "Therapy & Wellness Center", type: "therapy" },
        ]

        venues.forEach((venue) => {
          L.marker([venue.lat, venue.lng]).addTo(newMap).bindPopup(`<b>${venue.name}</b><br>${venue.type}`)
        })

        setMap(newMap)
      })
    }

    return () => {
      if (map) {
        map.remove()
      }
    }
  }, [])

  return (
    <section className={styles.mapSection} id="map" ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.map.title}</h2>
          <p className={styles.subtitle}>{t.map.subtitle}</p>
        </div>

        <div className={styles.mapContainer}>
          <div ref={mapRef} className={styles.map} />
        </div>

        <div className={styles.legend}>
          <div className={styles.legendItem}>
            <span className={styles.legendIcon}>🏋️</span>
            <span>{t.map.muscleTraining}</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendIcon}>⚽</span>
            <span>{t.map.sportsVenues}</span>
          </div>
          <div className={styles.legendItem}>
            <span className={styles.legendIcon}>🏥</span>
            <span>{t.map.therapyCenters}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

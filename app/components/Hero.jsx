"use client"

import { useEffect, useRef } from "react"
import styles from "../styles/Hero.module.css"
import { useTranslation } from "../hooks/useTranslation"
import Male from './male.jpg'

export default function Hero() {
  const t = useTranslation()
  const parallaxRef = useRef(null)
  const contentRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrolled * 0.0002})`
      }

      if (contentRef.current) {
        const opacity = 1 - scrolled / 500
        contentRef.current.style.opacity = Math.max(opacity, 0)
        contentRef.current.style.transform = `translateY(${scrolled * 0.2}px)`
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className={styles.hero} id="home">
      <div className={styles.parallaxBg} ref={parallaxRef}>
        <img
          src="https://media.istockphoto.com/id/1182714409/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BF%D0%BE%D0%BF%D1%8B%D1%82%D0%BA%D0%B0-%D0%B1%D0%BB%D0%BE%D0%BA%D0%B0-%D0%B2%D0%BE-%D0%B2%D1%80%D0%B5%D0%BC%D1%8F-%D0%B8%D0%B3%D1%80%D1%8B-%D0%B2-%D0%B1%D0%B0%D1%81%D0%BA%D0%B5%D1%82%D0%B1%D0%BE%D0%BB-%D0%BD%D0%B0-%D0%B8%D0%BD%D0%B2%D0%B0%D0%BB%D0%B8%D0%B4%D0%BD%D1%8B%D1%85-%D0%BA%D0%BE%D0%BB%D1%8F%D1%81%D0%BA%D0%B0%D1%85.jpg?s=612x612&w=0&k=20&c=WfEI-kZJ8I0DOAdfE7L_imqd2vEudn9J-baVis1zjHw="
          alt="Hero background"
        />
      </div>
      <div className={styles.overlay} />
      <div className={styles.content} ref={contentRef}>
        <h1 className={styles.title}>Beyond Limits</h1>
        <p className={styles.subtitle}>{t.hero.subtitle}</p>
        <p className={styles.description}>{t.hero.description}</p>
        <button className={styles.cta} onClick={scrollToAbout}>
          {t.hero.cta}
        </button>
      </div>
      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel} />
        </div>
      </div>
    </section>
  )
}

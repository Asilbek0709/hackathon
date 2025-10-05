"use client"

import { useState } from "react"
import styles from "../styles/Support.module.css"
import { useTranslation } from "../hooks/useTranslation"

export default function Support() {
  const t = useTranslation()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("[v0] Support form submitted:", formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  return (
    <section className={styles.support} id="support">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.contact.title}</h2>
          <p className={styles.subtitle}>We're here to help you on your adaptive sports journey</p>
        </div>

        <div className={styles.content}>
          <div className={styles.info}>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📧</div>
              <h3>Email Us</h3>
              <p>support@beyondlimits.com</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📞</div>
              <h3>Call Us</h3>
              <p>+998 71 123 4567</p>
            </div>
            <div className={styles.infoCard}>
              <div className={styles.infoIcon}>📍</div>
              <h3>Visit Us</h3>
              <p>Tashkent, Uzbekistan</p>
            </div>
          </div>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">{t.contact.name}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="email">{t.contact.email}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message">{t.contact.message}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              />
            </div>

            <button type="submit" className={styles.button} disabled={submitted}>
              {submitted ? t.contact.success : t.contact.submit}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
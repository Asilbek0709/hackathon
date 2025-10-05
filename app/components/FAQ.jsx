"use client"

import { useState } from "react"
import styles from "../styles/FAQ.module.css"
import { useTranslation } from "../hooks/useTranslation"

export default function FAQ() {
  const t = useTranslation()
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    { question: t.faq.q1, answer: t.faq.a1 },
    { question: t.faq.q2, answer: t.faq.a2 },
    { question: t.faq.q3, answer: t.faq.a3 },
    { question: t.faq.q4, answer: t.faq.a4 },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{t.faq.title}</h2>
        </div>

        <div className={styles.faqList}>
          {faqs.map((faq, index) => (
            <div key={index} className={`${styles.faqItem} ${openIndex === index ? styles.open : ""}`}>
              <button className={styles.question} onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className={styles.icon}>{openIndex === index ? "−" : "+"}</span>
              </button>
              <div className={styles.answer}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

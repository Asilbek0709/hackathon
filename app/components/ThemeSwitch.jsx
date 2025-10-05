"use client"

import { useApp } from "../context/AppContext"
import styles from "../styles/ThemeSwitch.module.css"

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useApp()

  return (
    <label className={styles.switch}>
      <input type="checkbox" checked={theme === ".dark"} onChange={toggleTheme} aria-label="Toggle dark mode" />
      <span className={styles.slider} />
      <span className={styles.cloudsStars} />
    </label>
  )
}

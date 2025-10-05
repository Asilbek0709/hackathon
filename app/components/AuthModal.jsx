"use client"

import { useState } from "react"
import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"
import styles from "../styles/Auth.module.css"

export default function AuthModal({ mode, onClose }) {
  const { language, login } = useApp()
  const [isSignUp, setIsSignUp] = useState(mode === "signup")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    disabilityType: "",
  })
  const t = translations[language]

  const handleSubmit = (e) => {
    e.preventDefault()

    if (isSignUp) {
      if (formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!")
        return
      }
      if (!formData.disabilityType) {
        alert("Please select your disability type")
        return
      }
      const userData = {
        name: formData.name,
        email: formData.email,
        disabilityType: formData.disabilityType,
        isNewUser: true,
      }
      login(userData)
      onClose()
    } else {
      // Sign in logic
      const userData = {
        name: formData.email.split("@")[0],
        email: formData.email,
        disabilityType: "mobility", 
        isNewUser: false,
      }
      login(userData)
      onClose()
    }
  }

  const handleGoogleSignIn = () => {
    const userData = {
      name: "Google User",
      email: "user@gmail.com",
      disabilityType: "mobility",
      isNewUser: true,
    }
    login(userData)
    onClose()
  }

  return (
    <div className={styles.authModal} onClick={onClose}>
      <div className={styles.authContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={onClose}>
          ×
        </button>

        <h2 className={styles.authTitle}>{isSignUp ? t.auth.signUp : t.auth.signIn}</h2>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          {isSignUp && (
            <div className={styles.formGroup}>
              <label>{t.auth.name}</label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
          )}

          <div className={styles.formGroup}>
            <label>{t.auth.email}</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label>{t.auth.password}</label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              required
            />
          </div>

          {isSignUp && (
            <>
              <div className={styles.formGroup}>
                <label>{t.auth.confirmPassword}</label>
                <input
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  required
                />
              </div>

              <div className={styles.formGroup}>
                <label>{t.auth.disabilityType}</label>
                <select
                  value={formData.disabilityType}
                  onChange={(e) => setFormData({ ...formData, disabilityType: e.target.value })}
                  required
                  className={styles.select}
                >
                  <option value="">{t.auth.selectDisability}</option>
                  <option value="mobility">{t.auth.mobilityImpairment}</option>
                  <option value="visual">{t.auth.visualImpairment}</option>
                  <option value="hearing">{t.auth.hearingImpairment}</option>
                  <option value="cognitive">{t.auth.cognitiveDisability}</option>
                  <option value="amputee">{t.auth.amputee}</option>
                  <option value="cerebralPalsy">{t.auth.cerebralPalsy}</option>
                  <option value="other">{t.auth.other}</option>
                </select>
              </div>
            </>
          )}

          <button type="submit" className={styles.submitBtn}>
            {isSignUp ? t.auth.signUp : t.auth.signIn}
          </button>
        </form>

        <div className={styles.divider}>
          <span>{t.auth.or}</span>
        </div>

        <button className={styles.googleBtn} onClick={handleGoogleSignIn}>
          <svg width="20" height="20" viewBox="0 0 256 262">
            <path
              fill="#4285F4"
              d="M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027"
            />
            <path
              fill="#34A853"
              d="M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1"
            />
            <path
              fill="#FBBC05"
              d="M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602l42.356-32.782"
            />
            <path
              fill="#EB4335"
              d="M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251"
            />
          </svg>
          {t.auth.googleSignIn}
        </button>

        <div className={styles.switchMode}>
          <button onClick={() => setIsSignUp(!isSignUp)}>
            {isSignUp ? t.auth.switchToSignIn : t.auth.switchToSignUp}
          </button>
        </div>
      </div>
    </div>
  )
}

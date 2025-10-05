import { useApp } from "../context/AppContext"
import { translations } from "../i18n/translations"

export function useTranslation() {
  const { language } = useApp()
  return translations[language]
}

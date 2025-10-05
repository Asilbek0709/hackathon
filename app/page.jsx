"use client"

import { useApp } from "./context/AppContext"
import { useEffect } from "react"
import { useRouter } from "next/navigation"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import MapSection from "./components/MapSection"
import Results from "./components/Results"
import FAQ from "./components/FAQ"
import Support from "./components/Support"
import Footer from "./components/Footer"
import RecommendationsModal from "./components/RecommendationsModal"
import BackToTop from "./components/BackToTop"

export default function Home() {
  const { user, showRecommendations } = useApp()
  const router = useRouter()

  useEffect(() => {
    if (user && !showRecommendations) {
      router.push("/dashboard")
    }
  }, [user, showRecommendations, router])

  if (user && !showRecommendations) {
    return null
  }

  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <MapSection />
        <Results />
        <FAQ />
        <Support />
      </main>
      <Footer />
      <BackToTop />
      {showRecommendations && <RecommendationsModal />}
    </>
  )
}

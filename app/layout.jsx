import { AppProvider } from "./context/AppContext"
import "./styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Beyond Limits - Adaptive Sports for Everyone</title>
        <meta name="description" content="Empowering people with disabilities through sports and physical activities" />
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
      </head>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };

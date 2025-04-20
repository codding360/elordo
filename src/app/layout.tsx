import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"

export const metadata = {
  title: "Elordo Group - Лидер в строительстве элитной недвижимости в Бишкеке",
  description:
    "Elordo Group - строительная компания, специализирующаяся на возведении элитной недвижимости в Бишкеке. 11 лет на рынке, 17 жилых комплексов, 3500 довольных семей.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

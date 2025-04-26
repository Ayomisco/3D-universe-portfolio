import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Orbitron, Inter } from "next/font/google"
import { cn } from "@/lib/utils"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "3D Universe Portfolio",
  description: "A futuristic 3D interactive portfolio showcasing digital creations and projects",
  keywords: "3D portfolio, interactive portfolio, digital universe, web3, three.js, creative portfolio",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-black font-sans antialiased", orbitron.variable, inter.variable)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

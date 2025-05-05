import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { CartProvider } from "@/components/context/CartContext"
import Navbar from "@/components/navbar/navbar"
import Footer from "@/components/footer/footer"
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "MedAI Pharmacy",
  description: "Buy medicines with ease",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          
            <CartProvider>
              <Navbar />
              {children}
              <Toaster />
              <Footer/>
            </CartProvider>
          
        </ThemeProvider>
      </body>
    </html>
  )
}

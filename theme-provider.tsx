"use client"

import { useEffect, useState } from "react"
import type { ThemeProviderProps } from "next-themes"
import { ThemeProvider as NextThemesProvider } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false)

  // After mounting, we have access to the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch by not rendering any theme-specific attributes
  // until the component has mounted on the client
  if (!mounted) {
    return (
      <NextThemesProvider {...props} enableSystem={false} attribute="data-theme-temp">
        {children}
      </NextThemesProvider>
    )
  }

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}

export { useTheme } from "next-themes"

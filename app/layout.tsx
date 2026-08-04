import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '../components/theme-provider'

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
})
const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})
const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ariprakash Nagaraj — Full Stack & AI Engineer',
  description:
    'Ariprakash Nagaraj — Full Stack Developer and AI Engineer building future digital experiences with React, the MERN stack, Spring Boot, and intelligent systems.',
  generator: 'v0.app',
  icons: {
    icon: '/an-icon.svg',
    apple: '/an-icon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#030712',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`bg-background ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-sans antialiased bg-background text-foreground selection:bg-primary/30 selection:text-primary">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

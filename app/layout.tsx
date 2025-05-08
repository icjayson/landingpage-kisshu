import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata: Metadata = {
  title: 'Kẹo Ngậm Kisshu',
  description: 'Trang landing page chính thức của kẹo ngậm Kisshu.',
  generator: 'banhbaongoc.vn',
  icons: {
    icon: '/logo-kisshu.svg',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}

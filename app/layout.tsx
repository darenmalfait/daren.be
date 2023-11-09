import {GeistSans} from 'geist/font/sans'

import {AppProviders} from '~/context/app-providers'

import '~/styles/tailwind.css'
import '~/styles/app.css'
import '~/styles/prose.css'
import '~/styles/components.css'
import '@nerdfish/theme/dist/nerdfishui.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${GeistSans.variable} font-sans`}>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  )
}

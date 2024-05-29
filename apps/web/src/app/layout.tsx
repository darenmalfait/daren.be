import * as React from 'react'
import {GeistSans} from 'geist/font/sans'

import {AppProviders} from '~/app/app-providers'

import '~/styles/tailwind.css'
import '~/styles/app.css'
import '~/styles/prose.css'
import '~/styles/components.css'
import '@nerdfish/theme/dist/nerdfishui.css'

import {getGlobalData} from './api'
import {BaseLayoutTemplate} from './components/base-layout'
import {GlobalProvider} from './global-provider'

const getLayoutData = React.cache(getGlobalData)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const layoutData = await getLayoutData()

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${GeistSans.variable} font-sans`}>
        <AppProviders>
          <GlobalProvider {...layoutData}>
            <BaseLayoutTemplate>{children}</BaseLayoutTemplate>
          </GlobalProvider>
        </AppProviders>
      </body>
    </html>
  )
}

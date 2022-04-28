import { createCookie, json, redirect } from 'remix'
import type { LoaderFunction } from 'remix'

import type { Theme } from '~/context/theme-provider'
import { getSiteInfo } from '~/lib/api'
import { i18n } from '~/lib/services/i18n.server'
import { getThemeSession } from '~/lib/services/theme.server'
import { ENV, getEnv } from '~/lib/utils/get-env'
import { getDefaultLanguage } from '~/lib/utils/i18n'
import { getDomainUrl } from '~/lib/utils/misc'
import { pathedRoutes } from '~/other-routes.server'
import type { SiteInfo } from '~/types'

export type LoaderData = {
  locale: string
  siteInfo?: SiteInfo
  ENV: ENV
  theme: Theme | null
  requestInfo: {
    origin: string
    path: string
  }
}

export const loader: LoaderFunction = async ({ request }) => {
  // because this is called for every route, we'll do an early return for anything
  // that has a other route setup. The response will be handled there.
  if (pathedRoutes[new URL(request.url).pathname]) {
    return new Response()
  }

  const ENV = getEnv()

  const [{ getTheme }, locale] = await Promise.all([
    getThemeSession(request),
    i18n.getLocale(request),
  ])

  const siteInfo = await getSiteInfo({ lang: locale })

  if (!siteInfo.site?.multilang && locale !== getDefaultLanguage().code) {
    return redirect('/', {
      headers: {
        'Set-Cookie': await createCookie('language').serialize(
          getDefaultLanguage().code,
        ),
      },
    })
  }

  return json<LoaderData>({
    locale,
    siteInfo,
    ENV,
    theme: getTheme(),
    requestInfo: {
      origin: getDomainUrl(request),
      path: new URL(request.url).pathname,
    },
  })
}

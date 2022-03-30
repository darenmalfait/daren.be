import { ArrowLeftIcon } from '@heroicons/react/solid'
import type { PortableTextEntry } from '@sanity/block-content-to-react'
import * as React from 'react'

import { CookieType } from '.'

import { Button } from '~/components/buttons'
import { PortableText } from '~/components/common/'
import { Accordion } from '~/components/elements'
import { Toggle } from '~/components/forms'
import { useTranslations } from '~/context/translations-provider'
import type { LanguageCode } from '~/types'
import type { CookieConsent } from '~/types/sanity'

interface ConsentItemProps {
  id: string
  value?: boolean
  children: React.ReactNode
  onChange?(id: string, value: boolean): void
  required?: boolean
}

function ConsentItem({
  id,
  children,
  value = false,
  onChange,
  required,
}: ConsentItemProps) {
  const { t } = useTranslations()
  function handleChange() {
    if (onChange) onChange(id, !value)
  }

  return (
    <div className="flex justify-between w-full">
      <span>{children}</span>
      {!required && <Toggle id={id} value={value} onChange={handleChange} />}
      {required && (
        <div className="flex items-center px-3 text-xs text-gray-800 bg-gray-200 rounded-full">
          {t('cookies-always-on-title')}
        </div>
      )}
    </div>
  )
}

interface CookiebarAdvancedProps extends CookieConsent {
  onBack: () => void
  message?: PortableTextEntry[]
  cookies?: any
  onAccept?: () => void
  onSave?: (value: { [key in CookieType]?: boolean }) => void
  lang?: LanguageCode
}

function CookiebarAdvanced({
  onBack,
  message,
  cookies: initialCookies = {},
  tracking,
  advertisement,
  onAccept,
  onSave,
  lang,
}: CookiebarAdvancedProps) {
  const { t } = useTranslations()

  function reducer(
    state: typeof initialCookies,
    newState: typeof initialCookies,
  ) {
    return { ...state, ...newState }
  }
  const [cookies, setCookies] = React.useReducer(reducer, initialCookies)

  const handleCookieChange = React.useCallback((id: string, value: boolean) => {
    setCookies({
      [id]: value,
    })
  }, [])

  function handleSave() {
    if (onSave) {
      onSave(cookies)
    }
  }

  const items = [
    {
      title: (
        <ConsentItem id="necessary" onChange={handleCookieChange} required>
          {t('cookies-strictly-necessary-title')}
        </ConsentItem>
      ),
      message: t('cookies-strictly-necessary-description'),
    },
    ...(tracking?.enabled
      ? [
          {
            title: (
              <ConsentItem
                id={CookieType.Tracking}
                value={cookies[CookieType.Tracking]}
                onChange={handleCookieChange}
              >
                {t('cookies-track-title')}
              </ConsentItem>
            ),
            message:
              tracking.message && tracking.message[lang as string]?.value,
          },
        ]
      : []),
    ...(advertisement?.enabled
      ? [
          {
            title: (
              <ConsentItem
                id={CookieType.Advertisement}
                value={cookies[CookieType.Advertisement]}
                onChange={handleCookieChange}
              >
                {t('cookies-advertisement-title')}
              </ConsentItem>
            ),
            message:
              advertisement.message &&
              advertisement.message[lang as string]?.value,
          },
        ]
      : []),
  ]

  return (
    <div className="flex flex-col space-y-4">
      <header className="flex flex-row flex-nowrap items-center space-x-4 h-20">
        <button
          className="w-6 h-6 transition-transform hover:-translate-x-1"
          onClick={onBack}
        >
          <ArrowLeftIcon />
        </button>
        <span className="w-full text-xl font-bold text-center">
          {t('cookies-title')}
        </span>
      </header>
      {message && <PortableText blocks={message} />}
      <Accordion items={items} />
      <footer className="flex flex-col justify-center items-center pt-4 space-y-2 sm:flex-row sm:flex-nowrap sm:justify-end sm:space-y-0 sm:space-x-4">
        {onAccept && (
          <Button
            id="accept-policy"
            onClick={onAccept}
            variant="secondary"
            size="small"
          >
            {t('accept-all-cookies')}
          </Button>
        )}
        <Button
          id="save-policy"
          variant="primary"
          onClick={handleSave}
          size="small"
        >
          {t('cookies-save-title')}
        </Button>
      </footer>
    </div>
  )
}

export { CookiebarAdvanced }

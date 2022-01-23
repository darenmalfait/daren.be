import { Grid, H2 } from '@daren/ui-components'
import clsx from 'clsx'
import * as React from 'react'

import { ArrowLink } from '~/components/buttons'

interface HeaderProps {
  ctaUrl?: string
  cta?: string
  as?: React.ElementType
  title?: string
  subTitle?: React.ReactNode
  className?: string
}

function Header({ ctaUrl, cta, title, subTitle, className, as }: HeaderProps) {
  return (
    <Grid as={as}>
      <div
        className={clsx(
          'flex flex-col col-span-full space-y-10 lg:flex-row lg:justify-between lg:items-end lg:space-y-0',
          className,
        )}
      >
        <div className="space-y-2 lg:space-y-0">
          {title && <H2>{title}</H2>}
          {subTitle && (
            <H2 variant="secondary" as="p">
              {subTitle}
            </H2>
          )}
        </div>

        {cta && ctaUrl ? (
          <ArrowLink href={ctaUrl} direction="right">
            {cta}
          </ArrowLink>
        ) : null}
      </div>
    </Grid>
  )
}

export { Header }

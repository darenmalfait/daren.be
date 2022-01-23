import { colors } from '@daren/theme'
import { Grid } from '@daren/ui-components'
import clsx from 'clsx'
import * as React from 'react'

import { OptimizedImage } from '../elements'

import { Section } from '../layout'

import { getLowQualityUrlFor, urlFor } from '~/lib/sanity'
import type {
  SanityBackground,
  SanityBlockLayout,
  SanityImageBackground,
} from '~/types/sanity'
import { invertColor } from '~/utils/color'

import { getResponsiveImageSizes } from '~/utils/image'

function getBackgroundColor(background?: SanityBackground): string {
  const { backgroundType } = background || {}

  switch (backgroundType) {
    case `backgroundImage`: {
      return colors?.background ? (colors?.background[100] as string) : ''
    }
    default: {
      const { static: staticBackground } = background || {}
      if (staticBackground) {
        const { imageColor, color } = staticBackground

        if (imageColor) {
          if (imageColor?.asset?.metadata) {
            const { palette } = imageColor.asset.metadata

            return (
              palette?.dominant?.background ||
              (colors?.background ? (colors?.background[500] as string) : '')
            )
          }
        }

        if (color) {
          const { value } = color

          return (
            value ||
            (colors?.background ? (colors.background[500] as string) : '')
          )
        }
      }
    }
  }

  return 'transparent'
}

function useBackground(layout: SanityBlockLayout) {
  const background = layout?.background

  if (!background?.static && !background?.imageBackground) {
    return null
  }

  const backgroundColor = getBackgroundColor(background)

  const { imageBackground, backgroundType } = background || { asset: {} }

  let foreground

  if (backgroundType === 'backgroundImage' && imageBackground) {
    foreground = invertColor(
      imageBackground?.image?.asset?.metadata?.palette?.dominant?.background ||
        '#fff',
      true,
    )
  } else if (backgroundColor) {
    foreground = invertColor(backgroundColor, true)
  }

  const themeClass = foreground === '#fff' ? 'dark' : 'light'

  return { backgroundColor, imageBackground, themeClass }
}

interface BackgroundProps extends SanityImageBackground {
  color?: string
  id?: string
  className?: string
  staticImage?: string
}

function Background({
  color = 'transparent',
  image,
  className,
  staticImage,
  ...props
}: BackgroundProps) {
  const vars = {
    '--colors-background-500': color,
  } as React.CSSProperties

  return (
    <div
      style={vars}
      className={clsx(
        'flex object-center overflow-hidden absolute -z-1 justify-center items-center w-full h-full bg-primary',
        className,
      )}
      {...props}
    >
      {(image || staticImage) && (
        <>
          {staticImage ? (
            <OptimizedImage
              {...staticImage}
              responsive={getResponsiveImageSizes('medium')}
              alt="background image"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
            />
          ) : (
            <OptimizedImage
              src={image && urlFor(image).url()}
              blurDataUrl={image && getLowQualityUrlFor(image)}
              responsive={getResponsiveImageSizes('medium')}
              alt="background image"
            />
          )}
          <div className="absolute inset-0 z-10 w-full h-full bg-black dark:bg-white opacity-30 pointer-events-none" />
        </>
      )}
    </div>
  )
}

function BackgroundContainer({
  layout,
  children,
}: {
  layout: SanityBlockLayout
  children: React.ReactNode
}) {
  const { backgroundColor, imageBackground, themeClass } =
    useBackground(layout) ?? {}

  return (
    <Section className="relative">
      {layout?.background && (
        <Background color={backgroundColor} image={imageBackground?.image} />
      )}
      <Grid className={themeClass} nested>
        <div className={clsx('col-span-full py-12 dark:prose-invert')}>
          {children}
        </div>
      </Grid>
    </Section>
  )
}

export { Background, BackgroundContainer, useBackground }

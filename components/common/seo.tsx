import Head from 'next/head'
import * as React from 'react'

import {getDomainUrl} from '../../lib/utils/misc'
import {generateSocialImage} from '../../lib/utils/social'
import {stripPreSlash, stripTrailingSlash} from '../../lib/utils/string'

type SocialMetas = {
  image?: string | null
  url: string
  title: string
  description: string
  schema?: string
  canonical?: string | null
  subImage?: string | null
}

function getMetaTags({
  url,
  title,
  description,
  image,
  schema,
  canonical,
}: SocialMetas) {
  return (
    <>
      <meta charSet="utf-8" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <link rel="manifest" href="/site.webmanifest" />
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

      {image ? <meta property="image" content={image} /> : null}
      {image ? <meta property="og:image" content={image} /> : null}
      {image ? <meta name="twitter:image" content={image} /> : null}
      {image ? (
        <meta name="twitter:card" content="summary_large_image" />
      ) : null}

      <title key="title">{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />

      {description ? <meta name="description" content={description} /> : null}
      {description ? (
        <meta property="og:description" content={description} />
      ) : null}
      {description ? (
        <meta name="twitter:description" content={description} />
      ) : null}

      {url ? <meta property="og:url" content={url} /> : null}
      <link rel="canonical" href={canonical ?? url} />

      {schema ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(schema)}}
        />
      ) : null}

      <link
        key="rss-feed"
        type="application/xml; charset=utf-8"
        title="RSS feed for daren.be"
        href="/rss.xml"
      />
    </>
  )
}

function Seo({
  url: path,
  image: ogImage,
  title,
  children,
  subImage,
  ...props
}: SocialMetas & {
  children?: React.ReactNode
}) {
  const basePath = stripTrailingSlash(getDomainUrl() ?? '')
  let metaImage = ogImage

  const url = path.startsWith('http')
    ? path
    : `${basePath}/${stripPreSlash(path)}`

  if (!ogImage) {
    metaImage = generateSocialImage({
      title,
      imagePublicID: 'social.png',
      image: subImage,
    })
  }

  const image = metaImage?.startsWith('http')
    ? metaImage
    : `${basePath}/${stripPreSlash(metaImage ?? '')}`

  return (
    <Head>
      {getMetaTags({url, image, title, ...props})}
      {children}
    </Head>
  )
}

function NoIndex() {
  return (
    <Head>
      <meta name="robots" content="noindex" />
    </Head>
  )
}

export {Seo, NoIndex}

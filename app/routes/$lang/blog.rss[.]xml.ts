import type { LoaderFunction } from 'remix'

import { getAllPosts, getSiteInfo } from '~/lib/api'

import { getSession } from '~/session.server'
import { PageType } from '~/types'
import { getDefaultLanguage, localizeSlug } from '~/utils/i18n'
import { getDomainUrl } from '~/utils/misc'
import { removeTrailingSlash } from '~/utils/string'

export const loader: LoaderFunction = async ({ request, params }) => {
  const session = await getSession(request, params)
  const lang = session.getLanguage() || getDefaultLanguage().code

  const posts = await getAllPosts()

  const { site } = await getSiteInfo({ lang })

  const articleMarkup = posts.map(post => {
    const canonical =
      post.seo?.canonical ??
      removeTrailingSlash(
        `${getDomainUrl(request)}${localizeSlug(
          post?.slug || '',
          lang,
          PageType.blog,
        )}`,
      )

    return [
      `<item>`,
      `<title>${post?.title}</title>`,
      `<pubDate>${post?.publishedAt}</pubDate>`,
      `<description><![CDATA[${post?.excerpt}]]></description>`,
      // TODO: Add full HTML of article
      // `<content:encoded><![CDATA[${html}]]></content:encoded>`,
      `<link>${canonical}</link>`,
      `</item>`,
    ].join('')
  })

  const rss = [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<rss version="2.0" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:content="http://purl.org/rss/1.0/modules/content/" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:sy="http://purl.org/rss/1.0/modules/syndication/">`,
    `<channel>`,
    `<title>${site?.seo?.title}</title>`,
    `<description>${site?.seo?.description}</description>`,
    `<link>${process.env.SANITY_STUDIO_PROJECT_URL}</link>`,
    `<atom:link href="${process.env.SANITY_STUDIO_PROJECT_URL}/${lang}/blog/rss.xml" rel="self" type="application/rss+xml" />`,
    `<language>en</language>`,
    `<sy:updatePeriod>daily</sy:updatePeriod>`,
    ...articleMarkup,
    `</channel>`,
    `</rss>`,
  ]

  return new Response(rss.join(''), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'x-content-type-options': 'nosniff',
    },
  })
}

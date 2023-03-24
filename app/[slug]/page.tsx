import {type Metadata} from 'next'
import {notFound} from 'next/navigation'

import {getPage, getPages} from '~/lib/services/api'
import {buildSrc} from '~/lib/utils/cloudinary'
import {getMetaData} from '~/lib/utils/seo'
import {generateOGImageUrl, getFileNameFromUrl} from '~/lib/utils/social'
import {stripTrailingSlash} from '~/lib/utils/string'
import {DefaultPage} from '~/templates/page'

async function fetchPage(slug?: string) {
  const filename =
    !slug || slug === '/' ? 'home' : stripTrailingSlash(slug.toLowerCase())

  return getPage(`${filename.length ? filename : 'home'}.mdx`)
}

export async function generateStaticParams() {
  return ((await getPages()) ?? []).map(page => ({
    slug: page._sys?.filename ?? 'home',
  }))
}

export async function generateMetadata({
  params,
}: {
  params: {slug?: string}
}): Promise<Metadata | undefined> {
  const loaderData = await fetchPage(params.slug)

  if (!loaderData) {
    return
  }

  const {data} = loaderData

  const title = data.page.seo?.title ?? (data.page.title || 'Untitled')

  return getMetaData({
    ogImage: data.page.seo?.seoImg
      ? data.page.seo.seoImg
      : generateOGImageUrl({
          cardType: data.page.seo?.cardType as any,
          image: data.page.seo?.partialSeoImage
            ? buildSrc(
                getFileNameFromUrl(data.page.seo.partialSeoImage) ?? '',
                {
                  width: data.page.seo.cardType === 'secondary' ? 1100 : 800,
                  height: data.page.seo.cardType === 'secondary' ? 430 : 630,
                  format: 'png',
                },
              )
            : undefined,
          heading: title,
        }),
    title,
    url: params.slug ?? '/',
    description: data.page.seo?.description ?? '',
    canonical: data.page.seo?.canonical,
  })
}

export default async function Page({
  params: {slug},
}: {
  params: {slug?: string}
}) {
  const data = await fetchPage(slug)

  if (!data) {
    notFound()
  }

  return <DefaultPage {...data} />
}

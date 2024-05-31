import {type MetadataRoute} from 'next'

import {env} from '~/env.mjs'

import {getSitemapData} from './api'
import {type Page, type Work} from './cms'
import {getDatedSlug} from './common'

const BASE_URL = env.NEXT_PUBLIC_URL

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const data = await getSitemapData()

  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...(data.pages?.map((page: Page) => {
      return {
        url: `${BASE_URL}/${
          page._sys.filename !== 'home' ? page._sys.filename : ''
        }`,
        lastModified: new Date(),
        priority: 1,
      }
    }) ?? []),
    ...(data.works?.map((work: Work) => {
      return {
        url: `${BASE_URL}/work/${work.category}/${work._sys.filename}`,
        lastModified: new Date(),
        priority: 0.9,
      }
    }) ?? []),
    ...(data.blogs?.map((blog: any) => {
      return {
        url: `${BASE_URL}/blog/${getDatedSlug(
          blog.date ?? new Date().toISOString(),
          blog._sys.filename ?? '',
        )}`,
        lastModified: new Date(),
        priority: 0.8,
      }
    }) ?? []),
    ...(data.wikis?.map((wiki: any) => {
      return {
        url: `${BASE_URL}/wiki/${getDatedSlug(
          wiki.date ?? new Date().toISOString(),
          wiki._sys.filename ?? '',
        )}`,
        lastModified: new Date(wiki.date ?? new Date().toISOString()),
        priority: 0.5,
      }
    }) ?? []),
  ]
}

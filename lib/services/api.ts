import tina from '~/.tina/__generated__/client'
import type {
  Blog,
  BlogPostQueryQuery,
  ContentQueryQuery,
  Product,
  Wiki,
} from '~/.tina/__generated__/types'

async function getPages() {
  const pageDate = await tina.queries.pageConnection()

  return pageDate.data.pageConnection.edges?.map(item => ({
    ...item?.node,
  }))
}

async function getBlogPosts() {
  const blogListData = await tina.queries.blogConnection()

  return blogListData.data.blogConnection.edges?.map(item => ({
    ...item?.node,
  }))
}

async function getWikiPosts() {
  const wikiListData = await tina.queries.wikiConnection()

  return wikiListData.data.wikiConnection.edges?.map(item => ({
    ...item?.node,
  }))
}

async function getWikiPost(relativePath: string) {
  return tina.queries
    .wikiQuery({
      relativePath,
    })
    .catch(() => null)
}

function mapPageData(data: ContentQueryQuery) {
  return {
    ...data,
    blogs: data.blogConnection.edges?.map((item: any) => ({
      ...(item?.node ?? {}),
    })) as Blog[],
    wikis: data.wikiConnection.edges?.map((item: any) => ({
      ...(item?.node ?? {}),
    })) as Wiki[],
    products: data.productConnection.edges?.map((item: any) => ({
      ...(item?.node ?? {}),
    })) as Product[],
  }
}

function mapBlogData(data: BlogPostQueryQuery) {
  return {
    ...data,
    blogs: data.blogConnection.edges?.map((item: any) => ({
      ...(item?.node ?? {}),
    })) as Blog[],
  }
}

async function getPage(relativePath: string) {
  const page = await tina.queries
    .contentQuery({
      relativePath,
    })
    .catch(() => null)

  if (!page) return null

  return {
    ...page,
    data: mapPageData(page.data),
  }
}

async function getBlogPost(relativePath: string) {
  const blog = await tina.queries
    .blogPostQuery({
      relativePath,
    })
    .catch(() => null)

  if (!blog) return null

  return {
    ...blog,
    data: mapBlogData(blog.data),
  }
}

async function getSitemapData() {
  const {data} = await tina.queries.sitemapQuery()
  return {
    pages: data.pageConnection.edges?.map(item => ({
      ...item?.node,
    })),
    blogs: data.blogConnection.edges
      ?.map(item => ({
        ...item?.node,
      }))
      .reverse(),
    wikis: data.wikiConnection.edges
      ?.map(item => ({
        ...item?.node,
      }))
      .reverse(),
  }
}

export {
  getBlogPosts,
  getWikiPosts,
  getWikiPost,
  getBlogPost,
  getPages,
  getPage,
  mapPageData,
  mapBlogData,
  getSitemapData,
}

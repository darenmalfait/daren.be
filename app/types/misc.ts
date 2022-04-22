import type { LoaderFunction } from 'remix'

type RouteLoader<T> = {
  preview?: boolean
  data: T
  canonical: string
  query?: string
  params?: Record<string, unknown>
}

type LoaderType<
  Params extends Record<string, unknown> = Record<string, unknown>,
> = (
  args: Omit<Parameters<LoaderFunction>['0'], 'params'> & { params: Params },
) => ReturnType<LoaderFunction>

interface DefaultDocumentProps<T> {
  siteConfig?: T
  query?: string | null
  queryParams?: Record<string, unknown>
}

type SitemapEntry = {
  route: string
  lastmod?: string
  changefreq?:
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'monthly'
    | 'yearly'
    | 'never'
  priority?: 0.0 | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 | 1.0
}

interface Handle {
  /** this just allows us to identify routes more directly rather than relying on pathnames */
  id?: string
  /** this is here to allow us to disable scroll restoration until Remix gives us better control */
  restoreScroll?: false
  getSitemapEntries?: (
    request: Request,
  ) =>
    | Promise<Array<SitemapEntry | null> | null>
    | Array<SitemapEntry | null>
    | null
  i18n?: string | string[]
}

type NonNullProperties<Type> = {
  [Key in keyof Type]-?: Exclude<Type[Key], null | undefined>
}

export type {
  Handle,
  RouteLoader,
  LoaderType,
  NonNullProperties,
  SitemapEntry,
  DefaultDocumentProps,
}

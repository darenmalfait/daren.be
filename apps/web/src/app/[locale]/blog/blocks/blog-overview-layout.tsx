'use client'

import { H1 } from '@nerdfish/ui'
import { type PartialDeep } from '@repo/lib/utils'
import {
	Section,
	SectionHeaderTitle,
	SectionHeader,
	SectionHeaderSubtitle,
	ArticleOverviewLoadMoreButton,
	type Article,
	ArticleOverview,
	ArticleOverviewSearch,
	ArticleOverviewSearchImage,
	ArticleOverviewSearchContent,
	ArticleOverviewFilter,
} from '@repo/ui/components'
import * as React from 'react'
import { filterBlog, mapBlogToArticle } from '../utils'
import { type Blog, type Block, type PageBlocksBlog } from '~/app/cms'
import { useTranslation } from '~/app/i18n'

export function BlockLayout({
	searchEnabled,
	featuredEnabled,
	items,
	header,
	children,
}: {
	children?: React.ReactNode
	searchEnabled: boolean
	featuredEnabled: boolean
	items: PartialDeep<Blog>[]
	header: Block<PageBlocksBlog>['header']
}) {
	const { t } = useTranslation()
	const articles = React.useMemo(() => mapBlogToArticle(items), [items])

	const filterArticles = React.useCallback(
		(toFilter: Article[], searchString: string) => {
			const toFilterIds = new Set(toFilter.map((article) => article.id))
			const blogs = items.filter((post) => post.id && toFilterIds.has(post.id))

			return mapBlogToArticle(filterBlog(blogs, searchString))
		},
		[items],
	)

	return (
		<Section>
			<ArticleOverview
				allArticles={articles}
				searchEnabled={searchEnabled}
				featuredArticleEnabled={featuredEnabled}
				customFilterFunction={filterArticles}
			>
				<ArticleOverviewSearch>
					<ArticleOverviewSearchImage
						image={{
							src: header?.image ?? undefined,
							alt: header?.title ?? undefined,
						}}
					/>
					<ArticleOverviewSearchContent>
						<SectionHeader>
							<H1 variant="primary" className="mb-lg">
								{header?.title}
							</H1>
							<SectionHeaderSubtitle>
								{header?.subtitle ?? undefined}
							</SectionHeaderSubtitle>
						</SectionHeader>
					</ArticleOverviewSearchContent>
				</ArticleOverviewSearch>

				<ArticleOverviewFilter />

				{!searchEnabled ? (
					<SectionHeader
						cta={{
							title: t('global.allArticles'),
							url: header?.link ?? '',
						}}
					>
						<SectionHeaderTitle>{header?.title}</SectionHeaderTitle>
						<SectionHeaderSubtitle>
							{header?.subtitle ?? undefined}
						</SectionHeaderSubtitle>
					</SectionHeader>
				) : null}

				{children}
				<ArticleOverviewLoadMoreButton>
					{t('global.readMore')}
				</ArticleOverviewLoadMoreButton>
			</ArticleOverview>
		</Section>
	)
}

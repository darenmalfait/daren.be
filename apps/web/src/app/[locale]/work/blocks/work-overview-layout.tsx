'use client'

import { type PartialDeep } from '@repo/lib/utils/types'
import {
	type Article,
	ArticleOverview,
	ArticleOverviewContentGrid,
	ArticleOverviewFilter,
	ArticleOverviewLoadMoreButton,
	ArticleOverviewSearch,
	ArticleOverviewSearchContent,
	ArticleOverviewSearchImage,
	ArticlesOverviewEmptyState,
} from '@repo/ui/components/article-overview'
import {
	Section,
	SectionHeader,
	SectionHeaderSubtitle,
	SectionHeaderTitle,
} from '@repo/ui/components/section'
import { useTranslations } from 'next-intl'
import * as React from 'react'
import { filterWork, mapWorkToArticle } from '../utils'
import { type Block, type PageBlocksWork, type Work } from '~/app/cms/types'

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
	items: PartialDeep<Work>[]
	header: Block<PageBlocksWork>['header']
}) {
	const t = useTranslations('work')
	const articles = React.useMemo(() => mapWorkToArticle(items), [items])

	const filterArticles = React.useCallback(
		(toFilter: Article[], searchString: string) => {
			const toFilterIds = new Set(toFilter.map((article) => article.id))
			const works = items.filter((post) => post.id && toFilterIds.has(post.id))

			return mapWorkToArticle(filterWork(works, searchString))
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
							src: header?.image?.src ?? undefined,
							alt: header?.image?.alt ?? header?.title ?? undefined,
						}}
					/>
					<ArticleOverviewSearchContent inputLabel={t('search')}>
						<SectionHeader>
							<SectionHeaderTitle>{header?.title}</SectionHeaderTitle>
							<SectionHeaderSubtitle>
								{header?.subtitle ?? undefined}
							</SectionHeaderSubtitle>
						</SectionHeader>
					</ArticleOverviewSearchContent>
				</ArticleOverviewSearch>

				<ArticleOverviewFilter title={t('filterByTopic')} />

				{searchEnabled ? null : (
					<SectionHeader
						cta={{
							title: t('seeAll'),
							url: header?.link ?? '',
						}}
					>
						<SectionHeaderTitle>{header?.title}</SectionHeaderTitle>
						<SectionHeaderSubtitle>
							{header?.subtitle ?? undefined}
						</SectionHeaderSubtitle>
					</SectionHeader>
				)}

				{children ?? (
					<ArticleOverviewContentGrid
						loadMoreLabel={t('loadMore')}
						readMoreLabel={t('readMore')}
					>
						<ArticlesOverviewEmptyState />
					</ArticleOverviewContentGrid>
				)}

				<ArticleOverviewLoadMoreButton>
					{t('readMore')}
				</ArticleOverviewLoadMoreButton>
			</ArticleOverview>
		</Section>
	)
}

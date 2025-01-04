import {
	ArticleCard,
	ArticleCardCategory,
	ArticleCardContent,
	ArticleCardImage,
	ArticleCardTitle,
} from '@repo/design-system/components/article-card'
import { ArticleOverviewContentGrid } from '@repo/design-system/components/article-overview'
import { Section } from '@repo/design-system/components/section'
import { Skeleton } from '@repo/design-system/components/ui'
import { type PartialDeep } from '@repo/design-system/lib/utils/types'
import { getLocale } from '@repo/i18n/server'
import {
	type Blog as BlogJsonLd,
	JsonLd,
	type WithContext,
} from '@repo/seo/json-ld'
import { type Post } from 'content-collections'
import * as React from 'react'
import { blog } from '../../api'
import { filterBlog } from '../../utils'
import { BlogOverview } from './blog-overview'
import { type PageBlocksBlog } from '~/app/cms/types'

function isSameItem(item: PartialDeep<Post>, relatedTo?: PartialDeep<Post>) {
	return item.slug === relatedTo?.slug
}

export async function BlogOverviewBlockContent(
	data: PageBlocksBlog & {
		relatedTo?: PartialDeep<Post>
	},
) {
	const { header, searchEnabled, featuredEnabled, tags, count, relatedTo } =
		data

	const locale = await getLocale()
	const localizedItems = await blog.getAll({ locale })

	const jsonLd: WithContext<BlogJsonLd> = {
		'@type': 'Blog',
		'@context': 'https://schema.org',
	}

	const relatedItems =
		relatedTo &&
		localizedItems
			.sort((a, b) => {
				// I want to get the index of the previous item, to be the first item in the array
				const relatedToIndex =
					localizedItems.findIndex((post) => post.slug === relatedTo.slug) - 2
				if (relatedToIndex < 0) return 0

				const aIndex = localizedItems.indexOf(a)
				const bIndex = localizedItems.indexOf(b)

				// Adjust indices to start after relatedTo
				const adjustedAIndex =
					(aIndex - relatedToIndex - 1 + localizedItems.length) %
					localizedItems.length
				const adjustedBIndex =
					(bIndex - relatedToIndex - 1 + localizedItems.length) %
					localizedItems.length

				return adjustedAIndex - adjustedBIndex
			})
			.filter((post) => !isSameItem(post, relatedTo))
			.filter((post) => post.tags.some((tag) => relatedTo.tags?.includes(tag)))

	const blogs = relatedTo
		? relatedItems?.length
			? relatedItems
			: localizedItems.filter((post) => !isSameItem(post, relatedTo))
		: localizedItems.filter((post) => !isSameItem(post, relatedTo))

	const items = relatedTo ? blogs : filterBlog(blogs, tags?.join(' ') ?? '')

	const limitedBlogs = count ? items.slice(0, count) : items

	return (
		<>
			{searchEnabled ? <JsonLd code={jsonLd} /> : null}

			<BlogOverview
				searchEnabled={searchEnabled ?? false}
				featuredEnabled={featuredEnabled ?? false}
				items={limitedBlogs}
				header={header}
			/>
		</>
	)
}

export async function BlogOverviewBlock(
	data: PageBlocksBlog & {
		relatedTo?: PartialDeep<Post>
	},
) {
	const { header, searchEnabled, featuredEnabled } = data

	return (
		<Section>
			<React.Suspense
				fallback={
					<BlogOverview
						searchEnabled={searchEnabled ?? false}
						featuredEnabled={featuredEnabled ?? false}
						items={[]}
						header={header}
					>
						{featuredEnabled ? (
							<Skeleton className="mb-xl rounded-container aspect-[16/9] h-full" />
						) : null}
						<ArticleOverviewContentGrid>
							{Array.from({ length: 2 }).map((_, i) => (
								<li key={i} className="col-span-4">
									<ArticleCard>
										<ArticleCardImage alt="" />
										<ArticleCardContent>
											<ArticleCardCategory className="w-16">
												<Skeleton className="bg-transparent" />
											</ArticleCardCategory>
											<ArticleCardTitle>
												<Skeleton count={2} />
											</ArticleCardTitle>
										</ArticleCardContent>
									</ArticleCard>
								</li>
							))}
						</ArticleOverviewContentGrid>
					</BlogOverview>
				}
			>
				<BlogOverviewBlockContent {...data} />
			</React.Suspense>
		</Section>
	)
}
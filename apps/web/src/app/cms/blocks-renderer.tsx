import { type Locale } from '@repo/i18n/types'
import type * as React from 'react'
import { BlogOverviewBlock } from '../[locale]/blog/blocks/blog-overview/blog-overview-block'
import { BookingBlock } from '../[locale]/contact/blocks/booking'
import { ChatbotBlock } from '../[locale]/contact/blocks/chat'
import { ProductsOverviewBlock } from '../[locale]/realisations/blocks/products'
import { TestimonialsBlock } from '../[locale]/testimonials/blocks/testimonials/testimonials-block'
import { WikiOverviewBlock } from '../[locale]/wiki/blocks/wiki-overview'
import { WorkOverviewBlock } from '../[locale]/work/blocks/work-overview/work-overview-block'
import { ContentBlock } from './blocks/content'
import { CtaBlock } from './blocks/cta'
import { FAQBlock } from './blocks/faq'
import { FeaturesBlock } from './blocks/features'
import { HeroBlock } from './blocks/hero'
import { HighlightBlock } from './blocks/highlight'
import { HighlightsBlock } from './blocks/highlights'
import { ImageGridBlock } from './blocks/image-grid'
import { KeywordListBlock } from './blocks/keyword-list'
import { PricingBlock } from './blocks/pricing'
import { SkillsBlock } from './blocks/skills'
import { SplitWithImageBlock } from './blocks/split-with-image'
import { type PageBlocks } from './types'

type PageBlockType = NonNullable<PageBlocks[keyof PageBlocks]>

const getComponent = (componentKey: string) => {
	// Not putting this outside, because of server rendering
	// [key] is the name of the module in TinaCMS
	const componentsMap: {
		[K in PageBlockType]: React.ElementType
	} = {
		// Page blocks
		PageBlocksBlog: BlogOverviewBlock,
		PageBlocksBooking: BookingBlock,
		PageBlocksChatbot: ChatbotBlock,
		PageBlocksContent: ContentBlock,
		PageBlocksCta: CtaBlock,
		PageBlocksFaq: FAQBlock,
		PageBlocksFeatures: FeaturesBlock,
		PageBlocksHero: HeroBlock,
		PageBlocksHighlight: HighlightBlock,
		PageBlocksHighlights: HighlightsBlock,
		PageBlocksImageGrid: ImageGridBlock,
		PageBlocksKeywordList: KeywordListBlock,
		PageBlocksPricing: PricingBlock,
		PageBlocksProducts: ProductsOverviewBlock,
		PageBlocksSkills: SkillsBlock,
		PageBlocksTestimonials: TestimonialsBlock,
		PageBlocksWiki: WikiOverviewBlock,
		PageBlocksWork: WorkOverviewBlock,
		PageBlocksSplitWithImage: SplitWithImageBlock,
	} as const

	if (!Object.keys(componentsMap).includes(componentKey)) {
		return false
	}
	// Should be safe, as we check for the existence of the key in the previous if
	return componentsMap[componentKey as keyof typeof componentsMap]
}

function Placeholder({
	componentName = 'unknown component',
}: {
	componentName?: string | number
}) {
	return (
		<section className="border-danger bg-danger-muted border py-4 text-center">
			<p className="text-danger mx-auto text-center">
				The component <strong>{componentName}</strong> has not been created yet.
			</p>
		</section>
	)
}

function BlockComponent({
	block,
	locale,
}: {
	block: PageBlocks
	locale?: Locale
}) {
	if (!block.__typename) return null

	const Component = getComponent(block.__typename)

	if (!Component) return <Placeholder componentName={block.__typename} />
	return <Component locale={locale} {...block} />
}

export function Blocks({
	items,
	locale,
}: {
	items?: any[] | null
	locale?: Locale
}) {
	if (!items) return null

	return (
		<>
			{items.map((block, i) => {
				return (
					<BlockComponent
						key={i}
						// TODO: find a better way to type this
						block={block}
						locale={locale}
					/>
				)
			})}
		</>
	)
}

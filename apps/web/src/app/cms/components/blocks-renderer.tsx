import * as React from 'react'

import { type Block } from '../types'
import { BlogOverviewBlock } from '~/app/[locale]/blog'
import { BookingBlock, SayHelloBlock } from '~/app/[locale]/contact'
import { ProductsBlock } from '~/app/[locale]/realisations'
import { WikiOverviewBlock } from '~/app/[locale]/wiki'
import { WorkOverviewBlock } from '~/app/[locale]/work'
import {
	ContentBlock,
	FeaturesBlock,
	HeroBlock,
	HighlightBlock,
	KeywordListBlock,
	SkillsBlock,
} from '~/app/common'
import { HighlightsBlock } from '~/app/common/blocks/highlights'
import { TestimonialsBlock } from '~/app/common/blocks/testimonials'
import { type PageBlocks } from '~/tina/__generated__/types'

const FALLBACK_COMPONENT_ENABLED = process.env.NODE_ENV === 'development'

const getComponent = (componentKey: string) => {
	// Not putting this outside, because of server rendering
	// [key] is the name of the module in TinaCMS
	const componentsMap: {
		[K in PageBlockType]: React.ComponentType<Block>
	} = {
		PageBlocksBlog: BlogOverviewBlock,
		PageBlocksBooking: BookingBlock,
		PageBlocksContent: ContentBlock,
		PageBlocksFeatures: FeaturesBlock,
		PageBlocksHero: HeroBlock,
		PageBlocksHighlight: HighlightBlock,
		PageBlocksHighlights: HighlightsBlock,
		PageBlocksKeywordList: KeywordListBlock,
		PageBlocksProducts: ProductsBlock,
		PageBlocksSayHello: SayHelloBlock,
		PageBlocksSkills: SkillsBlock,
		PageBlocksTestimonials: TestimonialsBlock,
		PageBlocksWiki: WikiOverviewBlock,
		PageBlocksWork: WorkOverviewBlock,
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

type PageBlockType = NonNullable<PageBlocks[keyof PageBlocks]>

function BlockComponent({
	block,
	globalData,
	locale,
}: {
	block: PageBlocks
	globalData?: Block['globalData']
	locale?: Block['locale']
}) {
	if (!block.__typename) return null

	const Component = getComponent(block.__typename)

	if (!Component) {
		return FALLBACK_COMPONENT_ENABLED ? (
			<Placeholder componentName={block.__typename} />
		) : null
	}

	return <Component locale={locale} globalData={globalData} {...block} />
}

export function Blocks({
	items,
	globalData,
	locale,
}: {
	items?: PageBlocks[] | null
	globalData?: Block['globalData']
	locale?: Block['locale']
}) {
	if (!items) return null

	return (
		<>
			{items.map((block, i) => {
				return (
					<BlockComponent
						key={i}
						block={block}
						locale={locale}
						globalData={globalData}
					/>
				)
			})}
		</>
	)
}

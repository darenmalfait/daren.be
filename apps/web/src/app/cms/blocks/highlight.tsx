'use client'

import {
	HighlightCard,
	HighlightCardCTA,
	HighlightCardCategory,
	HighlightCardContent,
	HighlightCardDescription,
	HighlightCardImage,
	HighlightCardTitle,
} from '@repo/ui/components/highlight-card'
import { Section } from '@repo/ui/components/section'
import * as React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { getPagePath } from '~/app/[locale]/(pages)/utils'
import type { Block, PageBlocksHighlight } from '~/app/cms/types'

const BlockLayout = ({ children }: { children: React.ReactNode }) => {
	if (!children) return null

	return <Section className="!py-0">{children}</Section>
}

export function HighlightBlock(props: Block<PageBlocksHighlight>) {
	const { title, category, excerpt, image, linkText, reference } = props

	const href = React.useMemo(() => {
		if (!reference) return undefined
		return getPagePath(reference)
	}, [reference])

	if (!href) return null

	return (
		<BlockLayout>
			<HighlightCard
				title={title ?? reference?.title ?? ''}
				className="bg-blog/20"
			>
				<HighlightCardContent>
					<HighlightCardCategory
						value={category}
						data-tina-field={tinaField(props, 'category')}
					/>
					<HighlightCardTitle data-tina-field={tinaField(props, 'title')}>
						{title}
					</HighlightCardTitle>
					<HighlightCardDescription
						data-tina-field={tinaField(props, 'excerpt')}
					>
						{excerpt}
					</HighlightCardDescription>
					<HighlightCardCTA category={category} href={href}>
						{linkText}
					</HighlightCardCTA>
				</HighlightCardContent>
				<HighlightCardImage src={image?.src} alt={image?.alt ?? ''} />
			</HighlightCard>
		</BlockLayout>
	)
}

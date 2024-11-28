'use client'

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	H3,
} from '@nerdfish/ui'
import { nonNullable } from '@repo/lib/utils'
import {
	Section,
	SectionHeader,
	SectionHeaderSubtitle,
	SectionHeaderTitle,
} from '@repo/ui/components'
import * as React from 'react'
import { tinaField } from 'tinacms/dist/react'
import type { Block, PageBlocksFaq } from '~/app/cms'

const BlockLayout = ({ children }: { children: React.ReactNode }) => {
	if (!children) return null

	return <Section>{children}</Section>
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
	const id = React.useId()

	return (
		<AccordionItem
			value={id}
			className="group rounded-container border-none bg-muted p-lg py-sm outline-none transition-colors focus-within:outline-active hover:bg-secondary"
		>
			<AccordionTrigger className="!outline-none py-lg after:hidden hover:no-underline">
				<H3 variant="primary" as="span">
					{question}
				</H3>
			</AccordionTrigger>
			<AccordionContent className="prose prose-xl pt-md text-primary text-xl">
				{answer}
			</AccordionContent>
		</AccordionItem>
	)
}

export function FAQBlock(props: Block<PageBlocksFaq>) {
	const { title, subtitle, qa } = props

	if (!qa?.length) return null

	return (
		<BlockLayout>
			<SectionHeader>
				<SectionHeaderTitle data-tina-field={tinaField(props, 'title')}>
					{title}
				</SectionHeaderTitle>
				<SectionHeaderSubtitle data-tina-field={tinaField(props, 'subtitle')}>
					{subtitle}
				</SectionHeaderSubtitle>
			</SectionHeader>
			<div className="relative">
				<Accordion type="single" className="space-y-md">
					{nonNullable(qa).map((item) => (
						<FAQItem
							question={item.question ?? ''}
							answer={item.answer ?? ''}
							key={item.question}
						/>
					))}
				</Accordion>
			</div>
		</BlockLayout>
	)
}

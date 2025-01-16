'use client'

import { cx } from '@nerdfish/utils'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
	H3,
} from '@repo/design-system/components/ui'
import * as React from 'react'

export interface FaqItemProps
	extends Omit<React.ComponentProps<typeof AccordionItem>, 'value'> {
	question: string
	answer: string
}

export function FaqItem({ question, answer, ...props }: FaqItemProps) {
	const id = React.useId()

	return (
		<AccordionItem
			{...props}
			value={id}
			className="rounded-container bg-muted p-lg py-sm focus-within:outline-active hover:bg-muted/50 group border-none outline-none transition-colors"
		>
			<AccordionTrigger className="py-lg !outline-none after:hidden hover:no-underline">
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

export type FaqProps = React.ComponentProps<typeof Accordion>

export function Faq({ className, children, ...props }: FaqProps) {
	return (
		<div className="relative">
			<Accordion {...props} className={cx('space-y-md', className)}>
				{children}
			</Accordion>
		</div>
	)
}
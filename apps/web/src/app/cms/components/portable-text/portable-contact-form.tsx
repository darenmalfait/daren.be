'use client'

import type { ExtractProps } from '@nerdfish/utils'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import { ContactForm } from '~/app/[locale]/contact/components/contact-form'

export function PortableContactForm({
	content,
}: {
	content?: ExtractProps<typeof TinaMarkdown>['content']
}) {
	return (
		<div className="not-prose [&:not(:first-child)]:!mb-xl">
			{content ? (
				<div className="mb-lg">
					<TinaMarkdown content={content} />
				</div>
			) : null}
			<ContactForm />
		</div>
	)
}

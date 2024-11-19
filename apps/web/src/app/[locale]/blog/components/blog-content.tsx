'use client'

import { H1 } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { DateFormatter, Section } from '@nerdfish-website/ui/components'
import Image from 'next/image'
import * as React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { BlogOverviewBlock } from '../blocks'
import { BackToBlog } from './misc'
import { PortableText, type BlogPostQueryQuery } from '~/app/cms'
import { ReadingProgress } from '~/app/common'
import { useTranslation } from '~/app/i18n'

const prose = 'prose dark:prose-invert md:prose-lg lg:prose-xl max-w-4xl'

function BlogContent({ data }: { data: BlogPostQueryQuery }) {
	const { title, date, heroImg, body } = data.blog
	const { t, currentLocale } = useTranslation()

	return (
		<article>
			<ReadingProgress offset={1200} />
			<Section className="max-w-4xl">
				<div className="mb-lg">
					<BackToBlog />
				</div>
				<header className={cx('flex max-w-4xl flex-col', prose)}>
					{date ? (
						<span
							className="text-muted mb-xs text-lg"
							data-tina-field={tinaField(data.blog, 'date')}
						>
							Published{' '}
							<DateFormatter dateString={date} format="dd MMMM yyyy" />
						</span>
					) : null}
					<H1
						variant="primary"
						data-tina-field={tinaField(data.blog, 'title')}
						className="!mb-xl w-auto"
					>
						{title}
					</H1>
				</header>
				{heroImg ? (
					<div className={cx(prose, 'mb-xl mx-auto')}>
						<div
							className="rounded-semi overflow-hidden"
							data-tina-field={tinaField(data.blog, 'heroImg')}
						>
							{/* TODO: add aria description */}
							<Image
								aria-hidden
								src={heroImg}
								alt={title}
								width={900}
								height={900}
							/>
						</div>
					</div>
				) : null}

				{body ? (
					<div className={prose}>
						<PortableText
							data-tina-field={tinaField(data.blog, 'body')}
							content={body}
						/>
					</div>
				) : null}
			</Section>
			<BlogOverviewBlock
				header={{
					title: t('blog.related.title'),
					subtitle: t('blog.related.subtitle'),
				}}
				count={2}
				locale={currentLocale}
				relatedTo={data.blog}
			/>
		</article>
	)
}

export { BlogContent }

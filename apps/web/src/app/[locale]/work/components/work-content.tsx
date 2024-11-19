import { Button, H4, Paragraph } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import {
	ArticleCard,
	ArticleCardCategory,
	ArticleCardContent,
	ArticleCardImage,
	ArticleCardTitle,
	CategoryIndicator,
	getCategoryColors,
	Section,
} from '@nerdfish-website/ui/components'
import { ArrowRight } from '@nerdfish-website/ui/icons'
import Link from 'next/link'
import * as React from 'react'
import { tinaField } from 'tinacms/dist/react'
import { mapWorkData } from '../api'
import { getWorkPath } from '../utils'
import { Blocks, PortableText, type WorkQueryQuery } from '~/app/cms'
import {
	SectionHeader,
	SectionHeaderSubtitle,
	SectionHeaderTitle,
} from '~/app/common'

const prose = 'prose dark:prose-invert max-w-4xl'

function WorkContent({ data }: { data: WorkQueryQuery }) {
	const { title, date, category, body, url, excerpt, blocks } = data.work

	const blockData = { ...mapWorkData(data) }
	const { works: allWorks } = blockData

	const relatedWorks = React.useMemo(() => {
		return allWorks
			.filter(
				(work) =>
					work.title !== title &&
					work.date !== date &&
					work.category === category,
			)
			.slice(0, 2)
	}, [allWorks, category, date, title])

	return (
		<div className="relative">
			<Section asChild>
				<article className="gap-xl px-lg -mt-3xl mx-auto flex flex-col pt-0 xl:flex-row">
					<Section
						className={cx({
							'xl:max-w-[500px]': blocks?.length,
							'container mx-auto max-w-4xl': !blocks?.length,
						})}
					>
						<div className="py-lg xl:sticky xl:top-0">
							<header className={cx('mb-lg flex max-w-4xl flex-col', prose)}>
								<H4
									as="h1"
									variant="primary"
									data-tina-field={tinaField(data.work, 'title')}
									className="!m-0 w-auto !text-4xl"
								>
									{title}
								</H4>
								<div className="mt-xs gap-md relative flex">
									{url ? (
										<div className="mb-md">
											<Button variant="secondary" asChild>
												<Link
													className="group no-underline"
													href={url}
													target="_blank"
												>
													Visit website
													<span className={getCategoryColors(category)}>
														<ArrowRight
															className={cx(
																'group-hover:translate-x-xs ml-sm group-hover:text-primary size-4 text-current transition-all',
															)}
														/>
													</span>
												</Link>
											</Button>
										</div>
									) : null}
									<CategoryIndicator category={category} inline />
								</div>
							</header>

							{excerpt ? (
								<Paragraph
									className="mb-md text-xl font-bold"
									data-tina-field={tinaField(data.work, 'excerpt')}
								>
									{excerpt}
								</Paragraph>
							) : null}

							{body ? (
								<div className={prose}>
									<PortableText
										data-tina-field={tinaField(data.work, 'body')}
										content={body}
									/>
								</div>
							) : null}
						</div>
					</Section>

					{blocks?.length ? (
						<div className="flex-flex-col flex-1">
							<div className="-mx-md">
								<Blocks items={blocks} />
							</div>
						</div>
					) : null}
				</article>
			</Section>

			{relatedWorks.length > 0 ? (
				<Section>
					<SectionHeader>
						<SectionHeaderTitle>Done reading?</SectionHeaderTitle>
						<SectionHeaderSubtitle>See related work</SectionHeaderSubtitle>
					</SectionHeader>
					<div className="relative my-16 grid grid-cols-4 gap-x-4 gap-y-16 md:grid-cols-8 lg:gap-x-6">
						{relatedWorks.map((work) => {
							return (
								<div key={work.id} className="col-span-4">
									<ArticleCard href={getWorkPath(work)} title={work.title}>
										<ArticleCardImage
											src={work.heroImg}
											category={work.category}
										/>
										<ArticleCardContent>
											<ArticleCardCategory>{work.category}</ArticleCardCategory>
											<ArticleCardTitle>{work.title}</ArticleCardTitle>
										</ArticleCardContent>
									</ArticleCard>
								</div>
							)
						})}
					</div>
				</Section>
			) : null}
		</div>
	)
}

export { WorkContent }

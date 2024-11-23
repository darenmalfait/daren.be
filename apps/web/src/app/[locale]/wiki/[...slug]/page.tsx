import { createMetadata } from '@nerdfish-website/seo/metadata'
import { type Metadata } from 'next'
import { draftMode } from 'next/headers'
import { getRouteData } from './route-data'
import { WikiContent } from '~/app/[locale]/wiki/components/wiki-content'
import { WikiPreview } from '~/app/[locale]/wiki/components/wiki-preview'
import { generateOGImageUrl } from '~/app/api/og'
import { i18n } from '~/app/i18n'

export async function generateMetadata({
	params,
}: {
	params: { slug: string[] }
}): Promise<Metadata | undefined> {
	const { data } = await getRouteData(params.slug.join('/'))
	const title = data.wiki.seo?.title ?? (data.wiki.title || 'Untitled')

	return createMetadata({
		title,
		description: data.wiki.seo?.description ?? '',
		image: data.wiki.seo?.seoImg
			? data.wiki.seo.seoImg
			: generateOGImageUrl({
					heading: title,
				}),
		alternates: {
			canonical: data.wiki.seo?.canonical,
		},
		locale: i18n.defaultLocale,
	})
}

export default async function WikiPage({
	params,
}: {
	params: { slug: string[] }
}) {
	const routeData = await getRouteData(params.slug.join('/'))
	const { isEnabled: isPreview } = draftMode()

	if (isPreview) return <WikiPreview {...routeData} />
	return <WikiContent {...routeData} />
}

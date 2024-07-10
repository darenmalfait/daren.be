import { stripPreSlash } from '@nerdfish-website/lib/utils'
import { Icons } from '@nerdfish-website/ui/icons'
import Link from 'next/link'
import * as React from 'react'

function PortableLink({ url, children }: { url?: string; children: string }) {
	const isExternal = url?.startsWith('http')
	const slug = isExternal ? url : `/${stripPreSlash(url ?? '')}`

	if (!slug) return null

	return (
		<Link
			className="border-nerdfish hover:text-nerdfish inline-flex items-center border-b-2 font-normal text-inherit no-underline transition-colors"
			href={slug}
			target={isExternal ? '_blank' : undefined}
		>
			{children}
			{isExternal ? <Icons.ExternalLink className="ml-1 h-4 w-4" /> : null}
		</Link>
	)
}

export { PortableLink }

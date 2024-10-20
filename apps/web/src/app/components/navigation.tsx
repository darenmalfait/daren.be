'use client'

import {
	Button,
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuLink,
	NavigationMenuList,
	NavigationMenuTrigger,
} from '@nerdfish/ui'
import { cva, cx } from '@nerdfish/utils'
import { stripPreSlash } from '@nerdfish-website/lib/utils'
import {
	FacebookIcon,
	GithubIcon,
	InstagramIcon,
	LinkedinIcon,
	RssIcon,
	TwitterIcon,
} from '@nerdfish-website/ui/icons'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import * as React from 'react'
import { useScramble } from 'use-scramble'
import { type GlobalNavigationMain, type GlobalNavigationMainSub } from '../cms'
import { useGlobal } from '../global-provider'

export function RSSFeedButton({ className }: { className?: string }) {
	return (
		<Button variant="ghost" size="icon" className={className} asChild>
			<a target="_blank" href="/rss.xml" aria-label="rss feed" rel="noreferrer">
				<span className="sr-only">RSS feed</span>
				<RssIcon className="size-4" />
			</a>
		</Button>
	)
}

export function ActionsNavigation({
	className,
	onSelect,
}: {
	className?: string
	onSelect?: () => void
}) {
	const { navigation } = useGlobal()

	return (
		<div className={cx('space-x-3', className)}>
			{navigation?.actions?.map((link) => {
				if (!link) return null

				return (
					<Button
						key={link.label}
						onClick={onSelect}
						variant="accentuate"
						asChild
					>
						<Link href={`/${stripPreSlash(link.href)}`}>{link.label}</Link>
					</Button>
				)
			})}
		</div>
	)
}

const MainNavigationSubItem = React.forwardRef<
	React.ElementRef<typeof Link>,
	React.ComponentPropsWithoutRef<typeof Link> & GlobalNavigationMainSub
>(({ href, label, description, className, ...props }, ref) => {
	return (
		<NavigationMenuItem className="w-full">
			<NavigationMenuLink asChild>
				<Link
					className={cx(
						'focus-within:outline-active rounded-semi bg-muted group relative flex h-full w-full select-none flex-col justify-end space-y-1 p-4 leading-none no-underline outline-none transition-colors',
						className,
					)}
					ref={ref}
					href={`/${stripPreSlash(href)}`}
					{...props}
				>
					<div className="bg-inverted/5 rounded-semi absolute inset-0 hidden group-hover:block" />
					<div className="text-sm font-medium leading-none">{label}</div>
					{description ? (
						<p className="text-muted mb-0 line-clamp-2 text-sm leading-snug">
							{description}
						</p>
					) : null}
				</Link>
			</NavigationMenuLink>
		</NavigationMenuItem>
	)
})
MainNavigationSubItem.displayName = 'MainNavigationSubItem'

const getMainItemClassName = cva(
	'relative flex h-8 cursor-pointer bg-transparent font-semibold hover:text-primary items-center gap-x-1.5 whitespace-nowrap rounded-semi px-3 capitalize outline-none !ring-muted transition focus-outline active:bg-primary sm:h-10 sm:px-4',
	{
		variants: {
			variant: {
				active: 'text-muted',
				default: 'px-3 text-primary',
			},
		},
	},
)

const MainNavigationItem = React.forwardRef<
	React.ElementRef<'a'>,
	Omit<React.ComponentPropsWithoutRef<'a'>, 'href'> & GlobalNavigationMain
>(({ href, label, sub, ...props }, ref) => {
	const pathname = usePathname()
	if (!sub?.length && !href) return null

	if (!sub?.length) {
		const isActive = stripPreSlash(pathname).startsWith(
			stripPreSlash(href ?? ''),
		)

		return (
			<NavigationMenuItem>
				<NavigationMenuLink asChild>
					<Button
						variant="ghost"
						className={cx(
							getMainItemClassName({
								variant: isActive ? 'active' : 'default',
							}),
						)}
						asChild
					>
						<Link {...props} ref={ref} href={`/${stripPreSlash(href ?? '')}`}>
							{label}
						</Link>
					</Button>
				</NavigationMenuLink>
			</NavigationMenuItem>
		)
	}

	const isActive = sub.some((subNavItem) => {
		if (!subNavItem) return false

		return stripPreSlash(pathname).startsWith(subNavItem.href)
	})

	return (
		<NavigationMenuItem>
			<NavigationMenuTrigger
				className={getMainItemClassName({
					variant: isActive ? 'active' : 'default',
				})}
			>
				{label}
			</NavigationMenuTrigger>
			<NavigationMenuContent className="bg-primary rounded-semi">
				<ul
					className={cx(
						'grid gap-2 p-2 md:w-[400px] lg:w-[500px]',
						'lg:grid-cols-3 lg:grid-rows-2',
					)}
				>
					{sub.map((subNavItem) => {
						if (!subNavItem) return null

						return (
							<li
								key={subNavItem.label}
								className={cx('rounded-semi col-span-3 flex h-full w-full', {
									'lg:col-span-2 first:lg:col-span-1 first:lg:row-span-2':
										sub.length > 2,
								})}
							>
								<MainNavigationSubItem {...subNavItem} />
							</li>
						)
					})}
				</ul>
			</NavigationMenuContent>
		</NavigationMenuItem>
	)
})

MainNavigationItem.displayName = 'MainNavigationItem'

export function SocialLinks() {
	const { social } = useGlobal()

	return (
		<div className="flex flex-row items-center gap-3">
			{social?.twitter ? (
				<Button variant="ghost" size="icon" asChild>
					<Link aria-label="Twitter feed" href={social.twitter}>
						<TwitterIcon className="size-4 duration-75 ease-linear" />
					</Link>
				</Button>
			) : null}
			{social?.facebook ? (
				<Button variant="ghost" size="icon" asChild>
					<Link aria-label="Facebook page" href={social.facebook}>
						<FacebookIcon className="size-4 duration-75 ease-linear" />
					</Link>
				</Button>
			) : null}
			{social?.instagram ? (
				<Button variant="ghost" size="icon" asChild>
					<Link
						aria-label="Instagram
          "
						href={social.instagram}
					>
						<InstagramIcon className="size-4 duration-75 ease-linear" />
					</Link>
				</Button>
			) : null}
			{social?.linkedIn ? (
				<Button variant="ghost" size="icon" asChild>
					<Link aria-label="LinkedIn profile" href={social.linkedIn}>
						<LinkedinIcon className="size-4 duration-75 ease-linear" />
					</Link>
				</Button>
			) : null}
			{social?.github ? (
				<Button variant="ghost" size="icon" asChild>
					<Link aria-label="Github Repository" href={social.github}>
						<GithubIcon className="size-4 duration-75 ease-linear" />
						<span className="sr-only">Github</span>
					</Link>
				</Button>
			) : null}
		</div>
	)
}

function AINavigationItem() {
	const { ref, replay } = useScramble({
		text: '[AI]',
		speed: 0.6,
		tick: 1,
		step: 1,
		scramble: 4,
		seed: 0,
		playOnMount: false,
	})

	return (
		<NavigationMenuItem asChild>
			<MainNavigationItem
				ref={ref}
				onMouseEnter={replay}
				aria-label="AI"
				label="[AI]"
				href="/ai"
			/>
		</NavigationMenuItem>
	)
}

export function MainNavigation() {
	const { navigation } = useGlobal()

	return (
		<NavigationMenu>
			<NavigationMenuList className="gap-2" aria-label="Pages">
				{navigation?.main?.map((mainNavItem) => {
					if (!mainNavItem) return null

					return <MainNavigationItem key={mainNavItem.label} {...mainNavItem} />
				})}
				<AINavigationItem />
			</NavigationMenuList>
		</NavigationMenu>
	)
}

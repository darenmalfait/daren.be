'use client'

import { Button } from '@nerdfish/ui'
import { cx } from '@nerdfish/utils'
import { MessageCircleIcon, XIcon } from '@repo/ui/icons'
import * as React from 'react'

export type ChatPosition = 'bottom-right' | 'bottom-left'
export type ChatSize = 'sm' | 'md' | 'lg' | 'xl' | 'full'

const chatConfig = {
	dimensions: {
		sm: 'sm:max-w-sm sm:max-h-[500px]',
		md: 'sm:max-w-md sm:max-h-[600px]',
		lg: 'sm:max-w-lg sm:max-h-[700px]',
		xl: 'sm:max-w-xl sm:max-h-[800px]',
		full: 'sm:w-full sm:h-full',
	},
	positions: {
		'bottom-right': 'bottom-5 right-5',
		'bottom-left': 'bottom-5 left-5',
	},
	chatPositions: {
		'bottom-right': 'sm:bottom-[calc(100%+10px)] sm:right-0',
		'bottom-left': 'sm:bottom-[calc(100%+10px)] sm:left-0',
	},
	states: {
		open: 'pointer-events-auto opacity-100 visible scale-100 translate-y-0',
		closed:
			'pointer-events-none opacity-0 invisible scale-100 sm:translate-y-5',
	},
}

export const ExpandableChatHeader = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx(
			'flex items-center justify-between border-b-muted p-md',
			className
		)}
		{...props}
	/>
))
ExpandableChatHeader.displayName = 'ExpandableChatHeader'

export const ExpandableChatBody = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx('flex-1 flex-grow overflow-y-auto p-md', className)}
		{...props}
	/>
))
ExpandableChatBody.displayName = 'ExpandableChatBody'

export const ExpandableChatFooter = React.forwardRef<
	HTMLDivElement,
	React.ComponentPropsWithoutRef<'div'>
>(({ className, ...props }, ref) => (
	<div
		ref={ref}
		className={cx('border-muted border-t p-md', className)}
		{...props}
	/>
))

ExpandableChatFooter.displayName = 'ExpandableChatFooter'

interface ExpandableChatToggleProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	icon?: React.ReactNode
	isOpen: boolean
	toggleChat: () => void
}

const ExpandableChatToggle = React.forwardRef<
	HTMLButtonElement,
	ExpandableChatToggleProps
>(({ className, icon, isOpen, toggleChat, ...props }, ref) => (
	<Button
		ref={ref}
		variant="default"
		onClick={toggleChat}
		className={cx(
			'-z-1 group flex h-14 w-14 items-center justify-center transition-all duration-300 hover:scale-110',
			className
		)}
		{...props}
	>
		{isOpen ? (
			<XIcon className="h-6 w-6" />
		) : (
			(icon ?? (
				<MessageCircleIcon className="group-hover:motion-preset-seesaw h-6 w-6" />
			))
		)}
	</Button>
))

ExpandableChatToggle.displayName = 'ExpandableChatToggle'

interface ExpandableChatProps extends React.HTMLAttributes<HTMLDivElement> {
	position?: ChatPosition
	size?: ChatSize
	icon?: React.ReactNode
}

export const ExpandableChat = React.forwardRef<
	HTMLDivElement,
	ExpandableChatProps
>(
	(
		{
			className,
			position = 'bottom-right',
			size = 'md',
			icon,
			children,
			'aria-label': ariaLabel,
			...props
		},
		ref
	) => {
		const [isOpen, setIsOpen] = React.useState(false)

		return (
			<div
				ref={ref}
				className={cx(
					`fixed ${chatConfig.positions[position]} z-50`,
					className
				)}
				{...props}
			>
				<div
					className={cx(
						'fixed inset-0 flex h-full w-full flex-col overflow-hidden bg-primary shadow-md shadow-outline transition-all duration-250 ease-out sm:absolute sm:inset-auto sm:h-[80vh] sm:w-[90vw] sm:rounded-base',
						chatConfig.chatPositions[position],
						chatConfig.dimensions[size],
						isOpen ? chatConfig.states.open : chatConfig.states.closed,
						className
					)}
				>
					{children}
					<Button
						variant="ghost"
						size="icon"
						className="absolute top-sm right-sm sm:hidden"
						onClick={() => setIsOpen((current) => !current)}
					>
						<XIcon className="h-4 w-4" />
					</Button>
				</div>
				<ExpandableChatToggle
					icon={icon}
					isOpen={isOpen}
					aria-label={ariaLabel}
					toggleChat={() => setIsOpen((current) => !current)}
				/>
			</div>
		)
	}
)

ExpandableChat.displayName = 'ExpandableChat'

'use client'

import { Mockup, MockupWindow } from '@nerdfish/ui'
import { themes } from 'prism-react-renderer'
import { CopyButton } from '../copy-button'
import { Highlight } from './highlight'

export function CodeBlock(props: { children: any; lang?: string }) {
	if (!props.children?.props) throw new Error('CodeBlock must have children')
	const { children, viewlines, ln } = props.children.props

	const rawCode = children.trim()

	const theme = {
		...themes.shadesOfPurple,
		plain: {
			backgroundColor: 'bg-muted',
			color: themes.shadesOfPurple.plain.color,
		},
	}

	return (
		<div className="dark relative z-0">
			<Mockup
				className="overflow-hidden px-0"
				style={{
					backgroundColor: theme.plain.backgroundColor,
				}}
			>
				<MockupWindow>
					<CopyButton code={rawCode} />
					<Highlight
						codeString={rawCode}
						language={props.lang ?? 'typescript'}
						theme={theme}
						metastring={ln}
						showLines={viewlines}
					/>
				</MockupWindow>
			</Mockup>
		</div>
	)
}

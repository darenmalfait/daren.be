import { type Thing, type WithContext } from 'schema-dts'

export const JsonLd = ({ code }: { code: WithContext<Thing> }) => (
	<script
		type="application/ld+json"
		// biome-ignore lint/security/noDangerouslySetInnerHtml: "This is a JSON-LD script, not user-generated content."
		dangerouslySetInnerHTML={{ __html: JSON.stringify(code) }}
	/>
)

export * from 'schema-dts'
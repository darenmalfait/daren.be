import { env } from '@repo/env'
import { defineStaticConfig } from 'tinacms'
import { schema } from './schema'

const config = defineStaticConfig({
	clientId: env.NEXT_PUBLIC_TINA_CLIENT_ID,
	branch:
		env.NEXT_PUBLIC_TINA_BRANCH ?? // custom branch env override
		env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_REF ?? // Vercel branch env
		env.HEAD ?? // Netlify branch env
		'',
	token: env.TINA_TOKEN,
	media: {
		// If you wanted cloudinary do this
		// loadCustomStore: async () => {
		//   const pack = await import('next-tinacms-cloudinary')

		//   //  as any because the types are wrong
		//   return pack.TinaCloudCloudinaryMediaStore as any
		// },
		// this is the config for the tina cloud media store
		tina: {
			publicFolder: 'public',
			mediaRoot: 'uploads',
		},
	},
	admin: {
		authHooks: {
			onLogin: async ({ token }) => {
				location.href = `/api/preview/enter?token=${token.id_token}&slug=${location.pathname}`
			},
		},
	},
	build: {
		publicFolder: 'public', // The public asset folder for your framework
		outputFolder: 'admin', // within the public folder
	},
	schema,
})

export default config

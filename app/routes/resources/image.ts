import type { LoaderArgs } from '@remix-run/node'

import { MimeType, Transformer } from 'remix-image'
import { imageLoader, DiskCache } from 'remix-image/server'
import sharp from 'sharp'

const supportedInputs = new Set([
  MimeType.JPEG,
  MimeType.PNG,
  MimeType.WEBP,
  MimeType.TIFF,
])

const supportedOutputs = new Set([MimeType.JPEG, MimeType.PNG, MimeType.WEBP])

const sharpTransformer: Transformer = {
  fallbackOutput: MimeType.PNG,
  name: 'sharpTransformer',
  supportedInputs,
  supportedOutputs,
  transform: async (
    { data },
    {
      contentType: outputContentType,
      width,
      height,
      fit,
      position,
      background,
      quality,
      compressionLevel,
    },
  ) => {
    const image = sharp(data)

    image
      .resize(width, height, {
        fit,
        position,
        ...{
          background: {
            r: background[0],
            g: background[1],
            b: background[2],
            alpha: background[3],
          },
        },
      })
      .jpeg({
        quality,
        progressive: true,
        force: outputContentType === MimeType.JPEG,
      })
      .png({
        progressive: true,
        compressionLevel,
        force: outputContentType === MimeType.PNG,
      })
      .webp({
        quality,
        force: outputContentType === MimeType.WEBP,
      })
      .tiff({
        quality,
        // cannot be displayed on browsers
        force: false,
      })

    return image.toBuffer()
  },
}

const config = {
  selfUrl: process.env.SANITY_STUDIO_PROJECT_URL || '',
  whitelistedDomains: ['cdn.sanity.io'],
  cache: new DiskCache(),
  transformer: sharpTransformer,
}

export function loader({ request }: LoaderArgs) {
  return imageLoader(config, request)
}

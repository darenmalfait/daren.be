import type { ExtractProps } from '@daren/ui-components'
import { TinaMarkdown } from 'tinacms/dist/rich-text'

import { PortableButton } from './portable-button'
import { PortableCode } from './portable-code'
import { PortableContactForm } from './portable-contact-form'
import { PortableImage } from './portable-image'

import { Link } from '../link'

function PortableText(props: ExtractProps<typeof TinaMarkdown>) {
  return (
    <TinaMarkdown
      {...props}
      components={
        {
          Button: PortableButton,
          ContactForm: PortableContactForm,
          code_block: PortableCode,
          img: PortableImage,
          a: Link,
        } as any
      }
    />
  )
}

export { PortableText }

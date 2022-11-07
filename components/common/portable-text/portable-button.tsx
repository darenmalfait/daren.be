import { ButtonLink, ExtractProps } from '@daren/ui-components'

import { stripPreSlash } from '../../../lib/utils/string'

function PortableButton({
  text,
  href,
  variant = 'primary',
  ...props
}: { text: string } & Pick<
  ExtractProps<typeof ButtonLink>,
  'href' | 'variant'
>) {
  const isExternal = href?.startsWith('http')
  const slug = isExternal ? href : `/${stripPreSlash(href)}`

  return (
    <div className="inline-block w-auto">
      <ButtonLink
        {...props}
        href={slug}
        variant={variant !== '' ? variant : 'primary'}
        external={isExternal}
      >
        {text}
      </ButtonLink>
    </div>
  )
}

export { PortableButton }

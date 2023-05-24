import {Container, Grid, Paragraph, Section} from '@nerdfish/ui'
import {Bookmark, ChevronRight, Rss} from 'lucide-react'

import {BigTitle} from '~/components/blocks/big-title'
import {ArrowLink} from '~/components/common/arrow-link'
import global from '~/content/global/index.json'
import {stripPreSlash} from '~/lib/utils/string'

function ErrorPage({
  title = '404',
  subTitle,
}: {
  title?: string
  subTitle?: string
}) {
  const paths = global.paths

  const links = [
    {
      title: 'Blog',
      description: 'Read about my latest news and articles.',
      icon: Rss,
      href: `/${stripPreSlash(paths.blog || '')}`,
    },
    {
      title: 'Get in touch',
      description: "Send me a message and I'll get back to you.",
      icon: Bookmark,
      href: `/${stripPreSlash(paths.contact || '')}`,
    },
  ]

  return (
    <>
      <Section>
        <BigTitle title={title} />
      </Section>
      <Section>
        <Grid>
          <Container size="full">
            <div className="relative w-full pb-8 pt-6 text-center lg:py-8 lg:text-left">
              <div className="flex flex-auto flex-col justify-start lg:w-1/2 xl:pr-16">
                <div className="max-w-xl py-16 sm:py-24">
                  <div className="text-center lg:text-left">
                    <Paragraph className="text-secondary mt-2 text-lg">
                      {subTitle}
                    </Paragraph>
                  </div>
                  <div className="mt-12">
                    <h2 className="text-secondary text-sm font-semibold uppercase tracking-wide">
                      Popular pages
                    </h2>
                    <ul className="mt-4 divide-y divide-gray-200 border-y border-gray-200">
                      {links.map((link, i) => (
                        <li
                          key={i}
                          className="group relative flex items-start space-x-4 py-6"
                        >
                          <div className="shrink-0">
                            <span className="bg-inverse flex h-12 w-12 items-center justify-center rounded-lg">
                              <link.icon
                                className="text-inverse h-6 w-6"
                                aria-hidden="true"
                              />
                            </span>
                          </div>
                          <div className="min-w-0 flex-1">
                            <h3 className="text-primary text-base font-medium">
                              <span className="focus-within:ring-accent rounded-sm focus-within:ring-2 focus-within:ring-offset-2">
                                <a
                                  href={link.href}
                                  className="focus:outline-none"
                                >
                                  <span
                                    className="absolute inset-0"
                                    aria-hidden="true"
                                  />
                                  {link.title}
                                </a>
                              </span>
                            </h3>
                            <p className="text-secondary text-base">
                              {link.description}
                            </p>
                          </div>
                          <div className="shrink-0 self-center">
                            <ChevronRight
                              className="h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <ArrowLink href="/">Back to website</ArrowLink>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative mx-auto flex w-full items-center sm:w-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-1/2">
                <img
                  className="max-w-96 mx-auto w-full rounded-md"
                  src="/images/cat-on-box.png"
                  alt="not found"
                />
              </div>
            </div>
          </Container>
        </Grid>
      </Section>
    </>
  )
}

function FourOhFour({title, subTitle}: {title?: string; subTitle?: string}) {
  return (
    <ErrorPage
      title={title ?? "404 - Page doesn't exist"}
      subTitle={
        subTitle ?? "Sorry, we couldn't find the page you were looking for."
      }
    />
  )
}

function ServerError({error}: {error?: Error}) {
  return (
    <ErrorPage
      title="500 - Oh no, something went wrong!"
      subTitle={error?.message}
    />
  )
}

export {FourOhFour, ServerError}

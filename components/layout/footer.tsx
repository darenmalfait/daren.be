import {ThemeToggle} from 'components/common/theme-toggle'

import {useGlobal} from '../../context/global-provider'
import {Link} from '../common/link'
import {GithubIcon} from '../icons/github-icon'
import {Logo} from '../icons/logo'
import {TwitterIcon} from '../icons/twitter-icon'

function Footer() {
  const {social} = useGlobal()

  const github = social?.github
  const twitter = social?.twitter

  return (
    <footer className="mt-24 px-5vw pb-8 text-primary md:pb-20">
      <div className="flex flex-col items-center justify-between gap-8 border-t border-gray-100 pt-8 dark:border-white/10 md:flex-row md:pt-16">
        <div className="flex flex-col items-center gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center">
            <Logo className="relative h-12 w-12 rounded-full border-2 border-white dark:border-[#111]" />
          </div>
          <p className="max-w-md">
            <b className="font-semibold">
              Made by{' '}
              <Link
                className="underline"
                href={twitter ?? github ?? 'https://www.daren.be'}
              >
                Daren
              </Link>
            </b>
            , a freelance web developer that keeps user experience in mind.
          </p>
        </div>
        <div className="flex flex-row items-center gap-3 md:gap-7">
          <ThemeToggle className="flex h-10 w-10 items-center justify-center rounded-full transition hover:bg-github/20" />

          {twitter ? (
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full transition focus-ring hover:bg-twitter/20"
              aria-label="Twitter feed"
              href={twitter}
            >
              <TwitterIcon className="duration-75 ease-linear" />
            </Link>
          ) : null}
          {github ? (
            <Link
              className="flex h-10 w-10 items-center justify-center rounded-full transition focus-ring hover:bg-github/20"
              aria-label="Github Repository"
              href={github}
            >
              <GithubIcon className="duration-75 ease-linear" />
              <span className="sr-only">Github</span>
            </Link>
          ) : null}
        </div>
      </div>
    </footer>
  )
}

export {Footer}

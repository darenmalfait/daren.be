import { Combobox, Dialog, Transition } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import clsx from 'clsx'
import * as React from 'react'
import {
  InstantSearch,
  useHits,
  useSearchBox,
  Configure,
} from 'react-instantsearch-hooks-web'

type SearchItem = {
  title?: string
  slug: string
  type?: string
}

import { getAlgoliaClient } from '../../lib/services/search'
import { stripPreSlash } from '../../lib/utils/string'

const INDEX_NAME = process.env.NEXT_PUBLIC_ALGOLIA_INDEX_NAME ?? ''
const searchClient = getAlgoliaClient().algoliaClient

function Hits() {
  const transformItems = React.useCallback(
    (items: any[]) =>
      items.map(item => ({
        ...item,
      })),
    [],
  )

  const { hits } = useHits<SearchItem>({ transformItems })

  return (
    <>
      {hits.length === 0 && (
        <p className="p-4 text-primary">No results found!</p>
      )}

      {hits.length > 0 && (
        <Combobox.Options
          static
          className="max-h-72 scroll-py-2 overflow-y-auto py-2 text-sm text-primary"
        >
          {hits.map((hit, index) => (
            <Combobox.Option
              tabIndex={index}
              key={hit.objectID}
              value={hit}
              className={({ active }) =>
                clsx(
                  'flex max-w-full items-center justify-between p-4',
                  active && 'bg-primary',
                )
              }
            >
              <span className="truncate whitespace-nowrap font-semibold text-primary">
                {hit.title?.toLowerCase()}
              </span>
              <span className="ml-4 text-right text-xs text-secondary">
                {hit.type}
              </span>
            </Combobox.Option>
          ))}
        </Combobox.Options>
      )}
    </>
  )
}

function SearchInput() {
  const [open, setOpen] = React.useState(false)
  const { refine } = useSearchBox()

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  function handleKeyDown(event: KeyboardEvent) {
    if (event.metaKey && event.key === 'k') {
      event.preventDefault()
      setOpen(true)
    }
  }

  return (
    <>
      <button
        type="button"
        className="flex items-center justify-center rounded-full p-2 focus-ring"
        onClick={() => setOpen(true)}
      >
        <MagnifyingGlassIcon className="w-5" />
        <div className="sr-only">Search</div>
      </button>
      <Transition.Root show={open} as={React.Fragment} appear>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setOpen(false)}
        >
          <Transition.Child
            as={React.Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div
              className={clsx('fixed inset-0 bg-black transition-opacity ', {
                'opacity-25 dark:opacity-70': open,
                'opacity-0': !open,
              })}
            />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto p-4 sm:p-6 md:p-20">
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="group mx-auto max-w-xl rounded-xl shadow-2xl transition-all bg-secondary">
                <Combobox
                  onChange={(item: SearchItem) => {
                    window.location = `/${stripPreSlash(
                      item.slug,
                    )}` as unknown as Location
                    setOpen(false)
                  }}
                >
                  <div className="relative">
                    <Combobox.Input
                      id="algolia_search"
                      type="search"
                      className="h-12 w-full rounded-lg border-0 bg-primary-600 pr-11 pl-4 font-bold text-black outline-none placeholder:text-gray-500 focus:ring-0 sm:text-sm"
                      placeholder="Search components..."
                      onChange={event => refine(event.currentTarget.value)}
                    />
                    <MagnifyingGlassIcon
                      className="pointer-events-none absolute top-3.5 right-4 h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </div>

                  <Hits />
                </Combobox>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

function Search() {
  return (
    <InstantSearch searchClient={searchClient} indexName={INDEX_NAME}>
      <Configure hitsPerPage={5} />
      <SearchInput />
    </InstantSearch>
  )
}

export { Search }

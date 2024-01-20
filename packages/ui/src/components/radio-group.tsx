'use client'

import * as React from 'react'
// TODO: replace headlessui with own implementation
import {RadioGroup as HeadlessRadioGroup} from '@headlessui/react'
import {cx, ExtractProps, useControllableState} from '@nerdfish/utils'
import {CheckCircle} from 'lucide-react'

interface OptionProps {
  value: any
  label: string
  description?: string
}

function Option({
  value,
  label,
  description,
  className,
  ...props
}: OptionProps & ExtractProps<typeof HeadlessRadioGroup.Option>) {
  return (
    <HeadlessRadioGroup.Option
      value={value}
      {...props}
      className={({active, checked}: {active: boolean; checked: boolean}) =>
        cx(
          className,
          'relative block cursor-pointer rounded-lg px-6 py-4 shadow-sm focus:outline-none sm:flex sm:justify-between',
          {
            'bg-inverted/10': !checked,
            'bg-inverted': checked,
            'shadow-outline ring-2': active,
          },
        )
      }
    >
      {({checked}) => (
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center">
            <div className="text-sm">
              <HeadlessRadioGroup.Label
                as="p"
                className={cx(
                  'font-bold',
                  checked ? 'text-inverted' : 'text-primary',
                )}
              >
                {label}
              </HeadlessRadioGroup.Label>
              {description ? (
                <HeadlessRadioGroup.Description
                  as="span"
                  className={cx(
                    'inline',
                    checked ? 'text-inverted' : 'text-muted',
                  )}
                >
                  {description}
                </HeadlessRadioGroup.Description>
              ) : null}
            </div>
          </div>
          {checked ? (
            <div className="text-inverse shrink-0">
              <CheckCircle className="size-6" />
            </div>
          ) : null}
          <span
            className={cx('pointer-events-none absolute -inset-px rounded-lg')}
            aria-hidden="true"
          />
        </div>
      )}
    </HeadlessRadioGroup.Option>
  )
}

interface RadioGroupProps {
  name: string
  value?: any
  label?: string
  onChange?: (value: any) => void
  children?: React.ReactNode
}

const RawRadioGroup = React.forwardRef<
  HTMLInputElement,
  ExtractProps<typeof HeadlessRadioGroup> & RadioGroupProps
>(function RadioGroup(
  {name, value: valueProp, defaultValue, label, onChange, children, ...props},
  ref,
) {
  const [value, setValue] = useControllableState(
    valueProp,
    defaultValue,
    onChange,
  )

  return (
    <HeadlessRadioGroup
      name={name}
      ref={ref}
      value={value}
      onChange={setValue}
      {...props}
    >
      {label ? (
        <HeadlessRadioGroup.Label className="sr-only">
          {label}
        </HeadlessRadioGroup.Label>
      ) : null}
      <div className="space-y-2">{children}</div>
    </HeadlessRadioGroup>
  )
})

const RadioGroup = Object.assign(RawRadioGroup, {Option})

export {RadioGroup}

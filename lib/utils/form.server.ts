import type {NextApiResponse} from 'next'

import type {NonNullProperties} from '../../lib/types/misc'

import {getErrorMessage, getNonNull} from './misc'

type ErrorMessage = string
type NoError = null
type FormValue = string | null

async function handleFormSubmission<
  ActionData extends {
    status: 'success' | 'error' | string
    fields: {[field: string]: FormValue}
    errors: {[field: string]: ErrorMessage | NoError}
  },
>({
  values,
  response,
  validators,
  // @ts-expect-error ts(2322) 🤷‍♂️
  actionData = {fields: {}, errors: {}},
  handleFormValues,
}: {
  validators: {
    [Key in keyof ActionData['errors']]: (
      formValue: FormValue,
      fields: ActionData['fields'],
    ) => Promise<ErrorMessage | NoError> | ErrorMessage | NoError
  }
  actionData?: ActionData
  handleFormValues: (
    formValues: NonNullProperties<ActionData['fields']>,
  ) => Response | Promise<Response> | Promise<void>
} & {
  values: Record<string, string>
  response?: NextApiResponse
}): Promise<Response | Promise<void>> {
  try {
    // collect all values first because validators can reference them
    for (const fieldName of Object.keys(validators)) {
      const formValue = values[fieldName]
      // Default the value to empty string so it doesn't have trouble with
      // getNonNull later. This allows us to have a validator that allows
      // for optional values.
      actionData.fields[fieldName] = formValue ?? ''
    }

    await Promise.all(
      Object.entries(validators).map(async ([fieldName, validator]) => {
        const formValue = values[fieldName] ?? ''
        // Default the value to empty string so it doesn't have trouble with
        // getNonNull later. This allows us to have a validator that allows
        // for optional values.
        actionData.errors[fieldName] = await validator(
          formValue,
          actionData.fields,
        )
      }),
    )

    if (Object.values(actionData.errors).some(err => err !== null)) {
      return response?.status(400).json({...actionData, status: 'error'})
    }

    const nonNullFields = getNonNull(actionData.fields)
    // not sure why, but it wasn't happy without the type cast 🤷‍♂️
    return await handleFormValues(
      nonNullFields as NonNullProperties<ActionData['fields']>,
    )
  } catch (error: unknown) {
    actionData.errors.generalError = getErrorMessage(error)
    return response?.status(500).json(actionData)
  }
}

async function getErrorForRecaptcha(
  recaptcha: string | null,
): Promise<string | null> {
  if (!recaptcha) return 'Recaptcha is required'

  const verifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRETKEY}&response=${recaptcha}`

  const recaptchaRes = await fetch(verifyUrl, {method: 'POST'})

  const recaptchaJson = await recaptchaRes.json()

  if (!recaptchaJson.success) {
    return 'recaptcha-validation-invalid'
  }

  return null
}

export {getErrorForRecaptcha, handleFormSubmission}

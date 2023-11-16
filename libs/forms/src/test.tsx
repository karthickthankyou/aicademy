'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaTest } from './schemas'

export type FormTypeTest = z.infer<typeof formSchemaTest>

export const useFormTest = ({
  defaultValues = { answers: [] },
}: {
  defaultValues?: FormTypeTest
}) =>
  useForm<FormTypeTest>({
    resolver: zodResolver(formSchemaTest),
    defaultValues,
  })

export const FormProviderTest = ({ children }: { children: ReactNode }) => {
  const methods = useFormTest({})
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const useFormContextTest = () => useFormContext<FormTypeTest>()

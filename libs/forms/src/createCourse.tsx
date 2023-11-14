'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { ReactNode } from 'react'

import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateCourse } from './schemas'

export type FormTypeCreateCourse = z.infer<typeof formSchemaCreateCourse>

export const useFormCreateCourse = () =>
  useForm<FormTypeCreateCourse>({
    resolver: zodResolver(formSchemaCreateCourse),
    defaultValues: {
      published: true,
      chapters: [],
      description: '',
      title: '',
    },
  })

export const FormProviderCreateCourse = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateCourse()
  return <FormProvider {...methods}>{children}</FormProvider>
}

export const useFormContextCreateCourse = () =>
  useFormContext<FormTypeCreateCourse>()
